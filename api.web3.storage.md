
# https://api.web3.storage compliance:

## Summary (2/9 successful)

  ✘ Request with no authentication token

  ✘ Request with invalid token

  ✘ Pins post of CID 'baeaaadjsgy2cynrugu2temzug43q'

  ✘ Can create and then delete a new pin

  ✘ List pin objects (GET /pins) in all states

  ✓ Can create and replace a pin's CID

  ✘ Can create a pin with name='b39c1284-a5ec-499c-8f24-e1b9da72183e'

  ✘ Pagination: Get all pins, create new pins (optional), get first and second pages

  ✓ Can delete all pins

## Request with no authentication token - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response object matches api spec schema (failure)

  ✘ Returns a 403 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures

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
  "cf-ray": "714b2607c89e9c66-IAD",
  "connection": "close",
  "content-length": "87",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:35 GMT",
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

#### Joi validation failures

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
  "cf-ray": "714b260d2cb1059c-IAD",
  "connection": "close",
  "content-length": "82",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:36 GMT",
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
## Pins post of CID 'baeaaadjsgy2cynrugu2temzug43q' - ✘ FAILED

### Expectations (1/2 successful)

  ✘ Response object matches api spec schema (failure)

  ✓ Pinning status is either queued, pinning, or pinned (success)




#### Joi validation failures

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
{"cid":"baeaaadjsgy2cynrugu2temzug43q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '16e68b9b-1152-4273-a153-585868f4932d',
  status: 'queued',
  created: '2022-06-01T21:47:37.42+00:00',
  pin: {
    cid: 'baeaaadjsgy2cynrugu2temzug43q',
    _id: '16e68b9b-1152-4273-a153-585868f4932d',
    sourceCid: 'baeaaadjsgy2cynrugu2temzug43q',
    contentCid: 'baeaaadjsgy2cynrugu2temzug43q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:37.42+00:00',
    updated: '2022-06-01T21:47:37.42+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:37.42+00:00',
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
  requestid: '16e68b9b-1152-4273-a153-585868f4932d',
  status: 'queued',
  created: 2022-06-01T21:47:37.420Z,
  pin: {
    cid: 'baeaaadjsgy2cynrugu2temzug43q',
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
  "cf-ray": "714b261368f26f9b-IAD",
  "connection": "close",
  "content-length": "3775",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:37 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "16e68b9b-1152-4273-a153-585868f4932d",
  "status": "queued",
  "created": "2022-06-01T21:47:37.42+00:00",
  "pin": {
    "cid": "baeaaadjsgy2cynrugu2temzug43q",
    "_id": "16e68b9b-1152-4273-a153-585868f4932d",
    "sourceCid": "baeaaadjsgy2cynrugu2temzug43q",
    "contentCid": "baeaaadjsgy2cynrugu2temzug43q",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:37.42+00:00",
    "updated": "2022-06-01T21:47:37.42+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:37.42+00:00",
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




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/0aeb79f2-d18d-4a88-b103-a875a544959c

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/0aeb79f2-d18d-4a88-b103-a875a544959c
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
  "cf-ray": "714b261ff91359e0-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:39 GMT",
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




#### Joi validation failures
No failures

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
{"cid":"baeaaadjsgy2syobzgu3dcojuheya"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '0aeb79f2-d18d-4a88-b103-a875a544959c',
  status: 'queued',
  created: '2022-06-01T21:47:38.434+00:00',
  pin: {
    cid: 'baeaaadjsgy2syobzgu3dcojuheya',
    _id: '0aeb79f2-d18d-4a88-b103-a875a544959c',
    sourceCid: 'baeaaadjsgy2syobzgu3dcojuheya',
    contentCid: 'baeaaadjsgy2syobzgu3dcojuheya',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:38.434+00:00',
    updated: '2022-06-01T21:47:38.434+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:38.434+00:00',
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
  requestid: '0aeb79f2-d18d-4a88-b103-a875a544959c',
  status: 'queued',
  created: 2022-06-01T21:47:38.434Z,
  pin: {
    cid: 'baeaaadjsgy2syobzgu3dcojuheya',
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
  "cf-ray": "714b2619b89d59c1-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:38 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "0aeb79f2-d18d-4a88-b103-a875a544959c",
  "status": "queued",
  "created": "2022-06-01T21:47:38.434+00:00",
  "pin": {
    "cid": "baeaaadjsgy2syobzgu3dcojuheya",
    "_id": "0aeb79f2-d18d-4a88-b103-a875a544959c",
    "sourceCid": "baeaaadjsgy2syobzgu3dcojuheya",
    "contentCid": "baeaaadjsgy2syobzgu3dcojuheya",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:38.434+00:00",
    "updated": "2022-06-01T21:47:38.434+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:38.434+00:00",
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




#### Joi validation failures

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
      requestid: '16e68b9b-1152-4273-a153-585868f4932d',
      status: 'queued',
      created: '2022-06-01T21:47:37.42+00:00',
      pin: {
        cid: 'baeaaadjsgy2cynrugu2temzug43q',
        _id: '16e68b9b-1152-4273-a153-585868f4932d',
        sourceCid: 'baeaaadjsgy2cynrugu2temzug43q',
        contentCid: 'baeaaadjsgy2cynrugu2temzug43q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:37.42+00:00',
        updated: '2022-06-01T21:47:37.42+00:00',
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
      requestid: '16e68b9b-1152-4273-a153-585868f4932d',
      status: 'queued',
      created: 2022-06-01T21:47:37.420Z,
      pin: {
        cid: 'baeaaadjsgy2cynrugu2temzug43q',
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
  "cf-ray": "714b2622ffa48021-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:39 GMT",
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
      "requestid": "16e68b9b-1152-4273-a153-585868f4932d",
      "status": "queued",
      "created": "2022-06-01T21:47:37.42+00:00",
      "pin": {
        "cid": "baeaaadjsgy2cynrugu2temzug43q",
        "_id": "16e68b9b-1152-4273-a153-585868f4932d",
        "sourceCid": "baeaaadjsgy2cynrugu2temzug43q",
        "contentCid": "baeaaadjsgy2cynrugu2temzug43q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:37.42+00:00",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
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

#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.web3.storage/pins/fef6fe63-5a53-4277-a89a-e3226113acd1

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/fef6fe63-5a53-4277-a89a-e3226113acd1
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
  "cf-ray": "714b26360adb059c-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:42 GMT",
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




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.web3.storage/pins/b9069a8d-aa1d-443a-82f8-8e119a61f949

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/b9069a8d-aa1d-443a-82f8-8e119a61f949
```
{
  requestid: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
  status: 'queued',
  created: '2022-06-01T21:47:42.169+00:00',
  pin: {
    cid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
    _id: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
    sourceCid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
    contentCid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:42.169+00:00',
    updated: '2022-06-01T21:47:42.169+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
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
  requestid: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
  status: 'queued',
  created: 2022-06-01T21:47:42.169Z,
  pin: {
    cid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
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
  "cf-ray": "714b263c298f81c1-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "b9069a8d-aa1d-443a-82f8-8e119a61f949",
  "status": "queued",
  "created": "2022-06-01T21:47:42.169+00:00",
  "pin": {
    "cid": "baeaaadjsgy4symzxgiztmnbzgiyq",
    "_id": "b9069a8d-aa1d-443a-82f8-8e119a61f949",
    "sourceCid": "baeaaadjsgy4symzxgiztmnbzgiyq",
    "contentCid": "baeaaadjsgy4symzxgiztmnbzgiyq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:42.169+00:00",
    "updated": "2022-06-01T21:47:42.169+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Pin's with requestid 'fef6fe63-5a53-4277-a89a-e3226113acd1' can have cid 'baeaaadjsgy4cymztgqzdkmzsgyzq' replaced with 'baeaaadjsgy4symzxgiztmnbzgiyq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response code is 404: Original Pin's requestid cannot be found (success)

  ✓ Response code is 200: New Pin's requestid can be found (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.web3.storage/pins/fef6fe63-5a53-4277-a89a-e3226113acd1

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgy4symzxgiztmnbzgiyq"}
```
#### Response data from https://api.web3.storage/pins/fef6fe63-5a53-4277-a89a-e3226113acd1
```
{
  requestid: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
  status: 'queued',
  created: '2022-06-01T21:47:42.169+00:00',
  pin: {
    cid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
    _id: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
    sourceCid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
    contentCid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:42.169+00:00',
    updated: '2022-06-01T21:47:42.169+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:42.169+00:00',
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
  requestid: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
  status: 'queued',
  created: 2022-06-01T21:47:42.169Z,
  pin: {
    cid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
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
  "cf-ray": "714b262f7c315d9d-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "b9069a8d-aa1d-443a-82f8-8e119a61f949",
  "status": "queued",
  "created": "2022-06-01T21:47:42.169+00:00",
  "pin": {
    "cid": "baeaaadjsgy4symzxgiztmnbzgiyq",
    "_id": "b9069a8d-aa1d-443a-82f8-8e119a61f949",
    "sourceCid": "baeaaadjsgy4symzxgiztmnbzgiyq",
    "contentCid": "baeaaadjsgy4symzxgiztmnbzgiyq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:42.169+00:00",
    "updated": "2022-06-01T21:47:42.169+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:42.169+00:00",
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

  ✓ Could obtain requestid from new pin (fef6fe63-5a53-4277-a89a-e3226113acd1) (success)

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

#### Joi validation failures
No failures

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
{"cid":"baeaaadjsgy4cymztgqzdkmzsgyzq"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'fef6fe63-5a53-4277-a89a-e3226113acd1',
  status: 'queued',
  created: '2022-06-01T21:47:40.908+00:00',
  pin: {
    cid: 'baeaaadjsgy4cymztgqzdkmzsgyzq',
    _id: 'fef6fe63-5a53-4277-a89a-e3226113acd1',
    sourceCid: 'baeaaadjsgy4cymztgqzdkmzsgyzq',
    contentCid: 'baeaaadjsgy4cymztgqzdkmzsgyzq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:40.908+00:00',
    updated: '2022-06-01T21:47:40.908+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:40.908+00:00',
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
  requestid: 'fef6fe63-5a53-4277-a89a-e3226113acd1',
  status: 'queued',
  created: 2022-06-01T21:47:40.908Z,
  pin: {
    cid: 'baeaaadjsgy4cymztgqzdkmzsgyzq',
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
  "cf-ray": "714b26293b369c48-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:40 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "fef6fe63-5a53-4277-a89a-e3226113acd1",
  "status": "queued",
  "created": "2022-06-01T21:47:40.908+00:00",
  "pin": {
    "cid": "baeaaadjsgy4cymztgqzdkmzsgyzq",
    "_id": "fef6fe63-5a53-4277-a89a-e3226113acd1",
    "sourceCid": "baeaaadjsgy4cymztgqzdkmzsgyzq",
    "contentCid": "baeaaadjsgy4cymztgqzdkmzsgyzq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:40.908+00:00",
    "updated": "2022-06-01T21:47:40.908+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:40.908+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can retrieve pin with name 'b39c1284-a5ec-499c-8f24-e1b9da72183e' via the 'exact' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.web3.storage/pins?name=b39c1284-a5ec-499c-8f24-e1b9da72183e&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=b39c1284-a5ec-499c-8f24-e1b9da72183e&match=exact
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
  "cf-ray": "714b2645ea6759c1-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:45 GMT",
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
## Can retrieve pin with name 'B39C1284-A5EC-499C-8F24-E1B9DA72183E' via the 'iexact' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.web3.storage/pins?name=B39C1284-A5EC-499C-8F24-E1B9DA72183E&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=B39C1284-A5EC-499C-8F24-E1B9DA72183E&match=iexact
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
  "cf-ray": "714b264b19ea82ce-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:46 GMT",
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
## Can retrieve pin with name 'a5ec-499c-8f24-e1b' via the 'partial' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.web3.storage/pins?name=a5ec-499c-8f24-e1b&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=a5ec-499c-8f24-e1b&match=partial
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
  "cf-ray": "714b2651583a59df-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:47 GMT",
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
## Can retrieve pin with name 'A5EC-499C-8F24-E1B' via the 'ipartial' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.web3.storage/pins?name=A5EC-499C-8F24-E1B&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=A5EC-499C-8F24-E1B&match=ipartial
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
  "cf-ray": "714b26579ed66fbb-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:48 GMT",
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
## Can create a pin with name='b39c1284-a5ec-499c-8f24-e1b9da72183e' - ✘ FAILED

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

#### Joi validation failures
No failures

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
{"cid":"baeaaadjsg4zcymjugmydinjxg4za","name":"b39c1284-a5ec-499c-8f24-e1b9da72183e"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'b0d0bc39-04d9-4d2f-b688-b950eeab297e',
  status: 'queued',
  created: '2022-06-01T21:47:44.829+00:00',
  pin: {
    cid: 'baeaaadjsg4zcymjugmydinjxg4za',
    _id: 'b0d0bc39-04d9-4d2f-b688-b950eeab297e',
    sourceCid: 'baeaaadjsg4zcymjugmydinjxg4za',
    contentCid: 'baeaaadjsg4zcymjugmydinjxg4za',
    authKey: '315318824629964106',
    name: 'b39c1284-a5ec-499c-8f24-e1b9da72183e',
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:44.829+00:00',
    updated: '2022-06-01T21:47:44.829+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:44.829+00:00',
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
  requestid: 'b0d0bc39-04d9-4d2f-b688-b950eeab297e',
  status: 'queued',
  created: 2022-06-01T21:47:44.829Z,
  pin: {
    cid: 'baeaaadjsg4zcymjugmydinjxg4za',
    name: 'b39c1284-a5ec-499c-8f24-e1b9da72183e',
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
  "cf-ray": "714b263e9e087fb2-IAD",
  "connection": "close",
  "content-length": "3831",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:44 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "b0d0bc39-04d9-4d2f-b688-b950eeab297e",
  "status": "queued",
  "created": "2022-06-01T21:47:44.829+00:00",
  "pin": {
    "cid": "baeaaadjsg4zcymjugmydinjxg4za",
    "_id": "b0d0bc39-04d9-4d2f-b688-b950eeab297e",
    "sourceCid": "baeaaadjsg4zcymjugmydinjxg4za",
    "contentCid": "baeaaadjsg4zcymjugmydinjxg4za",
    "authKey": "315318824629964106",
    "name": "b39c1284-a5ec-499c-8f24-e1b9da72183e",
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:44.829+00:00",
    "updated": "2022-06-01T21:47:44.829+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsg43symrxgaztimrygy4a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjsg43symrxgaztimrygy4a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '60615032-f7fc-4f69-9ecf-404ea779baac',
  status: 'queued',
  created: '2022-06-01T21:47:49.978+00:00',
  pin: {
    cid: 'baeaaadjsg43symrxgaztimrygy4a',
    _id: '60615032-f7fc-4f69-9ecf-404ea779baac',
    sourceCid: 'baeaaadjsg43symrxgaztimrygy4a',
    contentCid: 'baeaaadjsg43symrxgaztimrygy4a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:49.978+00:00',
    updated: '2022-06-01T21:47:49.978+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:49.978+00:00',
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
  requestid: '60615032-f7fc-4f69-9ecf-404ea779baac',
  status: 'queued',
  created: 2022-06-01T21:47:49.978Z,
  pin: {
    cid: 'baeaaadjsg43symrxgaztimrygy4a',
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
  "cf-ray": "714b2661bbaf6fc8-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:50 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "60615032-f7fc-4f69-9ecf-404ea779baac",
  "status": "queued",
  "created": "2022-06-01T21:47:49.978+00:00",
  "pin": {
    "cid": "baeaaadjsg43symrxgaztimrygy4a",
    "_id": "60615032-f7fc-4f69-9ecf-404ea779baac",
    "sourceCid": "baeaaadjsg43symrxgaztimrygy4a",
    "contentCid": "baeaaadjsg43symrxgaztimrygy4a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:49.978+00:00",
    "updated": "2022-06-01T21:47:49.978+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsg43symrxgeydmobxgm4a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjsg43symrxgeydmobxgm4a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'c0441311-193a-4988-9738-ebf92c116aa5',
  status: 'queued',
  created: '2022-06-01T21:47:50.981+00:00',
  pin: {
    cid: 'baeaaadjsg43symrxgeydmobxgm4a',
    _id: 'c0441311-193a-4988-9738-ebf92c116aa5',
    sourceCid: 'baeaaadjsg43symrxgeydmobxgm4a',
    contentCid: 'baeaaadjsg43symrxgeydmobxgm4a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:50.981+00:00',
    updated: '2022-06-01T21:47:50.981+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:50.981+00:00',
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
  requestid: 'c0441311-193a-4988-9738-ebf92c116aa5',
  status: 'queued',
  created: 2022-06-01T21:47:50.981Z,
  pin: {
    cid: 'baeaaadjsg43symrxgeydmobxgm4a',
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
  "cf-ray": "714b2667f84c7fd9-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:51 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "c0441311-193a-4988-9738-ebf92c116aa5",
  "status": "queued",
  "created": "2022-06-01T21:47:50.981+00:00",
  "pin": {
    "cid": "baeaaadjsg43symrxgeydmobxgm4a",
    "_id": "c0441311-193a-4988-9738-ebf92c116aa5",
    "sourceCid": "baeaaadjsg43symrxgeydmobxgm4a",
    "contentCid": "baeaaadjsg43symrxgeydmobxgm4a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:50.981+00:00",
    "updated": "2022-06-01T21:47:50.981+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsg43symrxge3denruheza' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjsg43symrxge3denruheza"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '9000b195-505a-4268-872c-728f255ea533',
  status: 'queued',
  created: '2022-06-01T21:47:52.131+00:00',
  pin: {
    cid: 'baeaaadjsg43symrxge3denruheza',
    _id: '9000b195-505a-4268-872c-728f255ea533',
    sourceCid: 'baeaaadjsg43symrxge3denruheza',
    contentCid: 'baeaaadjsg43symrxge3denruheza',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:52.131+00:00',
    updated: '2022-06-01T21:47:52.131+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.131+00:00',
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
  requestid: '9000b195-505a-4268-872c-728f255ea533',
  status: 'queued',
  created: 2022-06-01T21:47:52.131Z,
  pin: {
    cid: 'baeaaadjsg43symrxge3denruheza',
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
  "cf-ray": "714b266e3f6559c1-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:52 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "9000b195-505a-4268-872c-728f255ea533",
  "status": "queued",
  "created": "2022-06-01T21:47:52.131+00:00",
  "pin": {
    "cid": "baeaaadjsg43symrxge3denruheza",
    "_id": "9000b195-505a-4268-872c-728f255ea533",
    "sourceCid": "baeaaadjsg43symrxge3denruheza",
    "contentCid": "baeaaadjsg43symrxge3denruheza",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:52.131+00:00",
    "updated": "2022-06-01T21:47:52.131+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsg43symrxgiytembwgqya' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjsg43symrxgiytembwgqya"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'a0af32ef-c45b-49f1-850e-885c77d1ebd0',
  status: 'queued',
  created: '2022-06-01T21:47:52.636+00:00',
  pin: {
    cid: 'baeaaadjsg43symrxgiytembwgqya',
    _id: 'a0af32ef-c45b-49f1-850e-885c77d1ebd0',
    sourceCid: 'baeaaadjsg43symrxgiytembwgqya',
    contentCid: 'baeaaadjsg43symrxgiytembwgqya',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:52.636+00:00',
    updated: '2022-06-01T21:47:52.636+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:52.636+00:00',
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
  requestid: 'a0af32ef-c45b-49f1-850e-885c77d1ebd0',
  status: 'queued',
  created: 2022-06-01T21:47:52.636Z,
  pin: {
    cid: 'baeaaadjsg43symrxgiytembwgqya',
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
  "cf-ray": "714b26747fe37fb2-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:52 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "a0af32ef-c45b-49f1-850e-885c77d1ebd0",
  "status": "queued",
  "created": "2022-06-01T21:47:52.636+00:00",
  "pin": {
    "cid": "baeaaadjsg43symrxgiytembwgqya",
    "_id": "a0af32ef-c45b-49f1-850e-885c77d1ebd0",
    "sourceCid": "baeaaadjsg43symrxgiytembwgqya",
    "contentCid": "baeaaadjsg43symrxgiytembwgqya",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:52.636+00:00",
    "updated": "2022-06-01T21:47:52.636+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsg43symrxgi4dgmjqga4a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjsg43symrxgi4dgmjqga4a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'afc40f33-741e-4cc3-b99b-dd3f60cfc74c',
  status: 'queued',
  created: '2022-06-01T21:47:53.932+00:00',
  pin: {
    cid: 'baeaaadjsg43symrxgi4dgmjqga4a',
    _id: 'afc40f33-741e-4cc3-b99b-dd3f60cfc74c',
    sourceCid: 'baeaaadjsg43symrxgi4dgmjqga4a',
    contentCid: 'baeaaadjsg43symrxgi4dgmjqga4a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:53.932+00:00',
    updated: '2022-06-01T21:47:53.932+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:53.932+00:00',
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
  requestid: 'afc40f33-741e-4cc3-b99b-dd3f60cfc74c',
  status: 'queued',
  created: 2022-06-01T21:47:53.932Z,
  pin: {
    cid: 'baeaaadjsg43symrxgi4dgmjqga4a',
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
  "cf-ray": "714b267accbf59df-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:53 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "afc40f33-741e-4cc3-b99b-dd3f60cfc74c",
  "status": "queued",
  "created": "2022-06-01T21:47:53.932+00:00",
  "pin": {
    "cid": "baeaaadjsg43symrxgi4dgmjqga4a",
    "_id": "afc40f33-741e-4cc3-b99b-dd3f60cfc74c",
    "sourceCid": "baeaaadjsg43symrxgi4dgmjqga4a",
    "contentCid": "baeaaadjsg43symrxgi4dgmjqga4a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:53.932+00:00",
    "updated": "2022-06-01T21:47:53.932+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsg43symrxgmztimzzgu4a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjsg43symrxgmztimzzgu4a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'a89cc0fc-8a6d-4963-bc67-f8b67f6eede9',
  status: 'queued',
  created: '2022-06-01T21:47:55.216+00:00',
  pin: {
    cid: 'baeaaadjsg43symrxgmztimzzgu4a',
    _id: 'a89cc0fc-8a6d-4963-bc67-f8b67f6eede9',
    sourceCid: 'baeaaadjsg43symrxgmztimzzgu4a',
    contentCid: 'baeaaadjsg43symrxgmztimzzgu4a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:55.216+00:00',
    updated: '2022-06-01T21:47:55.216+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.216+00:00',
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
  requestid: 'a89cc0fc-8a6d-4963-bc67-f8b67f6eede9',
  status: 'queued',
  created: 2022-06-01T21:47:55.216Z,
  pin: {
    cid: 'baeaaadjsg43symrxgmztimzzgu4a',
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
  "cf-ray": "714b2680fc5d5758-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:55 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "a89cc0fc-8a6d-4963-bc67-f8b67f6eede9",
  "status": "queued",
  "created": "2022-06-01T21:47:55.216+00:00",
  "pin": {
    "cid": "baeaaadjsg43symrxgmztimzzgu4a",
    "_id": "a89cc0fc-8a6d-4963-bc67-f8b67f6eede9",
    "sourceCid": "baeaaadjsg43symrxgmztimzzgu4a",
    "contentCid": "baeaaadjsg43symrxgmztimzzgu4a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:55.216+00:00",
    "updated": "2022-06-01T21:47:55.216+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsg43symrxgm4dcmjwgazq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjsg43symrxgm4dcmjwgazq"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '91a5895b-bd81-4931-bf25-72f9f8d06b12',
  status: 'queued',
  created: '2022-06-01T21:47:55.824+00:00',
  pin: {
    cid: 'baeaaadjsg43symrxgm4dcmjwgazq',
    _id: '91a5895b-bd81-4931-bf25-72f9f8d06b12',
    sourceCid: 'baeaaadjsg43symrxgm4dcmjwgazq',
    contentCid: 'baeaaadjsg43symrxgm4dcmjwgazq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:55.824+00:00',
    updated: '2022-06-01T21:47:55.824+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:55.824+00:00',
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
  requestid: '91a5895b-bd81-4931-bf25-72f9f8d06b12',
  status: 'queued',
  created: 2022-06-01T21:47:55.824Z,
  pin: {
    cid: 'baeaaadjsg43symrxgm4dcmjwgazq',
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
  "cf-ray": "714b26873d7e0641-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:55 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "91a5895b-bd81-4931-bf25-72f9f8d06b12",
  "status": "queued",
  "created": "2022-06-01T21:47:55.824+00:00",
  "pin": {
    "cid": "baeaaadjsg43symrxgm4dcmjwgazq",
    "_id": "91a5895b-bd81-4931-bf25-72f9f8d06b12",
    "sourceCid": "baeaaadjsg43symrxgm4dcmjwgazq",
    "contentCid": "baeaaadjsg43symrxgm4dcmjwgazq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:55.824+00:00",
    "updated": "2022-06-01T21:47:55.824+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsg43symrxgqzdqnzwgq4q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjsg43symrxgqzdqnzwgq4q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '474353e1-8bab-4937-8e04-789c53f3e105',
  status: 'queued',
  created: '2022-06-01T21:47:56.873+00:00',
  pin: {
    cid: 'baeaaadjsg43symrxgqzdqnzwgq4q',
    _id: '474353e1-8bab-4937-8e04-789c53f3e105',
    sourceCid: 'baeaaadjsg43symrxgqzdqnzwgq4q',
    contentCid: 'baeaaadjsg43symrxgqzdqnzwgq4q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:56.873+00:00',
    updated: '2022-06-01T21:47:56.873+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:56.873+00:00',
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
  requestid: '474353e1-8bab-4937-8e04-789c53f3e105',
  status: 'queued',
  created: 2022-06-01T21:47:56.873Z,
  pin: {
    cid: 'baeaaadjsg43symrxgqzdqnzwgq4q',
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
  "cf-ray": "714b268d8f826fc8-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:56 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "474353e1-8bab-4937-8e04-789c53f3e105",
  "status": "queued",
  "created": "2022-06-01T21:47:56.873+00:00",
  "pin": {
    "cid": "baeaaadjsg43symrxgqzdqnzwgq4q",
    "_id": "474353e1-8bab-4937-8e04-789c53f3e105",
    "sourceCid": "baeaaadjsg43symrxgqzdqnzwgq4q",
    "contentCid": "baeaaadjsg43symrxgqzdqnzwgq4q",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:56.873+00:00",
    "updated": "2022-06-01T21:47:56.873+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsg43symrxgq4dqmrsga3a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjsg43symrxgq4dqmrsga3a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95',
  status: 'queued',
  created: '2022-06-01T21:47:58.417+00:00',
  pin: {
    cid: 'baeaaadjsg43symrxgq4dqmrsga3a',
    _id: 'b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95',
    sourceCid: 'baeaaadjsg43symrxgq4dqmrsga3a',
    contentCid: 'baeaaadjsg43symrxgq4dqmrsga3a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:58.417+00:00',
    updated: '2022-06-01T21:47:58.417+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:58.417+00:00',
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
  requestid: 'b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95',
  status: 'queued',
  created: 2022-06-01T21:47:58.417Z,
  pin: {
    cid: 'baeaaadjsg43symrxgq4dqmrsga3a',
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
  "cf-ray": "714b2693bb545b1d-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:58 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95",
  "status": "queued",
  "created": "2022-06-01T21:47:58.417+00:00",
  "pin": {
    "cid": "baeaaadjsg43symrxgq4dqmrsga3a",
    "_id": "b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95",
    "sourceCid": "baeaaadjsg43symrxgq4dqmrsga3a",
    "contentCid": "baeaaadjsg43symrxgq4dqmrsga3a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:58.417+00:00",
    "updated": "2022-06-01T21:47:58.417+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsg43symrxguztcmzvgq4a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjsg43symrxguztcmzvgq4a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '6bd5b792-8c4d-439e-9442-c4bef8defc67',
  status: 'queued',
  created: '2022-06-01T21:47:59.629+00:00',
  pin: {
    cid: 'baeaaadjsg43symrxguztcmzvgq4a',
    _id: '6bd5b792-8c4d-439e-9442-c4bef8defc67',
    sourceCid: 'baeaaadjsg43symrxguztcmzvgq4a',
    contentCid: 'baeaaadjsg43symrxguztcmzvgq4a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:47:59.629+00:00',
    updated: '2022-06-01T21:47:59.629+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:47:59.629+00:00',
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
  requestid: '6bd5b792-8c4d-439e-9442-c4bef8defc67',
  status: 'queued',
  created: 2022-06-01T21:47:59.629Z,
  pin: {
    cid: 'baeaaadjsg43symrxguztcmzvgq4a',
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
  "cf-ray": "714b269afb085dc7-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:59 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "6bd5b792-8c4d-439e-9442-c4bef8defc67",
  "status": "queued",
  "created": "2022-06-01T21:47:59.629+00:00",
  "pin": {
    "cid": "baeaaadjsg43symrxguztcmzvgq4a",
    "_id": "6bd5b792-8c4d-439e-9442-c4bef8defc67",
    "sourceCid": "baeaaadjsg43symrxguztcmzvgq4a",
    "contentCid": "baeaaadjsg43symrxguztcmzvgq4a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:47:59.629+00:00",
    "updated": "2022-06-01T21:47:59.629+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsg43symrxgu3timrrha4q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjsg43symrxgu3timrrha4q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '25733117-a860-48ef-89d3-fcf2ce60ce97',
  status: 'queued',
  created: '2022-06-01T21:48:00.809+00:00',
  pin: {
    cid: 'baeaaadjsg43symrxgu3timrrha4q',
    _id: '25733117-a860-48ef-89d3-fcf2ce60ce97',
    sourceCid: 'baeaaadjsg43symrxgu3timrrha4q',
    contentCid: 'baeaaadjsg43symrxgu3timrrha4q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:48:00.809+00:00',
    updated: '2022-06-01T21:48:00.809+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:00.809+00:00',
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
  requestid: '25733117-a860-48ef-89d3-fcf2ce60ce97',
  status: 'queued',
  created: 2022-06-01T21:48:00.809Z,
  pin: {
    cid: 'baeaaadjsg43symrxgu3timrrha4q',
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
  "cf-ray": "714b26a289e357af-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:00 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "25733117-a860-48ef-89d3-fcf2ce60ce97",
  "status": "queued",
  "created": "2022-06-01T21:48:00.809+00:00",
  "pin": {
    "cid": "baeaaadjsg43symrxgu3timrrha4q",
    "_id": "25733117-a860-48ef-89d3-fcf2ce60ce97",
    "sourceCid": "baeaaadjsg43symrxgu3timrrha4q",
    "contentCid": "baeaaadjsg43symrxgu3timrrha4q",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:48:00.809+00:00",
    "updated": "2022-06-01T21:48:00.809+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsg43symrxgyytknbzgi4q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjsg43symrxgyytknbzgi4q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '1f9bb40b-1db0-41c1-813f-8df9876090c0',
  status: 'queued',
  created: '2022-06-01T21:48:01.566+00:00',
  pin: {
    cid: 'baeaaadjsg43symrxgyytknbzgi4q',
    _id: '1f9bb40b-1db0-41c1-813f-8df9876090c0',
    sourceCid: 'baeaaadjsg43symrxgyytknbzgi4q',
    contentCid: 'baeaaadjsg43symrxgyytknbzgi4q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:48:01.566+00:00',
    updated: '2022-06-01T21:48:01.566+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:48:01.566+00:00',
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
  requestid: '1f9bb40b-1db0-41c1-813f-8df9876090c0',
  status: 'queued',
  created: 2022-06-01T21:48:01.566Z,
  pin: {
    cid: 'baeaaadjsg43symrxgyytknbzgi4q',
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
  "cf-ray": "714b26a9cb5a82a8-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:01 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "1f9bb40b-1db0-41c1-813f-8df9876090c0",
  "status": "queued",
  "created": "2022-06-01T21:48:01.566+00:00",
  "pin": {
    "cid": "baeaaadjsg43symrxgyytknbzgi4q",
    "_id": "1f9bb40b-1db0-41c1-813f-8df9876090c0",
    "sourceCid": "baeaaadjsg43symrxgyytknbzgi4q",
    "contentCid": "baeaaadjsg43symrxgyytknbzgi4q",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-01T21:48:01.566+00:00",
    "updated": "2022-06-01T21:48:01.566+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-01T21:48:01.566+00:00",
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




#### Joi validation failures
No failures

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
      requestid: '1f9bb40b-1db0-41c1-813f-8df9876090c0',
      status: 'queued',
      created: '2022-06-01T21:48:01.566+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgyytknbzgi4q',
        _id: '1f9bb40b-1db0-41c1-813f-8df9876090c0',
        sourceCid: 'baeaaadjsg43symrxgyytknbzgi4q',
        contentCid: 'baeaaadjsg43symrxgyytknbzgi4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:48:01.566+00:00',
        updated: '2022-06-01T21:48:01.566+00:00',
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
      requestid: '25733117-a860-48ef-89d3-fcf2ce60ce97',
      status: 'queued',
      created: '2022-06-01T21:48:00.809+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgu3timrrha4q',
        _id: '25733117-a860-48ef-89d3-fcf2ce60ce97',
        sourceCid: 'baeaaadjsg43symrxgu3timrrha4q',
        contentCid: 'baeaaadjsg43symrxgu3timrrha4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:48:00.809+00:00',
        updated: '2022-06-01T21:48:00.809+00:00',
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
      requestid: '6bd5b792-8c4d-439e-9442-c4bef8defc67',
      status: 'queued',
      created: '2022-06-01T21:47:59.629+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxguztcmzvgq4a',
        _id: '6bd5b792-8c4d-439e-9442-c4bef8defc67',
        sourceCid: 'baeaaadjsg43symrxguztcmzvgq4a',
        contentCid: 'baeaaadjsg43symrxguztcmzvgq4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:59.629+00:00',
        updated: '2022-06-01T21:47:59.629+00:00',
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
      requestid: 'b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95',
      status: 'queued',
      created: '2022-06-01T21:47:58.417+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgq4dqmrsga3a',
        _id: 'b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95',
        sourceCid: 'baeaaadjsg43symrxgq4dqmrsga3a',
        contentCid: 'baeaaadjsg43symrxgq4dqmrsga3a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:58.417+00:00',
        updated: '2022-06-01T21:47:58.417+00:00',
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
      requestid: '474353e1-8bab-4937-8e04-789c53f3e105',
      status: 'queued',
      created: '2022-06-01T21:47:56.873+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgqzdqnzwgq4q',
        _id: '474353e1-8bab-4937-8e04-789c53f3e105',
        sourceCid: 'baeaaadjsg43symrxgqzdqnzwgq4q',
        contentCid: 'baeaaadjsg43symrxgqzdqnzwgq4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:56.873+00:00',
        updated: '2022-06-01T21:47:56.873+00:00',
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
      requestid: '91a5895b-bd81-4931-bf25-72f9f8d06b12',
      status: 'queued',
      created: '2022-06-01T21:47:55.824+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgm4dcmjwgazq',
        _id: '91a5895b-bd81-4931-bf25-72f9f8d06b12',
        sourceCid: 'baeaaadjsg43symrxgm4dcmjwgazq',
        contentCid: 'baeaaadjsg43symrxgm4dcmjwgazq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:55.824+00:00',
        updated: '2022-06-01T21:47:55.824+00:00',
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
      requestid: 'a89cc0fc-8a6d-4963-bc67-f8b67f6eede9',
      status: 'queued',
      created: '2022-06-01T21:47:55.216+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgmztimzzgu4a',
        _id: 'a89cc0fc-8a6d-4963-bc67-f8b67f6eede9',
        sourceCid: 'baeaaadjsg43symrxgmztimzzgu4a',
        contentCid: 'baeaaadjsg43symrxgmztimzzgu4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:55.216+00:00',
        updated: '2022-06-01T21:47:55.216+00:00',
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
      requestid: 'afc40f33-741e-4cc3-b99b-dd3f60cfc74c',
      status: 'queued',
      created: '2022-06-01T21:47:53.932+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgi4dgmjqga4a',
        _id: 'afc40f33-741e-4cc3-b99b-dd3f60cfc74c',
        sourceCid: 'baeaaadjsg43symrxgi4dgmjqga4a',
        contentCid: 'baeaaadjsg43symrxgi4dgmjqga4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:53.932+00:00',
        updated: '2022-06-01T21:47:53.932+00:00',
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
      requestid: 'a0af32ef-c45b-49f1-850e-885c77d1ebd0',
      status: 'queued',
      created: '2022-06-01T21:47:52.636+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgiytembwgqya',
        _id: 'a0af32ef-c45b-49f1-850e-885c77d1ebd0',
        sourceCid: 'baeaaadjsg43symrxgiytembwgqya',
        contentCid: 'baeaaadjsg43symrxgiytembwgqya',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:52.636+00:00',
        updated: '2022-06-01T21:47:52.636+00:00',
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
      requestid: '9000b195-505a-4268-872c-728f255ea533',
      status: 'queued',
      created: '2022-06-01T21:47:52.131+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxge3denruheza',
        _id: '9000b195-505a-4268-872c-728f255ea533',
        sourceCid: 'baeaaadjsg43symrxge3denruheza',
        contentCid: 'baeaaadjsg43symrxge3denruheza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:52.131+00:00',
        updated: '2022-06-01T21:47:52.131+00:00',
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
      requestid: '1f9bb40b-1db0-41c1-813f-8df9876090c0',
      status: 'queued',
      created: 2022-06-01T21:48:01.566Z,
      pin: {
        cid: 'baeaaadjsg43symrxgyytknbzgi4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '25733117-a860-48ef-89d3-fcf2ce60ce97',
      status: 'queued',
      created: 2022-06-01T21:48:00.809Z,
      pin: {
        cid: 'baeaaadjsg43symrxgu3timrrha4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '6bd5b792-8c4d-439e-9442-c4bef8defc67',
      status: 'queued',
      created: 2022-06-01T21:47:59.629Z,
      pin: {
        cid: 'baeaaadjsg43symrxguztcmzvgq4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95',
      status: 'queued',
      created: 2022-06-01T21:47:58.417Z,
      pin: {
        cid: 'baeaaadjsg43symrxgq4dqmrsga3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '474353e1-8bab-4937-8e04-789c53f3e105',
      status: 'queued',
      created: 2022-06-01T21:47:56.873Z,
      pin: {
        cid: 'baeaaadjsg43symrxgqzdqnzwgq4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '91a5895b-bd81-4931-bf25-72f9f8d06b12',
      status: 'queued',
      created: 2022-06-01T21:47:55.824Z,
      pin: {
        cid: 'baeaaadjsg43symrxgm4dcmjwgazq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'a89cc0fc-8a6d-4963-bc67-f8b67f6eede9',
      status: 'queued',
      created: 2022-06-01T21:47:55.216Z,
      pin: {
        cid: 'baeaaadjsg43symrxgmztimzzgu4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'afc40f33-741e-4cc3-b99b-dd3f60cfc74c',
      status: 'queued',
      created: 2022-06-01T21:47:53.932Z,
      pin: {
        cid: 'baeaaadjsg43symrxgi4dgmjqga4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'a0af32ef-c45b-49f1-850e-885c77d1ebd0',
      status: 'queued',
      created: 2022-06-01T21:47:52.636Z,
      pin: {
        cid: 'baeaaadjsg43symrxgiytembwgqya',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '9000b195-505a-4268-872c-728f255ea533',
      status: 'queued',
      created: 2022-06-01T21:47:52.131Z,
      pin: {
        cid: 'baeaaadjsg43symrxge3denruheza',
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
  "cf-ray": "714b26ae786b5a52-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:02 GMT",
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
      "requestid": "1f9bb40b-1db0-41c1-813f-8df9876090c0",
      "status": "queued",
      "created": "2022-06-01T21:48:01.566+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgyytknbzgi4q",
        "_id": "1f9bb40b-1db0-41c1-813f-8df9876090c0",
        "sourceCid": "baeaaadjsg43symrxgyytknbzgi4q",
        "contentCid": "baeaaadjsg43symrxgyytknbzgi4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:48:01.566+00:00",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "25733117-a860-48ef-89d3-fcf2ce60ce97",
      "status": "queued",
      "created": "2022-06-01T21:48:00.809+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgu3timrrha4q",
        "_id": "25733117-a860-48ef-89d3-fcf2ce60ce97",
        "sourceCid": "baeaaadjsg43symrxgu3timrrha4q",
        "contentCid": "baeaaadjsg43symrxgu3timrrha4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:48:00.809+00:00",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "6bd5b792-8c4d-439e-9442-c4bef8defc67",
      "status": "queued",
      "created": "2022-06-01T21:47:59.629+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxguztcmzvgq4a",
        "_id": "6bd5b792-8c4d-439e-9442-c4bef8defc67",
        "sourceCid": "baeaaadjsg43symrxguztcmzvgq4a",
        "contentCid": "baeaaadjsg43symrxguztcmzvgq4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:59.629+00:00",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95",
      "status": "queued",
      "created": "2022-06-01T21:47:58.417+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgq4dqmrsga3a",
        "_id": "b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95",
        "sourceCid": "baeaaadjsg43symrxgq4dqmrsga3a",
        "contentCid": "baeaaadjsg43symrxgq4dqmrsga3a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:58.417+00:00",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "474353e1-8bab-4937-8e04-789c53f3e105",
      "status": "queued",
      "created": "2022-06-01T21:47:56.873+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgqzdqnzwgq4q",
        "_id": "474353e1-8bab-4937-8e04-789c53f3e105",
        "sourceCid": "baeaaadjsg43symrxgqzdqnzwgq4q",
        "contentCid": "baeaaadjsg43symrxgqzdqnzwgq4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:56.873+00:00",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "91a5895b-bd81-4931-bf25-72f9f8d06b12",
      "status": "queued",
      "created": "2022-06-01T21:47:55.824+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgm4dcmjwgazq",
        "_id": "91a5895b-bd81-4931-bf25-72f9f8d06b12",
        "sourceCid": "baeaaadjsg43symrxgm4dcmjwgazq",
        "contentCid": "baeaaadjsg43symrxgm4dcmjwgazq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:55.824+00:00",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a89cc0fc-8a6d-4963-bc67-f8b67f6eede9",
      "status": "queued",
      "created": "2022-06-01T21:47:55.216+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgmztimzzgu4a",
        "_id": "a89cc0fc-8a6d-4963-bc67-f8b67f6eede9",
        "sourceCid": "baeaaadjsg43symrxgmztimzzgu4a",
        "contentCid": "baeaaadjsg43symrxgmztimzzgu4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:55.216+00:00",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "afc40f33-741e-4cc3-b99b-dd3f60cfc74c",
      "status": "queued",
      "created": "2022-06-01T21:47:53.932+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgi4dgmjqga4a",
        "_id": "afc40f33-741e-4cc3-b99b-dd3f60cfc74c",
        "sourceCid": "baeaaadjsg43symrxgi4dgmjqga4a",
        "contentCid": "baeaaadjsg43symrxgi4dgmjqga4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:53.932+00:00",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a0af32ef-c45b-49f1-850e-885c77d1ebd0",
      "status": "queued",
      "created": "2022-06-01T21:47:52.636+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgiytembwgqya",
        "_id": "a0af32ef-c45b-49f1-850e-885c77d1ebd0",
        "sourceCid": "baeaaadjsg43symrxgiytembwgqya",
        "contentCid": "baeaaadjsg43symrxgiytembwgqya",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:52.636+00:00",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "9000b195-505a-4268-872c-728f255ea533",
      "status": "queued",
      "created": "2022-06-01T21:47:52.131+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxge3denruheza",
        "_id": "9000b195-505a-4268-872c-728f255ea533",
        "sourceCid": "baeaaadjsg43symrxge3denruheza",
        "contentCid": "baeaaadjsg43symrxge3denruheza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:52.131+00:00",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
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




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T21%3A47%3A52.131Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T21%3A47%3A52.131Z
```
{
  count: 6,
  results: [
    {
      requestid: '9000b195-505a-4268-872c-728f255ea533',
      status: 'queued',
      created: '2022-06-01T21:47:52.131+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxge3denruheza',
        _id: '9000b195-505a-4268-872c-728f255ea533',
        sourceCid: 'baeaaadjsg43symrxge3denruheza',
        contentCid: 'baeaaadjsg43symrxge3denruheza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:52.131+00:00',
        updated: '2022-06-01T21:47:52.131+00:00',
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
      requestid: 'c0441311-193a-4988-9738-ebf92c116aa5',
      status: 'queued',
      created: '2022-06-01T21:47:50.981+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgeydmobxgm4a',
        _id: 'c0441311-193a-4988-9738-ebf92c116aa5',
        sourceCid: 'baeaaadjsg43symrxgeydmobxgm4a',
        contentCid: 'baeaaadjsg43symrxgeydmobxgm4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:50.981+00:00',
        updated: '2022-06-01T21:47:50.981+00:00',
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
      requestid: '60615032-f7fc-4f69-9ecf-404ea779baac',
      status: 'queued',
      created: '2022-06-01T21:47:49.978+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgaztimrygy4a',
        _id: '60615032-f7fc-4f69-9ecf-404ea779baac',
        sourceCid: 'baeaaadjsg43symrxgaztimrygy4a',
        contentCid: 'baeaaadjsg43symrxgaztimrygy4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:49.978+00:00',
        updated: '2022-06-01T21:47:49.978+00:00',
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
      requestid: 'b0d0bc39-04d9-4d2f-b688-b950eeab297e',
      status: 'queued',
      created: '2022-06-01T21:47:44.829+00:00',
      pin: {
        cid: 'baeaaadjsg4zcymjugmydinjxg4za',
        _id: 'b0d0bc39-04d9-4d2f-b688-b950eeab297e',
        sourceCid: 'baeaaadjsg4zcymjugmydinjxg4za',
        contentCid: 'baeaaadjsg4zcymjugmydinjxg4za',
        authKey: 315318824629964100,
        name: 'b39c1284-a5ec-499c-8f24-e1b9da72183e',
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:44.829+00:00',
        updated: '2022-06-01T21:47:44.829+00:00',
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
      requestid: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
      status: 'queued',
      created: '2022-06-01T21:47:42.169+00:00',
      pin: {
        cid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
        _id: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
        sourceCid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
        contentCid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:42.169+00:00',
        updated: '2022-06-01T21:47:42.169+00:00',
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
      requestid: '16e68b9b-1152-4273-a153-585868f4932d',
      status: 'queued',
      created: '2022-06-01T21:47:37.42+00:00',
      pin: {
        cid: 'baeaaadjsgy2cynrugu2temzug43q',
        _id: '16e68b9b-1152-4273-a153-585868f4932d',
        sourceCid: 'baeaaadjsgy2cynrugu2temzug43q',
        contentCid: 'baeaaadjsgy2cynrugu2temzug43q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:37.42+00:00',
        updated: '2022-06-01T21:47:37.42+00:00',
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
      requestid: '9000b195-505a-4268-872c-728f255ea533',
      status: 'queued',
      created: 2022-06-01T21:47:52.131Z,
      pin: {
        cid: 'baeaaadjsg43symrxge3denruheza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'c0441311-193a-4988-9738-ebf92c116aa5',
      status: 'queued',
      created: 2022-06-01T21:47:50.981Z,
      pin: {
        cid: 'baeaaadjsg43symrxgeydmobxgm4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '60615032-f7fc-4f69-9ecf-404ea779baac',
      status: 'queued',
      created: 2022-06-01T21:47:49.978Z,
      pin: {
        cid: 'baeaaadjsg43symrxgaztimrygy4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'b0d0bc39-04d9-4d2f-b688-b950eeab297e',
      status: 'queued',
      created: 2022-06-01T21:47:44.829Z,
      pin: {
        cid: 'baeaaadjsg4zcymjugmydinjxg4za',
        name: 'b39c1284-a5ec-499c-8f24-e1b9da72183e',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
      status: 'queued',
      created: 2022-06-01T21:47:42.169Z,
      pin: {
        cid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '16e68b9b-1152-4273-a153-585868f4932d',
      status: 'queued',
      created: 2022-06-01T21:47:37.420Z,
      pin: {
        cid: 'baeaaadjsgy2cynrugu2temzug43q',
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
  "cf-ray": "714b26b2ed6182a8-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:02 GMT",
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
      "requestid": "9000b195-505a-4268-872c-728f255ea533",
      "status": "queued",
      "created": "2022-06-01T21:47:52.131+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxge3denruheza",
        "_id": "9000b195-505a-4268-872c-728f255ea533",
        "sourceCid": "baeaaadjsg43symrxge3denruheza",
        "contentCid": "baeaaadjsg43symrxge3denruheza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:52.131+00:00",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "c0441311-193a-4988-9738-ebf92c116aa5",
      "status": "queued",
      "created": "2022-06-01T21:47:50.981+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgeydmobxgm4a",
        "_id": "c0441311-193a-4988-9738-ebf92c116aa5",
        "sourceCid": "baeaaadjsg43symrxgeydmobxgm4a",
        "contentCid": "baeaaadjsg43symrxgeydmobxgm4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:50.981+00:00",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "60615032-f7fc-4f69-9ecf-404ea779baac",
      "status": "queued",
      "created": "2022-06-01T21:47:49.978+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgaztimrygy4a",
        "_id": "60615032-f7fc-4f69-9ecf-404ea779baac",
        "sourceCid": "baeaaadjsg43symrxgaztimrygy4a",
        "contentCid": "baeaaadjsg43symrxgaztimrygy4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:49.978+00:00",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "b0d0bc39-04d9-4d2f-b688-b950eeab297e",
      "status": "queued",
      "created": "2022-06-01T21:47:44.829+00:00",
      "pin": {
        "cid": "baeaaadjsg4zcymjugmydinjxg4za",
        "_id": "b0d0bc39-04d9-4d2f-b688-b950eeab297e",
        "sourceCid": "baeaaadjsg4zcymjugmydinjxg4za",
        "contentCid": "baeaaadjsg4zcymjugmydinjxg4za",
        "authKey": 315318824629964100,
        "name": "b39c1284-a5ec-499c-8f24-e1b9da72183e",
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:44.829+00:00",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "b9069a8d-aa1d-443a-82f8-8e119a61f949",
      "status": "queued",
      "created": "2022-06-01T21:47:42.169+00:00",
      "pin": {
        "cid": "baeaaadjsgy4symzxgiztmnbzgiyq",
        "_id": "b9069a8d-aa1d-443a-82f8-8e119a61f949",
        "sourceCid": "baeaaadjsgy4symzxgiztmnbzgiyq",
        "contentCid": "baeaaadjsgy4symzxgiztmnbzgiyq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:42.169+00:00",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "16e68b9b-1152-4273-a153-585868f4932d",
      "status": "queued",
      "created": "2022-06-01T21:47:37.42+00:00",
      "pin": {
        "cid": "baeaaadjsgy2cynrugu2temzug43q",
        "_id": "16e68b9b-1152-4273-a153-585868f4932d",
        "sourceCid": "baeaaadjsgy2cynrugu2temzug43q",
        "contentCid": "baeaaadjsgy2cynrugu2temzug43q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:37.42+00:00",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
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




#### Joi validation failures
No failures

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
      requestid: 'b0d0bc39-04d9-4d2f-b688-b950eeab297e',
      status: 'queued',
      created: '2022-06-01T21:47:44.829+00:00',
      pin: {
        cid: 'baeaaadjsg4zcymjugmydinjxg4za',
        _id: 'b0d0bc39-04d9-4d2f-b688-b950eeab297e',
        sourceCid: 'baeaaadjsg4zcymjugmydinjxg4za',
        contentCid: 'baeaaadjsg4zcymjugmydinjxg4za',
        authKey: 315318824629964100,
        name: 'b39c1284-a5ec-499c-8f24-e1b9da72183e',
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:44.829+00:00',
        updated: '2022-06-01T21:47:44.829+00:00',
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
      requestid: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
      status: 'queued',
      created: '2022-06-01T21:47:42.169+00:00',
      pin: {
        cid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
        _id: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
        sourceCid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
        contentCid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:42.169+00:00',
        updated: '2022-06-01T21:47:42.169+00:00',
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
      requestid: '16e68b9b-1152-4273-a153-585868f4932d',
      status: 'queued',
      created: '2022-06-01T21:47:37.42+00:00',
      pin: {
        cid: 'baeaaadjsgy2cynrugu2temzug43q',
        _id: '16e68b9b-1152-4273-a153-585868f4932d',
        sourceCid: 'baeaaadjsgy2cynrugu2temzug43q',
        contentCid: 'baeaaadjsgy2cynrugu2temzug43q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:37.42+00:00',
        updated: '2022-06-01T21:47:37.42+00:00',
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
      requestid: 'b0d0bc39-04d9-4d2f-b688-b950eeab297e',
      status: 'queued',
      created: 2022-06-01T21:47:44.829Z,
      pin: {
        cid: 'baeaaadjsg4zcymjugmydinjxg4za',
        name: 'b39c1284-a5ec-499c-8f24-e1b9da72183e',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
      status: 'queued',
      created: 2022-06-01T21:47:42.169Z,
      pin: {
        cid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '16e68b9b-1152-4273-a153-585868f4932d',
      status: 'queued',
      created: 2022-06-01T21:47:37.420Z,
      pin: {
        cid: 'baeaaadjsgy2cynrugu2temzug43q',
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
  "cf-ray": "714b265b7cc90641-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:48 GMT",
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
      "requestid": "b0d0bc39-04d9-4d2f-b688-b950eeab297e",
      "status": "queued",
      "created": "2022-06-01T21:47:44.829+00:00",
      "pin": {
        "cid": "baeaaadjsg4zcymjugmydinjxg4za",
        "_id": "b0d0bc39-04d9-4d2f-b688-b950eeab297e",
        "sourceCid": "baeaaadjsg4zcymjugmydinjxg4za",
        "contentCid": "baeaaadjsg4zcymjugmydinjxg4za",
        "authKey": 315318824629964100,
        "name": "b39c1284-a5ec-499c-8f24-e1b9da72183e",
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:44.829+00:00",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "b9069a8d-aa1d-443a-82f8-8e119a61f949",
      "status": "queued",
      "created": "2022-06-01T21:47:42.169+00:00",
      "pin": {
        "cid": "baeaaadjsgy4symzxgiztmnbzgiyq",
        "_id": "b9069a8d-aa1d-443a-82f8-8e119a61f949",
        "sourceCid": "baeaaadjsgy4symzxgiztmnbzgiyq",
        "contentCid": "baeaaadjsgy4symzxgiztmnbzgiyq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:42.169+00:00",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "16e68b9b-1152-4273-a153-585868f4932d",
      "status": "queued",
      "created": "2022-06-01T21:47:37.42+00:00",
      "pin": {
        "cid": "baeaaadjsgy2cynrugu2temzug43q",
        "_id": "16e68b9b-1152-4273-a153-585868f4932d",
        "sourceCid": "baeaaadjsgy2cynrugu2temzug43q",
        "contentCid": "baeaaadjsgy2cynrugu2temzug43q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:37.42+00:00",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
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
## Can delete pin with requestid '1f9bb40b-1db0-41c1-813f-8df9876090c0' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/1f9bb40b-1db0-41c1-813f-8df9876090c0

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/1f9bb40b-1db0-41c1-813f-8df9876090c0
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
  "cf-ray": "714b26bf6f7a59df-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:04 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '25733117-a860-48ef-89d3-fcf2ce60ce97' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/25733117-a860-48ef-89d3-fcf2ce60ce97

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/25733117-a860-48ef-89d3-fcf2ce60ce97
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
  "cf-ray": "714b26c5cc3a5b1d-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:05 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '6bd5b792-8c4d-439e-9442-c4bef8defc67' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/6bd5b792-8c4d-439e-9442-c4bef8defc67

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/6bd5b792-8c4d-439e-9442-c4bef8defc67
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
  "cf-ray": "714b26cbef5882cf-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:06 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95
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
  "cf-ray": "714b26d22df45d97-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:07 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '474353e1-8bab-4937-8e04-789c53f3e105' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/474353e1-8bab-4937-8e04-789c53f3e105

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/474353e1-8bab-4937-8e04-789c53f3e105
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
  "cf-ray": "714b26d87c0c82f6-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:08 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '91a5895b-bd81-4931-bf25-72f9f8d06b12' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/91a5895b-bd81-4931-bf25-72f9f8d06b12

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/91a5895b-bd81-4931-bf25-72f9f8d06b12
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
  "cf-ray": "714b26deac719c1f-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:09 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'a89cc0fc-8a6d-4963-bc67-f8b67f6eede9' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/a89cc0fc-8a6d-4963-bc67-f8b67f6eede9

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/a89cc0fc-8a6d-4963-bc67-f8b67f6eede9
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
  "cf-ray": "714b26e4f8db82de-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:10 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'afc40f33-741e-4cc3-b99b-dd3f60cfc74c' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/afc40f33-741e-4cc3-b99b-dd3f60cfc74c

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/afc40f33-741e-4cc3-b99b-dd3f60cfc74c
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
  "cf-ray": "714b26eb38108f28-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:11 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'a0af32ef-c45b-49f1-850e-885c77d1ebd0' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/a0af32ef-c45b-49f1-850e-885c77d1ebd0

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/a0af32ef-c45b-49f1-850e-885c77d1ebd0
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
  "cf-ray": "714b26f17a705b28-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:12 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '9000b195-505a-4268-872c-728f255ea533' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/9000b195-505a-4268-872c-728f255ea533

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/9000b195-505a-4268-872c-728f255ea533
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
  "cf-ray": "714b26f7bfde81bd-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:13 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'c0441311-193a-4988-9738-ebf92c116aa5' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/c0441311-193a-4988-9738-ebf92c116aa5

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/c0441311-193a-4988-9738-ebf92c116aa5
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
  "cf-ray": "714b27018b84060e-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:15 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '60615032-f7fc-4f69-9ecf-404ea779baac' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/60615032-f7fc-4f69-9ecf-404ea779baac

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/60615032-f7fc-4f69-9ecf-404ea779baac
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
  "cf-ray": "714b2707bb9758c6-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:16 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'b0d0bc39-04d9-4d2f-b688-b950eeab297e' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/b0d0bc39-04d9-4d2f-b688-b950eeab297e

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/b0d0bc39-04d9-4d2f-b688-b950eeab297e
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
  "cf-ray": "714b270dfdb48260-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:17 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'b9069a8d-aa1d-443a-82f8-8e119a61f949' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/b9069a8d-aa1d-443a-82f8-8e119a61f949

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/b9069a8d-aa1d-443a-82f8-8e119a61f949
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
  "cf-ray": "714b27143ef481ca-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:18 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '16e68b9b-1152-4273-a153-585868f4932d' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/16e68b9b-1152-4273-a153-585868f4932d

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/16e68b9b-1152-4273-a153-585868f4932d
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
  "cf-ray": "714b271a7fc9581e-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:19 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Get all Pins created before 'Wed Jun 01 2022 21:47:52 GMT+0000 (Coordinated Universal Time)' - ✓ SUCCESS

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




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T21%3A47%3A52.131Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T21%3A47%3A52.131Z
```
{
  count: 5,
  results: [
    {
      requestid: 'c0441311-193a-4988-9738-ebf92c116aa5',
      status: 'queued',
      created: '2022-06-01T21:47:50.981+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgeydmobxgm4a',
        _id: 'c0441311-193a-4988-9738-ebf92c116aa5',
        sourceCid: 'baeaaadjsg43symrxgeydmobxgm4a',
        contentCid: 'baeaaadjsg43symrxgeydmobxgm4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:50.981+00:00',
        updated: '2022-06-01T21:47:50.981+00:00',
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
      requestid: '60615032-f7fc-4f69-9ecf-404ea779baac',
      status: 'queued',
      created: '2022-06-01T21:47:49.978+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgaztimrygy4a',
        _id: '60615032-f7fc-4f69-9ecf-404ea779baac',
        sourceCid: 'baeaaadjsg43symrxgaztimrygy4a',
        contentCid: 'baeaaadjsg43symrxgaztimrygy4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:49.978+00:00',
        updated: '2022-06-01T21:47:49.978+00:00',
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
      requestid: 'b0d0bc39-04d9-4d2f-b688-b950eeab297e',
      status: 'queued',
      created: '2022-06-01T21:47:44.829+00:00',
      pin: {
        cid: 'baeaaadjsg4zcymjugmydinjxg4za',
        _id: 'b0d0bc39-04d9-4d2f-b688-b950eeab297e',
        sourceCid: 'baeaaadjsg4zcymjugmydinjxg4za',
        contentCid: 'baeaaadjsg4zcymjugmydinjxg4za',
        authKey: 315318824629964100,
        name: 'b39c1284-a5ec-499c-8f24-e1b9da72183e',
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:44.829+00:00',
        updated: '2022-06-01T21:47:44.829+00:00',
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
      requestid: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
      status: 'queued',
      created: '2022-06-01T21:47:42.169+00:00',
      pin: {
        cid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
        _id: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
        sourceCid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
        contentCid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:42.169+00:00',
        updated: '2022-06-01T21:47:42.169+00:00',
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
      requestid: '16e68b9b-1152-4273-a153-585868f4932d',
      status: 'queued',
      created: '2022-06-01T21:47:37.42+00:00',
      pin: {
        cid: 'baeaaadjsgy2cynrugu2temzug43q',
        _id: '16e68b9b-1152-4273-a153-585868f4932d',
        sourceCid: 'baeaaadjsgy2cynrugu2temzug43q',
        contentCid: 'baeaaadjsgy2cynrugu2temzug43q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:37.42+00:00',
        updated: '2022-06-01T21:47:37.42+00:00',
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
      requestid: 'c0441311-193a-4988-9738-ebf92c116aa5',
      status: 'queued',
      created: 2022-06-01T21:47:50.981Z,
      pin: {
        cid: 'baeaaadjsg43symrxgeydmobxgm4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '60615032-f7fc-4f69-9ecf-404ea779baac',
      status: 'queued',
      created: 2022-06-01T21:47:49.978Z,
      pin: {
        cid: 'baeaaadjsg43symrxgaztimrygy4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'b0d0bc39-04d9-4d2f-b688-b950eeab297e',
      status: 'queued',
      created: 2022-06-01T21:47:44.829Z,
      pin: {
        cid: 'baeaaadjsg4zcymjugmydinjxg4za',
        name: 'b39c1284-a5ec-499c-8f24-e1b9da72183e',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'b9069a8d-aa1d-443a-82f8-8e119a61f949',
      status: 'queued',
      created: 2022-06-01T21:47:42.169Z,
      pin: {
        cid: 'baeaaadjsgy4symzxgiztmnbzgiyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '16e68b9b-1152-4273-a153-585868f4932d',
      status: 'queued',
      created: 2022-06-01T21:47:37.420Z,
      pin: {
        cid: 'baeaaadjsgy2cynrugu2temzug43q',
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
  "cf-ray": "714b26fdfd3b81ab-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:14 GMT",
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
      "requestid": "c0441311-193a-4988-9738-ebf92c116aa5",
      "status": "queued",
      "created": "2022-06-01T21:47:50.981+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgeydmobxgm4a",
        "_id": "c0441311-193a-4988-9738-ebf92c116aa5",
        "sourceCid": "baeaaadjsg43symrxgeydmobxgm4a",
        "contentCid": "baeaaadjsg43symrxgeydmobxgm4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:50.981+00:00",
        "updated": "2022-06-01T21:47:50.981+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:50.981+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "60615032-f7fc-4f69-9ecf-404ea779baac",
      "status": "queued",
      "created": "2022-06-01T21:47:49.978+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgaztimrygy4a",
        "_id": "60615032-f7fc-4f69-9ecf-404ea779baac",
        "sourceCid": "baeaaadjsg43symrxgaztimrygy4a",
        "contentCid": "baeaaadjsg43symrxgaztimrygy4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:49.978+00:00",
        "updated": "2022-06-01T21:47:49.978+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:49.978+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "b0d0bc39-04d9-4d2f-b688-b950eeab297e",
      "status": "queued",
      "created": "2022-06-01T21:47:44.829+00:00",
      "pin": {
        "cid": "baeaaadjsg4zcymjugmydinjxg4za",
        "_id": "b0d0bc39-04d9-4d2f-b688-b950eeab297e",
        "sourceCid": "baeaaadjsg4zcymjugmydinjxg4za",
        "contentCid": "baeaaadjsg4zcymjugmydinjxg4za",
        "authKey": 315318824629964100,
        "name": "b39c1284-a5ec-499c-8f24-e1b9da72183e",
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:44.829+00:00",
        "updated": "2022-06-01T21:47:44.829+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:44.829+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "b9069a8d-aa1d-443a-82f8-8e119a61f949",
      "status": "queued",
      "created": "2022-06-01T21:47:42.169+00:00",
      "pin": {
        "cid": "baeaaadjsgy4symzxgiztmnbzgiyq",
        "_id": "b9069a8d-aa1d-443a-82f8-8e119a61f949",
        "sourceCid": "baeaaadjsgy4symzxgiztmnbzgiyq",
        "contentCid": "baeaaadjsgy4symzxgiztmnbzgiyq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:42.169+00:00",
        "updated": "2022-06-01T21:47:42.169+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:42.169+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "16e68b9b-1152-4273-a153-585868f4932d",
      "status": "queued",
      "created": "2022-06-01T21:47:37.42+00:00",
      "pin": {
        "cid": "baeaaadjsgy2cynrugu2temzug43q",
        "_id": "16e68b9b-1152-4273-a153-585868f4932d",
        "sourceCid": "baeaaadjsgy2cynrugu2temzug43q",
        "contentCid": "baeaaadjsgy2cynrugu2temzug43q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:37.42+00:00",
        "updated": "2022-06-01T21:47:37.42+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:37.42+00:00",
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




#### Joi validation failures
No failures

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
  "cf-ray": "714b2720be128197-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:20 GMT",
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




#### Joi validation failures
No failures

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
      requestid: '1f9bb40b-1db0-41c1-813f-8df9876090c0',
      status: 'queued',
      created: '2022-06-01T21:48:01.566+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgyytknbzgi4q',
        _id: '1f9bb40b-1db0-41c1-813f-8df9876090c0',
        sourceCid: 'baeaaadjsg43symrxgyytknbzgi4q',
        contentCid: 'baeaaadjsg43symrxgyytknbzgi4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:48:01.566+00:00',
        updated: '2022-06-01T21:48:01.566+00:00',
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
      requestid: '25733117-a860-48ef-89d3-fcf2ce60ce97',
      status: 'queued',
      created: '2022-06-01T21:48:00.809+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgu3timrrha4q',
        _id: '25733117-a860-48ef-89d3-fcf2ce60ce97',
        sourceCid: 'baeaaadjsg43symrxgu3timrrha4q',
        contentCid: 'baeaaadjsg43symrxgu3timrrha4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:48:00.809+00:00',
        updated: '2022-06-01T21:48:00.809+00:00',
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
      requestid: '6bd5b792-8c4d-439e-9442-c4bef8defc67',
      status: 'queued',
      created: '2022-06-01T21:47:59.629+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxguztcmzvgq4a',
        _id: '6bd5b792-8c4d-439e-9442-c4bef8defc67',
        sourceCid: 'baeaaadjsg43symrxguztcmzvgq4a',
        contentCid: 'baeaaadjsg43symrxguztcmzvgq4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:59.629+00:00',
        updated: '2022-06-01T21:47:59.629+00:00',
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
      requestid: 'b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95',
      status: 'queued',
      created: '2022-06-01T21:47:58.417+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgq4dqmrsga3a',
        _id: 'b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95',
        sourceCid: 'baeaaadjsg43symrxgq4dqmrsga3a',
        contentCid: 'baeaaadjsg43symrxgq4dqmrsga3a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:58.417+00:00',
        updated: '2022-06-01T21:47:58.417+00:00',
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
      requestid: '474353e1-8bab-4937-8e04-789c53f3e105',
      status: 'queued',
      created: '2022-06-01T21:47:56.873+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgqzdqnzwgq4q',
        _id: '474353e1-8bab-4937-8e04-789c53f3e105',
        sourceCid: 'baeaaadjsg43symrxgqzdqnzwgq4q',
        contentCid: 'baeaaadjsg43symrxgqzdqnzwgq4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:56.873+00:00',
        updated: '2022-06-01T21:47:56.873+00:00',
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
      requestid: '91a5895b-bd81-4931-bf25-72f9f8d06b12',
      status: 'queued',
      created: '2022-06-01T21:47:55.824+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgm4dcmjwgazq',
        _id: '91a5895b-bd81-4931-bf25-72f9f8d06b12',
        sourceCid: 'baeaaadjsg43symrxgm4dcmjwgazq',
        contentCid: 'baeaaadjsg43symrxgm4dcmjwgazq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:55.824+00:00',
        updated: '2022-06-01T21:47:55.824+00:00',
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
      requestid: 'a89cc0fc-8a6d-4963-bc67-f8b67f6eede9',
      status: 'queued',
      created: '2022-06-01T21:47:55.216+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgmztimzzgu4a',
        _id: 'a89cc0fc-8a6d-4963-bc67-f8b67f6eede9',
        sourceCid: 'baeaaadjsg43symrxgmztimzzgu4a',
        contentCid: 'baeaaadjsg43symrxgmztimzzgu4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:55.216+00:00',
        updated: '2022-06-01T21:47:55.216+00:00',
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
      requestid: 'afc40f33-741e-4cc3-b99b-dd3f60cfc74c',
      status: 'queued',
      created: '2022-06-01T21:47:53.932+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgi4dgmjqga4a',
        _id: 'afc40f33-741e-4cc3-b99b-dd3f60cfc74c',
        sourceCid: 'baeaaadjsg43symrxgi4dgmjqga4a',
        contentCid: 'baeaaadjsg43symrxgi4dgmjqga4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:53.932+00:00',
        updated: '2022-06-01T21:47:53.932+00:00',
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
      requestid: 'a0af32ef-c45b-49f1-850e-885c77d1ebd0',
      status: 'queued',
      created: '2022-06-01T21:47:52.636+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxgiytembwgqya',
        _id: 'a0af32ef-c45b-49f1-850e-885c77d1ebd0',
        sourceCid: 'baeaaadjsg43symrxgiytembwgqya',
        contentCid: 'baeaaadjsg43symrxgiytembwgqya',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:52.636+00:00',
        updated: '2022-06-01T21:47:52.636+00:00',
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
      requestid: '9000b195-505a-4268-872c-728f255ea533',
      status: 'queued',
      created: '2022-06-01T21:47:52.131+00:00',
      pin: {
        cid: 'baeaaadjsg43symrxge3denruheza',
        _id: '9000b195-505a-4268-872c-728f255ea533',
        sourceCid: 'baeaaadjsg43symrxge3denruheza',
        contentCid: 'baeaaadjsg43symrxge3denruheza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:47:52.131+00:00',
        updated: '2022-06-01T21:47:52.131+00:00',
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
      requestid: '1f9bb40b-1db0-41c1-813f-8df9876090c0',
      status: 'queued',
      created: 2022-06-01T21:48:01.566Z,
      pin: {
        cid: 'baeaaadjsg43symrxgyytknbzgi4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '25733117-a860-48ef-89d3-fcf2ce60ce97',
      status: 'queued',
      created: 2022-06-01T21:48:00.809Z,
      pin: {
        cid: 'baeaaadjsg43symrxgu3timrrha4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '6bd5b792-8c4d-439e-9442-c4bef8defc67',
      status: 'queued',
      created: 2022-06-01T21:47:59.629Z,
      pin: {
        cid: 'baeaaadjsg43symrxguztcmzvgq4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95',
      status: 'queued',
      created: 2022-06-01T21:47:58.417Z,
      pin: {
        cid: 'baeaaadjsg43symrxgq4dqmrsga3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '474353e1-8bab-4937-8e04-789c53f3e105',
      status: 'queued',
      created: 2022-06-01T21:47:56.873Z,
      pin: {
        cid: 'baeaaadjsg43symrxgqzdqnzwgq4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '91a5895b-bd81-4931-bf25-72f9f8d06b12',
      status: 'queued',
      created: 2022-06-01T21:47:55.824Z,
      pin: {
        cid: 'baeaaadjsg43symrxgm4dcmjwgazq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'a89cc0fc-8a6d-4963-bc67-f8b67f6eede9',
      status: 'queued',
      created: 2022-06-01T21:47:55.216Z,
      pin: {
        cid: 'baeaaadjsg43symrxgmztimzzgu4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'afc40f33-741e-4cc3-b99b-dd3f60cfc74c',
      status: 'queued',
      created: 2022-06-01T21:47:53.932Z,
      pin: {
        cid: 'baeaaadjsg43symrxgi4dgmjqga4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'a0af32ef-c45b-49f1-850e-885c77d1ebd0',
      status: 'queued',
      created: 2022-06-01T21:47:52.636Z,
      pin: {
        cid: 'baeaaadjsg43symrxgiytembwgqya',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '9000b195-505a-4268-872c-728f255ea533',
      status: 'queued',
      created: 2022-06-01T21:47:52.131Z,
      pin: {
        cid: 'baeaaadjsg43symrxge3denruheza',
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
  "cf-ray": "714b26b92e6e824e-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:03 GMT",
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
      "requestid": "1f9bb40b-1db0-41c1-813f-8df9876090c0",
      "status": "queued",
      "created": "2022-06-01T21:48:01.566+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgyytknbzgi4q",
        "_id": "1f9bb40b-1db0-41c1-813f-8df9876090c0",
        "sourceCid": "baeaaadjsg43symrxgyytknbzgi4q",
        "contentCid": "baeaaadjsg43symrxgyytknbzgi4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:48:01.566+00:00",
        "updated": "2022-06-01T21:48:01.566+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:01.566+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "25733117-a860-48ef-89d3-fcf2ce60ce97",
      "status": "queued",
      "created": "2022-06-01T21:48:00.809+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgu3timrrha4q",
        "_id": "25733117-a860-48ef-89d3-fcf2ce60ce97",
        "sourceCid": "baeaaadjsg43symrxgu3timrrha4q",
        "contentCid": "baeaaadjsg43symrxgu3timrrha4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:48:00.809+00:00",
        "updated": "2022-06-01T21:48:00.809+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:48:00.809+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "6bd5b792-8c4d-439e-9442-c4bef8defc67",
      "status": "queued",
      "created": "2022-06-01T21:47:59.629+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxguztcmzvgq4a",
        "_id": "6bd5b792-8c4d-439e-9442-c4bef8defc67",
        "sourceCid": "baeaaadjsg43symrxguztcmzvgq4a",
        "contentCid": "baeaaadjsg43symrxguztcmzvgq4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:59.629+00:00",
        "updated": "2022-06-01T21:47:59.629+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:59.629+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95",
      "status": "queued",
      "created": "2022-06-01T21:47:58.417+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgq4dqmrsga3a",
        "_id": "b10a1e70-9c3d-490d-9aa7-0ae2e59e6a95",
        "sourceCid": "baeaaadjsg43symrxgq4dqmrsga3a",
        "contentCid": "baeaaadjsg43symrxgq4dqmrsga3a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:58.417+00:00",
        "updated": "2022-06-01T21:47:58.417+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:58.417+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "474353e1-8bab-4937-8e04-789c53f3e105",
      "status": "queued",
      "created": "2022-06-01T21:47:56.873+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgqzdqnzwgq4q",
        "_id": "474353e1-8bab-4937-8e04-789c53f3e105",
        "sourceCid": "baeaaadjsg43symrxgqzdqnzwgq4q",
        "contentCid": "baeaaadjsg43symrxgqzdqnzwgq4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:56.873+00:00",
        "updated": "2022-06-01T21:47:56.873+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:56.873+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "91a5895b-bd81-4931-bf25-72f9f8d06b12",
      "status": "queued",
      "created": "2022-06-01T21:47:55.824+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgm4dcmjwgazq",
        "_id": "91a5895b-bd81-4931-bf25-72f9f8d06b12",
        "sourceCid": "baeaaadjsg43symrxgm4dcmjwgazq",
        "contentCid": "baeaaadjsg43symrxgm4dcmjwgazq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:55.824+00:00",
        "updated": "2022-06-01T21:47:55.824+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.824+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a89cc0fc-8a6d-4963-bc67-f8b67f6eede9",
      "status": "queued",
      "created": "2022-06-01T21:47:55.216+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgmztimzzgu4a",
        "_id": "a89cc0fc-8a6d-4963-bc67-f8b67f6eede9",
        "sourceCid": "baeaaadjsg43symrxgmztimzzgu4a",
        "contentCid": "baeaaadjsg43symrxgmztimzzgu4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:55.216+00:00",
        "updated": "2022-06-01T21:47:55.216+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:55.216+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "afc40f33-741e-4cc3-b99b-dd3f60cfc74c",
      "status": "queued",
      "created": "2022-06-01T21:47:53.932+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgi4dgmjqga4a",
        "_id": "afc40f33-741e-4cc3-b99b-dd3f60cfc74c",
        "sourceCid": "baeaaadjsg43symrxgi4dgmjqga4a",
        "contentCid": "baeaaadjsg43symrxgi4dgmjqga4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:53.932+00:00",
        "updated": "2022-06-01T21:47:53.932+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:53.932+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a0af32ef-c45b-49f1-850e-885c77d1ebd0",
      "status": "queued",
      "created": "2022-06-01T21:47:52.636+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxgiytembwgqya",
        "_id": "a0af32ef-c45b-49f1-850e-885c77d1ebd0",
        "sourceCid": "baeaaadjsg43symrxgiytembwgqya",
        "contentCid": "baeaaadjsg43symrxgiytembwgqya",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:52.636+00:00",
        "updated": "2022-06-01T21:47:52.636+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.636+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "9000b195-505a-4268-872c-728f255ea533",
      "status": "queued",
      "created": "2022-06-01T21:47:52.131+00:00",
      "pin": {
        "cid": "baeaaadjsg43symrxge3denruheza",
        "_id": "9000b195-505a-4268-872c-728f255ea533",
        "sourceCid": "baeaaadjsg43symrxge3denruheza",
        "contentCid": "baeaaadjsg43symrxge3denruheza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-01T21:47:52.131+00:00",
        "updated": "2022-06-01T21:47:52.131+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-01T21:47:52.131+00:00",
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
