
# https://api.web3.storage compliance:

## Summary (1/9 successful)

  ✘ Request with no authentication token
  ✘ Request with invalid token
  ✘ Pins post of CID 'baeaaaczwgawdomrvge3tanbq'
  ✘ Can create and then delete a new pin
  ✘ List pin objects (GET /pins) in all states
  ✓ Can create and replace a pin's CID
  ✘ Can create a pin with name='cf500356-f73c-47a1-9f16-e9277927b05d'
  ✘ Pagination: Get all pins, create new pins (optional), get first and second pages
  ✘ Can delete all pins

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
  "cf-ray": "714af1168f7a256c-SJC",
  "connection": "close",
  "content-length": "87",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"code":"ERROR_NO_TOKEN","message":"No token found in `Authorization: Bearer ` header"}
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
  "cf-ray": "714af11aae4997d3-SJC",
  "connection": "close",
  "content-length": "82",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:27 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"code":"ERROR_UNRECOGNISED_TOKEN","message":"Could not parse provided API token"}
```
## Pins post of CID 'baeaaaczwgawdomrvge3tanbq' - ✘ FAILED

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
{"cid":"baeaaaczwgawdomrvge3tanbq"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
  status: 'queued',
  created: '2022-06-01T21:11:29.793+00:00',
  pin: {
    cid: 'baeaaaczwgawdomrvge3tanbq',
    _id: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
    sourceCid: 'baeaaaczwgawdomrvge3tanbq',
    contentCid: 'baeaaaczwgawdomrvge3tanbq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:11:29.793+00:00',
    updated: '2022-06-01T21:11:29.793+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:29.793+00:00',
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
  requestid: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
  status: 'queued',
  created: 2022-06-01T21:11:29.793Z,
  pin: {
    cid: 'baeaaaczwgawdomrvge3tanbq',
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
  "cf-ray": "714af120ff749450-SJC",
  "connection": "close",
  "content-length": "3785",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:30 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"d32d7d53-12e3-41e1-9135-05e64d8fcf84","status":"queued","created":"2022-06-01T21:11:29.793+00:00","pin":{"cid":"baeaaaczwgawdomrvge3tanbq","_id":"d32d7d53-12e3-41e1-9135-05e64d8fcf84","sourceCid":"baeaaaczwgawdomrvge3tanbq","contentCid":"baeaaaczwgawdomrvge3tanbq","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:29.793+00:00","updated":"2022-06-01T21:11:29.793+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## The newly created pin can be immediately deleted - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202: The Pin was deleted successfully (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/cf7bfc72-a39b-4c42-bd95-837ac572acca

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/cf7bfc72-a39b-4c42-bd95-837ac572acca
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
  "cf-ray": "714af13c2825969b-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:33 GMT",
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
{"cid":"baeaaacrwgmwdcnbzgizdema"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'cf7bfc72-a39b-4c42-bd95-837ac572acca',
  status: 'queued',
  created: '2022-06-01T21:11:32.059+00:00',
  pin: {
    cid: 'baeaaacrwgmwdcnbzgizdema',
    _id: 'cf7bfc72-a39b-4c42-bd95-837ac572acca',
    sourceCid: 'baeaaacrwgmwdcnbzgizdema',
    contentCid: 'baeaaacrwgmwdcnbzgizdema',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:11:32.059+00:00',
    updated: '2022-06-01T21:11:32.059+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:32.059+00:00',
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
  requestid: 'cf7bfc72-a39b-4c42-bd95-837ac572acca',
  status: 'queued',
  created: 2022-06-01T21:11:32.059Z,
  pin: {
    cid: 'baeaaacrwgmwdcnbzgizdema',
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
  "cf-ray": "714af12f89792536-SJC",
  "connection": "close",
  "content-length": "3782",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"cf7bfc72-a39b-4c42-bd95-837ac572acca","status":"queued","created":"2022-06-01T21:11:32.059+00:00","pin":{"cid":"baeaaacrwgmwdcnbzgizdema","_id":"cf7bfc72-a39b-4c42-bd95-837ac572acca","sourceCid":"baeaaacrwgmwdcnbzgizdema","contentCid":"baeaaacrwgmwdcnbzgizdema","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:32.059+00:00","updated":"2022-06-01T21:11:32.059+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:32.059+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
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
  count: 5,
  results: [
    {
      requestid: 'fd9e40a6-8e2d-4945-8289-6cf298bc772c',
      status: 'queued',
      created: '2022-06-01T21:11:33.579+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjqg44tinrwgu',
        _id: 'fd9e40a6-8e2d-4945-8289-6cf298bc772c',
        sourceCid: 'baeaaadbxguwdkmjqg44tinrwgu',
        contentCid: 'baeaaadbxguwdkmjqg44tinrwgu',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:33.579+00:00',
        updated: '2022-06-01T21:11:33.579+00:00',
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
      requestid: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
      status: 'queued',
      created: '2022-06-01T21:11:29.793+00:00',
      pin: {
        cid: 'baeaaaczwgawdomrvge3tanbq',
        _id: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
        sourceCid: 'baeaaaczwgawdomrvge3tanbq',
        contentCid: 'baeaaaczwgawdomrvge3tanbq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:29.793+00:00',
        updated: '2022-06-01T21:11:29.793+00:00',
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
      requestid: '5e6d3071-1b64-40a2-a8f6-4b68f64a2a53',
      status: 'queued',
      created: '2022-06-01T21:11:27.663+00:00',
      pin: {
        cid: 'baeaaadbxgawdemzrgyydsmjugy',
        _id: '5e6d3071-1b64-40a2-a8f6-4b68f64a2a53',
        sourceCid: 'baeaaadbxgawdemzrgyydsmjugy',
        contentCid: 'baeaaadbxgawdemzrgyydsmjugy',
        authKey: 315318824629964100,
        name: 'aca718c4-79cb-446a-82fe-815802461735',
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:27.663+00:00',
        updated: '2022-06-01T21:11:27.663+00:00',
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
      requestid: '415e4bdc-fa11-4d6f-8ce6-e723beac4d85',
      status: 'queued',
      created: '2022-06-01T21:11:24.622+00:00',
      pin: {
        cid: 'baeaaadbwguwdkobrgmydonjsgq',
        _id: '415e4bdc-fa11-4d6f-8ce6-e723beac4d85',
        sourceCid: 'baeaaadbwguwdkobrgmydonjsgq',
        contentCid: 'baeaaadbwguwdkobrgmydonjsgq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:24.622+00:00',
        updated: '2022-06-01T21:11:24.622+00:00',
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
      requestid: '9eccc31b-56ec-44d3-a75e-e18eb43f825b',
      status: 'queued',
      created: '2022-06-01T21:11:14.401+00:00',
      pin: {
        cid: 'baeaaadbvguwdkobqhaydknbrgm',
        _id: '9eccc31b-56ec-44d3-a75e-e18eb43f825b',
        sourceCid: 'baeaaadbvguwdkobqhaydknbrgm',
        contentCid: 'baeaaadbvguwdkobqhaydknbrgm',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:14.401+00:00',
        updated: '2022-06-01T21:11:14.401+00:00',
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
      requestid: 'fd9e40a6-8e2d-4945-8289-6cf298bc772c',
      status: 'queued',
      created: 2022-06-01T21:11:33.579Z,
      pin: {
        cid: 'baeaaadbxguwdkmjqg44tinrwgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
      status: 'queued',
      created: 2022-06-01T21:11:29.793Z,
      pin: {
        cid: 'baeaaaczwgawdomrvge3tanbq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '5e6d3071-1b64-40a2-a8f6-4b68f64a2a53',
      status: 'queued',
      created: 2022-06-01T21:11:27.663Z,
      pin: {
        cid: 'baeaaadbxgawdemzrgyydsmjugy',
        name: 'aca718c4-79cb-446a-82fe-815802461735',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '415e4bdc-fa11-4d6f-8ce6-e723beac4d85',
      status: 'queued',
      created: 2022-06-01T21:11:24.622Z,
      pin: {
        cid: 'baeaaadbwguwdkobrgmydonjsgq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '9eccc31b-56ec-44d3-a75e-e18eb43f825b',
      status: 'queued',
      created: 2022-06-01T21:11:14.401Z,
      pin: {
        cid: 'baeaaadbvguwdkobqhaydknbrgm',
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
  "cf-ray": "714af1431eb59692-SJC",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:34 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":5,"results":[{"requestid":"fd9e40a6-8e2d-4945-8289-6cf298bc772c","status":"queued","created":"2022-06-01T21:11:33.579+00:00","pin":{"cid":"baeaaadbxguwdkmjqg44tinrwgu","_id":"fd9e40a6-8e2d-4945-8289-6cf298bc772c","sourceCid":"baeaaadbxguwdkmjqg44tinrwgu","contentCid":"baeaaadbxguwdkmjqg44tinrwgu","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:33.579+00:00","updated":"2022-06-01T21:11:33.579+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"d32d7d53-12e3-41e1-9135-05e64d8fcf84","status":"queued","created":"2022-06-01T21:11:29.793+00:00","pin":{"cid":"baeaaaczwgawdomrvge3tanbq","_id":"d32d7d53-12e3-41e1-9135-05e64d8fcf84","sourceCid":"baeaaaczwgawdomrvge3tanbq","contentCid":"baeaaaczwgawdomrvge3tanbq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:29.793+00:00","updated":"2022-06-01T21:11:29.793+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"5e6d3071-1b64-40a2-a8f6-4b68f64a2a53","status":"queued","created":"2022-06-01T21:11:27.663+00:00","pin":{"cid":"baeaaadbxgawdemzrgyydsmjugy","_id":"5e6d3071-1b64-40a2-a8f6-4b68f64a2a53","sourceCid":"baeaaadbxgawdemzrgyydsmjugy","contentCid":"baeaaadbxgawdemzrgyydsmjugy","authKey":315318824629964100,"name":"aca718c4-79cb-446a-82fe-815802461735","meta":null,"deleted":null,"created":"2022-06-01T21:11:27.663+00:00","updated":"2022-06-01T21:11:27.663+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"415e4bdc-fa11-4d6f-8ce6-e723beac4d85","status":"queued","created":"2022-06-01T21:11:24.622+00:00","pin":{"cid":"baeaaadbwguwdkobrgmydonjsgq","_id":"415e4bdc-fa11-4d6f-8ce6-e723beac4d85","sourceCid":"baeaaadbwguwdkobrgmydonjsgq","contentCid":"baeaaadbwguwdkobrgmydonjsgq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:24.622+00:00","updated":"2022-06-01T21:11:24.622+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"9eccc31b-56ec-44d3-a75e-e18eb43f825b","status":"queued","created":"2022-06-01T21:11:14.401+00:00","pin":{"cid":"baeaaadbvguwdkobqhaydknbrgm","_id":"9eccc31b-56ec-44d3-a75e-e18eb43f825b","sourceCid":"baeaaadbvguwdkobqhaydknbrgm","contentCid":"baeaaadbvguwdkobqhaydknbrgm","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:14.401+00:00","updated":"2022-06-01T21:11:14.401+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}]}
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

#### Request - GET: https://api.web3.storage/pins/15bf5522-0aa7-456b-82fd-e54ecbe5eff6

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/15bf5522-0aa7-456b-82fd-e54ecbe5eff6
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
  "cf-ray": "714af1595f8c9673-SJC",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:38 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_RESOURCE_NOT_FOUND","details":"Requested data was not found."}
```
## Get new pin via requestid - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.web3.storage/pins/0133b511-4780-4816-b0e7-5cf1a6b520d6

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/0133b511-4780-4816-b0e7-5cf1a6b520d6
```
{
  requestid: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
  status: 'queued',
  created: '2022-06-01T21:11:36.841+00:00',
  pin: {
    cid: 'baeaaadbwhawdkmzvge4diobtga',
    _id: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
    sourceCid: 'baeaaadbwhawdkmzvge4diobtga',
    contentCid: 'baeaaadbwhawdkmzvge4diobtga',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:11:36.841+00:00',
    updated: '2022-06-01T21:11:36.841+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
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
  requestid: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
  status: 'queued',
  created: 2022-06-01T21:11:36.841Z,
  pin: {
    cid: 'baeaaadbwhawdkmzvge4diobtga',
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
  "cf-ray": "714af15f98219855-SJC",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:38 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"0133b511-4780-4816-b0e7-5cf1a6b520d6","status":"queued","created":"2022-06-01T21:11:36.841+00:00","pin":{"cid":"baeaaadbwhawdkmzvge4diobtga","_id":"0133b511-4780-4816-b0e7-5cf1a6b520d6","sourceCid":"baeaaadbwhawdkmzvge4diobtga","contentCid":"baeaaadbwhawdkmzvge4diobtga","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:36.841+00:00","updated":"2022-06-01T21:11:36.841+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Pin's with requestid '15bf5522-0aa7-456b-82fd-e54ecbe5eff6' can have cid 'baeaaadbwg4wdgmzwgezdinjwhe' replaced with 'baeaaadbwhawdkmzvge4diobtga' - ✓ SUCCESS

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

#### Request - POST: https://api.web3.storage/pins/15bf5522-0aa7-456b-82fd-e54ecbe5eff6

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbwhawdkmzvge4diobtga"}
```
#### Response data from https://api.web3.storage/pins/15bf5522-0aa7-456b-82fd-e54ecbe5eff6
```
{
  requestid: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
  status: 'queued',
  created: '2022-06-01T21:11:36.841+00:00',
  pin: {
    cid: 'baeaaadbwhawdkmzvge4diobtga',
    _id: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
    sourceCid: 'baeaaadbwhawdkmzvge4diobtga',
    contentCid: 'baeaaadbwhawdkmzvge4diobtga',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:11:36.841+00:00',
    updated: '2022-06-01T21:11:36.841+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:36.841+00:00',
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
  requestid: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
  status: 'queued',
  created: 2022-06-01T21:11:36.841Z,
  pin: {
    cid: 'baeaaadbwhawdkmzvge4diobtga',
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
  "cf-ray": "714af15239449e6a-SJC",
  "connection": "close",
  "content-length": "3791",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:37 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"0133b511-4780-4816-b0e7-5cf1a6b520d6","status":"queued","created":"2022-06-01T21:11:36.841+00:00","pin":{"cid":"baeaaadbwhawdkmzvge4diobtga","_id":"0133b511-4780-4816-b0e7-5cf1a6b520d6","sourceCid":"baeaaadbwhawdkmzvge4diobtga","contentCid":"baeaaadbwhawdkmzvge4diobtga","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:36.841+00:00","updated":"2022-06-01T21:11:36.841+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create and replace a pin's CID - ✓ SUCCESS

### Expectations (7/7 successful)

  ✓ Pin exists (success)
  ✓ Could obtain requestid from new pin (15bf5522-0aa7-456b-82fd-e54ecbe5eff6) (success)
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
{"cid":"baeaaadbwg4wdgmzwgezdinjwhe"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '15bf5522-0aa7-456b-82fd-e54ecbe5eff6',
  status: 'queued',
  created: '2022-06-01T21:11:35.796+00:00',
  pin: {
    cid: 'baeaaadbwg4wdgmzwgezdinjwhe',
    _id: '15bf5522-0aa7-456b-82fd-e54ecbe5eff6',
    sourceCid: 'baeaaadbwg4wdgmzwgezdinjwhe',
    contentCid: 'baeaaadbwg4wdgmzwgezdinjwhe',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:11:35.796+00:00',
    updated: '2022-06-01T21:11:35.796+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:35.796+00:00',
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
  requestid: '15bf5522-0aa7-456b-82fd-e54ecbe5eff6',
  status: 'queued',
  created: 2022-06-01T21:11:35.796Z,
  pin: {
    cid: 'baeaaadbwg4wdgmzwgezdinjwhe',
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
  "cf-ray": "714af14a9b3797d3-SJC",
  "connection": "close",
  "content-length": "3791",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:36 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"15bf5522-0aa7-456b-82fd-e54ecbe5eff6","status":"queued","created":"2022-06-01T21:11:35.796+00:00","pin":{"cid":"baeaaadbwg4wdgmzwgezdinjwhe","_id":"15bf5522-0aa7-456b-82fd-e54ecbe5eff6","sourceCid":"baeaaadbwg4wdgmzwgezdinjwhe","contentCid":"baeaaadbwg4wdgmzwgezdinjwhe","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:35.796+00:00","updated":"2022-06-01T21:11:35.796+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.796+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can retrieve pin with name 'cf500356-f73c-47a1-9f16-e9277927b05d' via the 'exact' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://api.web3.storage/pins?name=cf500356-f73c-47a1-9f16-e9277927b05d&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=cf500356-f73c-47a1-9f16-e9277927b05d&match=exact
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
  "cf-ray": "714af16a6d6e6441-SJC",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:40 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_REQUIRED_DATA","details":"Instance does not have required property \"status\"."}
```
## Can retrieve pin with name 'CF500356-F73C-47A1-9F16-E9277927B05D' via the 'iexact' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://api.web3.storage/pins?name=CF500356-F73C-47A1-9F16-E9277927B05D&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=CF500356-F73C-47A1-9F16-E9277927B05D&match=iexact
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
  "cf-ray": "714af1706eff9e68-SJC",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:41 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_REQUIRED_DATA","details":"Instance does not have required property \"status\"."}
```
## Can retrieve pin with name 'f73c-47a1-9f16-e92' via the 'partial' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://api.web3.storage/pins?name=f73c-47a1-9f16-e92&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=f73c-47a1-9f16-e92&match=partial
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
  "cf-ray": "714af176aa2596dd-SJC",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_REQUIRED_DATA","details":"Instance does not have required property \"status\"."}
```
## Can retrieve pin with name 'F73C-47A1-9F16-E92' via the 'ipartial' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://api.web3.storage/pins?name=F73C-47A1-9F16-E92&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=F73C-47A1-9F16-E92&match=ipartial
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
  "cf-ray": "714af17cea2197d3-SJC",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_REQUIRED_DATA","details":"Instance does not have required property \"status\"."}
```
## Can create a pin with name='cf500356-f73c-47a1-9f16-e9277927b05d' - ✘ FAILED

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
{"cid":"baeaaadbxgewdgnzyg4ztqmbugy","name":"cf500356-f73c-47a1-9f16-e9277927b05d"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7',
  status: 'queued',
  created: '2022-06-01T21:11:39.664+00:00',
  pin: {
    cid: 'baeaaadbxgewdgnzyg4ztqmbugy',
    _id: 'e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7',
    sourceCid: 'baeaaadbxgewdgnzyg4ztqmbugy',
    contentCid: 'baeaaadbxgewdgnzyg4ztqmbugy',
    authKey: '315318824629964106',
    name: 'cf500356-f73c-47a1-9f16-e9277927b05d',
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:11:39.664+00:00',
    updated: '2022-06-01T21:11:39.664+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:39.664+00:00',
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
  requestid: 'e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7',
  status: 'queued',
  created: 2022-06-01T21:11:39.664Z,
  pin: {
    cid: 'baeaaadbxgewdgnzyg4ztqmbugy',
    name: 'cf500356-f73c-47a1-9f16-e9277927b05d',
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
  "cf-ray": "714af163eeae9e6e-SJC",
  "connection": "close",
  "content-length": "3825",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7","status":"queued","created":"2022-06-01T21:11:39.664+00:00","pin":{"cid":"baeaaadbxgewdgnzyg4ztqmbugy","_id":"e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7","sourceCid":"baeaaadbxgewdgnzyg4ztqmbugy","contentCid":"baeaaadbxgewdgnzyg4ztqmbugy","authKey":"315318824629964106","name":"cf500356-f73c-47a1-9f16-e9277927b05d","origins":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:39.664+00:00","updated":"2022-06-01T21:11:39.664+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadbxgywdomjvg42tsmrzgy' - ✓ SUCCESS

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
{"cid":"baeaaadbxgywdomjvg42tsmrzgy"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '7c33f4b1-a6be-4c18-9096-b74945200800',
  status: 'queued',
  created: '2022-06-01T21:11:44.666+00:00',
  pin: {
    cid: 'baeaaadbxgywdomjvg42tsmrzgy',
    _id: '7c33f4b1-a6be-4c18-9096-b74945200800',
    sourceCid: 'baeaaadbxgywdomjvg42tsmrzgy',
    contentCid: 'baeaaadbxgywdomjvg42tsmrzgy',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:11:44.666+00:00',
    updated: '2022-06-01T21:11:44.666+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:44.666+00:00',
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
  requestid: '7c33f4b1-a6be-4c18-9096-b74945200800',
  status: 'queued',
  created: 2022-06-01T21:11:44.666Z,
  pin: {
    cid: 'baeaaadbxgywdomjvg42tsmrzgy',
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
  "cf-ray": "714af1855deb9e76-SJC",
  "connection": "close",
  "content-length": "3791",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:44 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"7c33f4b1-a6be-4c18-9096-b74945200800","status":"queued","created":"2022-06-01T21:11:44.666+00:00","pin":{"cid":"baeaaadbxgywdomjvg42tsmrzgy","_id":"7c33f4b1-a6be-4c18-9096-b74945200800","sourceCid":"baeaaadbxgywdomjvg42tsmrzgy","contentCid":"baeaaadbxgywdomjvg42tsmrzgy","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:44.666+00:00","updated":"2022-06-01T21:11:44.666+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadbxgywdomjxgi2tcmzugq' - ✓ SUCCESS

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
{"cid":"baeaaadbxgywdomjxgi2tcmzugq"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'c47e74f8-a383-49fd-ac28-d4ee8535dc39',
  status: 'queued',
  created: '2022-06-01T21:11:45.511+00:00',
  pin: {
    cid: 'baeaaadbxgywdomjxgi2tcmzugq',
    _id: 'c47e74f8-a383-49fd-ac28-d4ee8535dc39',
    sourceCid: 'baeaaadbxgywdomjxgi2tcmzugq',
    contentCid: 'baeaaadbxgywdomjxgi2tcmzugq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:11:45.511+00:00',
    updated: '2022-06-01T21:11:45.511+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:45.511+00:00',
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
  requestid: 'c47e74f8-a383-49fd-ac28-d4ee8535dc39',
  status: 'queued',
  created: 2022-06-01T21:11:45.511Z,
  pin: {
    cid: 'baeaaadbxgywdomjxgi2tcmzugq',
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
  "cf-ray": "714af18b8ded9855-SJC",
  "connection": "close",
  "content-length": "3791",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:45 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"c47e74f8-a383-49fd-ac28-d4ee8535dc39","status":"queued","created":"2022-06-01T21:11:45.511+00:00","pin":{"cid":"baeaaadbxgywdomjxgi2tcmzugq","_id":"c47e74f8-a383-49fd-ac28-d4ee8535dc39","sourceCid":"baeaaadbxgywdomjxgi2tcmzugq","contentCid":"baeaaadbxgywdomjxgi2tcmzugq","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:45.511+00:00","updated":"2022-06-01T21:11:45.511+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadbxgywdomjxhe2tgmjwg4' - ✓ SUCCESS

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
{"cid":"baeaaadbxgywdomjxhe2tgmjwg4"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '289db601-4b4d-40ae-9891-9d680cebb5b0',
  status: 'queued',
  created: '2022-06-01T21:11:46.543+00:00',
  pin: {
    cid: 'baeaaadbxgywdomjxhe2tgmjwg4',
    _id: '289db601-4b4d-40ae-9891-9d680cebb5b0',
    sourceCid: 'baeaaadbxgywdomjxhe2tgmjwg4',
    contentCid: 'baeaaadbxgywdomjxhe2tgmjwg4',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T21:11:46.543+00:00',
    updated: '2022-06-01T21:11:46.543+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T21:11:46.543+00:00',
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
  requestid: '289db601-4b4d-40ae-9891-9d680cebb5b0',
  status: 'queued',
  created: 2022-06-01T21:11:46.543Z,
  pin: {
    cid: 'baeaaadbxgywdomjxhe2tgmjwg4',
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
  "cf-ray": "714af191cfe69e6e-SJC",
  "connection": "close",
  "content-length": "3791",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:46 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"289db601-4b4d-40ae-9891-9d680cebb5b0","status":"queued","created":"2022-06-01T21:11:46.543+00:00","pin":{"cid":"baeaaadbxgywdomjxhe2tgmjwg4","_id":"289db601-4b4d-40ae-9891-9d680cebb5b0","sourceCid":"baeaaadbxgywdomjxhe2tgmjwg4","contentCid":"baeaaadbxgywdomjxhe2tgmjwg4","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:46.543+00:00","updated":"2022-06-01T21:11:46.543+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
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
  count: 19,
  results: [
    {
      requestid: 'f4a6f2c1-18af-4783-bc36-025b09563490',
      status: 'queued',
      created: '2022-06-01T21:11:47.327+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmrqgyztsobsgq',
        _id: 'f4a6f2c1-18af-4783-bc36-025b09563490',
        sourceCid: 'baeaaadbxguwdkmrqgyztsobsgq',
        contentCid: 'baeaaadbxguwdkmrqgyztsobsgq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:47.327+00:00',
        updated: '2022-06-01T21:11:47.327+00:00',
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
      requestid: '289db601-4b4d-40ae-9891-9d680cebb5b0',
      status: 'queued',
      created: '2022-06-01T21:11:46.543+00:00',
      pin: {
        cid: 'baeaaadbxgywdomjxhe2tgmjwg4',
        _id: '289db601-4b4d-40ae-9891-9d680cebb5b0',
        sourceCid: 'baeaaadbxgywdomjxhe2tgmjwg4',
        contentCid: 'baeaaadbxgywdomjxhe2tgmjwg4',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:46.543+00:00',
        updated: '2022-06-01T21:11:46.543+00:00',
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
      requestid: '4a1a641d-9cb7-4f18-a591-2801ae31b175',
      status: 'queued',
      created: '2022-06-01T21:11:46.272+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjygm2demjzgm',
        _id: '4a1a641d-9cb7-4f18-a591-2801ae31b175',
        sourceCid: 'baeaaadbxguwdkmjygm2demjzgm',
        contentCid: 'baeaaadbxguwdkmjygm2demjzgm',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:46.272+00:00',
        updated: '2022-06-01T21:11:46.272+00:00',
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
      requestid: 'c47e74f8-a383-49fd-ac28-d4ee8535dc39',
      status: 'queued',
      created: '2022-06-01T21:11:45.511+00:00',
      pin: {
        cid: 'baeaaadbxgywdomjxgi2tcmzugq',
        _id: 'c47e74f8-a383-49fd-ac28-d4ee8535dc39',
        sourceCid: 'baeaaadbxgywdomjxgi2tcmzugq',
        contentCid: 'baeaaadbxgywdomjxgi2tcmzugq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:45.511+00:00',
        updated: '2022-06-01T21:11:45.511+00:00',
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
      requestid: '5138faac-b345-4864-ac2a-a7e716f2fff8',
      status: 'queued',
      created: '2022-06-01T21:11:44.992+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjxge4dcojsg4',
        _id: '5138faac-b345-4864-ac2a-a7e716f2fff8',
        sourceCid: 'baeaaadbxguwdkmjxge4dcojsg4',
        contentCid: 'baeaaadbxguwdkmjxge4dcojsg4',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:44.992+00:00',
        updated: '2022-06-01T21:11:44.992+00:00',
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
      requestid: '7c33f4b1-a6be-4c18-9096-b74945200800',
      status: 'queued',
      created: '2022-06-01T21:11:44.666+00:00',
      pin: {
        cid: 'baeaaadbxgywdomjvg42tsmrzgy',
        _id: '7c33f4b1-a6be-4c18-9096-b74945200800',
        sourceCid: 'baeaaadbxgywdomjvg42tsmrzgy',
        contentCid: 'baeaaadbxgywdomjvg42tsmrzgy',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:44.666+00:00',
        updated: '2022-06-01T21:11:44.666+00:00',
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
      requestid: '67c29275-ee85-42c4-8e96-43c73edbfe7f',
      status: 'queued',
      created: '2022-06-01T21:11:43.679+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjwgmytmnjxha',
        _id: '67c29275-ee85-42c4-8e96-43c73edbfe7f',
        sourceCid: 'baeaaadbxguwdkmjwgmytmnjxha',
        contentCid: 'baeaaadbxguwdkmjwgmytmnjxha',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:43.679+00:00',
        updated: '2022-06-01T21:11:43.679+00:00',
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
      requestid: 'd5c5ac11-1914-4697-9aaa-879058dc4eda',
      status: 'queued',
      created: '2022-06-01T21:11:41.142+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjuhe4taobqgm',
        _id: 'd5c5ac11-1914-4697-9aaa-879058dc4eda',
        sourceCid: 'baeaaadbxguwdkmjuhe4taobqgm',
        contentCid: 'baeaaadbxguwdkmjuhe4taobqgm',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:41.142+00:00',
        updated: '2022-06-01T21:11:41.142+00:00',
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
      requestid: 'e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7',
      status: 'queued',
      created: '2022-06-01T21:11:39.664+00:00',
      pin: {
        cid: 'baeaaadbxgewdgnzyg4ztqmbugy',
        _id: 'e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7',
        sourceCid: 'baeaaadbxgewdgnzyg4ztqmbugy',
        contentCid: 'baeaaadbxgewdgnzyg4ztqmbugy',
        authKey: 315318824629964100,
        name: 'cf500356-f73c-47a1-9f16-e9277927b05d',
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:39.664+00:00',
        updated: '2022-06-01T21:11:39.664+00:00',
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
      requestid: 'f5d670cf-0323-42f3-9806-73c5534ac806',
      status: 'queued',
      created: '2022-06-01T21:11:39.529+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjthe2dmmbugq',
        _id: 'f5d670cf-0323-42f3-9806-73c5534ac806',
        sourceCid: 'baeaaadbxguwdkmjthe2dmmbugq',
        contentCid: 'baeaaadbxguwdkmjthe2dmmbugq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:39.529+00:00',
        updated: '2022-06-01T21:11:39.529+00:00',
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
  count: 19,
  results: Set(10) {
    {
      requestid: 'f4a6f2c1-18af-4783-bc36-025b09563490',
      status: 'queued',
      created: 2022-06-01T21:11:47.327Z,
      pin: {
        cid: 'baeaaadbxguwdkmrqgyztsobsgq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '289db601-4b4d-40ae-9891-9d680cebb5b0',
      status: 'queued',
      created: 2022-06-01T21:11:46.543Z,
      pin: {
        cid: 'baeaaadbxgywdomjxhe2tgmjwg4',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '4a1a641d-9cb7-4f18-a591-2801ae31b175',
      status: 'queued',
      created: 2022-06-01T21:11:46.272Z,
      pin: {
        cid: 'baeaaadbxguwdkmjygm2demjzgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'c47e74f8-a383-49fd-ac28-d4ee8535dc39',
      status: 'queued',
      created: 2022-06-01T21:11:45.511Z,
      pin: {
        cid: 'baeaaadbxgywdomjxgi2tcmzugq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '5138faac-b345-4864-ac2a-a7e716f2fff8',
      status: 'queued',
      created: 2022-06-01T21:11:44.992Z,
      pin: {
        cid: 'baeaaadbxguwdkmjxge4dcojsg4',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '7c33f4b1-a6be-4c18-9096-b74945200800',
      status: 'queued',
      created: 2022-06-01T21:11:44.666Z,
      pin: {
        cid: 'baeaaadbxgywdomjvg42tsmrzgy',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '67c29275-ee85-42c4-8e96-43c73edbfe7f',
      status: 'queued',
      created: 2022-06-01T21:11:43.679Z,
      pin: {
        cid: 'baeaaadbxguwdkmjwgmytmnjxha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'd5c5ac11-1914-4697-9aaa-879058dc4eda',
      status: 'queued',
      created: 2022-06-01T21:11:41.142Z,
      pin: {
        cid: 'baeaaadbxguwdkmjuhe4taobqgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7',
      status: 'queued',
      created: 2022-06-01T21:11:39.664Z,
      pin: {
        cid: 'baeaaadbxgewdgnzyg4ztqmbugy',
        name: 'cf500356-f73c-47a1-9f16-e9277927b05d',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'f5d670cf-0323-42f3-9806-73c5534ac806',
      status: 'queued',
      created: 2022-06-01T21:11:39.529Z,
      pin: {
        cid: 'baeaaadbxguwdkmjthe2dmmbugq',
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
  "cf-ray": "714af1981d686441-SJC",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":19,"results":[{"requestid":"f4a6f2c1-18af-4783-bc36-025b09563490","status":"queued","created":"2022-06-01T21:11:47.327+00:00","pin":{"cid":"baeaaadbxguwdkmrqgyztsobsgq","_id":"f4a6f2c1-18af-4783-bc36-025b09563490","sourceCid":"baeaaadbxguwdkmrqgyztsobsgq","contentCid":"baeaaadbxguwdkmrqgyztsobsgq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:47.327+00:00","updated":"2022-06-01T21:11:47.327+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"289db601-4b4d-40ae-9891-9d680cebb5b0","status":"queued","created":"2022-06-01T21:11:46.543+00:00","pin":{"cid":"baeaaadbxgywdomjxhe2tgmjwg4","_id":"289db601-4b4d-40ae-9891-9d680cebb5b0","sourceCid":"baeaaadbxgywdomjxhe2tgmjwg4","contentCid":"baeaaadbxgywdomjxhe2tgmjwg4","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:46.543+00:00","updated":"2022-06-01T21:11:46.543+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"4a1a641d-9cb7-4f18-a591-2801ae31b175","status":"queued","created":"2022-06-01T21:11:46.272+00:00","pin":{"cid":"baeaaadbxguwdkmjygm2demjzgm","_id":"4a1a641d-9cb7-4f18-a591-2801ae31b175","sourceCid":"baeaaadbxguwdkmjygm2demjzgm","contentCid":"baeaaadbxguwdkmjygm2demjzgm","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:46.272+00:00","updated":"2022-06-01T21:11:46.272+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"c47e74f8-a383-49fd-ac28-d4ee8535dc39","status":"queued","created":"2022-06-01T21:11:45.511+00:00","pin":{"cid":"baeaaadbxgywdomjxgi2tcmzugq","_id":"c47e74f8-a383-49fd-ac28-d4ee8535dc39","sourceCid":"baeaaadbxgywdomjxgi2tcmzugq","contentCid":"baeaaadbxgywdomjxgi2tcmzugq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:45.511+00:00","updated":"2022-06-01T21:11:45.511+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"5138faac-b345-4864-ac2a-a7e716f2fff8","status":"queued","created":"2022-06-01T21:11:44.992+00:00","pin":{"cid":"baeaaadbxguwdkmjxge4dcojsg4","_id":"5138faac-b345-4864-ac2a-a7e716f2fff8","sourceCid":"baeaaadbxguwdkmjxge4dcojsg4","contentCid":"baeaaadbxguwdkmjxge4dcojsg4","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:44.992+00:00","updated":"2022-06-01T21:11:44.992+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"7c33f4b1-a6be-4c18-9096-b74945200800","status":"queued","created":"2022-06-01T21:11:44.666+00:00","pin":{"cid":"baeaaadbxgywdomjvg42tsmrzgy","_id":"7c33f4b1-a6be-4c18-9096-b74945200800","sourceCid":"baeaaadbxgywdomjvg42tsmrzgy","contentCid":"baeaaadbxgywdomjvg42tsmrzgy","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:44.666+00:00","updated":"2022-06-01T21:11:44.666+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"67c29275-ee85-42c4-8e96-43c73edbfe7f","status":"queued","created":"2022-06-01T21:11:43.679+00:00","pin":{"cid":"baeaaadbxguwdkmjwgmytmnjxha","_id":"67c29275-ee85-42c4-8e96-43c73edbfe7f","sourceCid":"baeaaadbxguwdkmjwgmytmnjxha","contentCid":"baeaaadbxguwdkmjwgmytmnjxha","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:43.679+00:00","updated":"2022-06-01T21:11:43.679+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"d5c5ac11-1914-4697-9aaa-879058dc4eda","status":"queued","created":"2022-06-01T21:11:41.142+00:00","pin":{"cid":"baeaaadbxguwdkmjuhe4taobqgm","_id":"d5c5ac11-1914-4697-9aaa-879058dc4eda","sourceCid":"baeaaadbxguwdkmjuhe4taobqgm","contentCid":"baeaaadbxguwdkmjuhe4taobqgm","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:41.142+00:00","updated":"2022-06-01T21:11:41.142+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7","status":"queued","created":"2022-06-01T21:11:39.664+00:00","pin":{"cid":"baeaaadbxgewdgnzyg4ztqmbugy","_id":"e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7","sourceCid":"baeaaadbxgewdgnzyg4ztqmbugy","contentCid":"baeaaadbxgewdgnzyg4ztqmbugy","authKey":315318824629964100,"name":"cf500356-f73c-47a1-9f16-e9277927b05d","meta":null,"deleted":null,"created":"2022-06-01T21:11:39.664+00:00","updated":"2022-06-01T21:11:39.664+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"f5d670cf-0323-42f3-9806-73c5534ac806","status":"queued","created":"2022-06-01T21:11:39.529+00:00","pin":{"cid":"baeaaadbxguwdkmjthe2dmmbugq","_id":"f5d670cf-0323-42f3-9806-73c5534ac806","sourceCid":"baeaaadbxguwdkmjthe2dmmbugq","contentCid":"baeaaadbxguwdkmjthe2dmmbugq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:39.529+00:00","updated":"2022-06-01T21:11:39.529+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}]}
```
## Pagination: Retrieve the next page of pins - ✘ FAILED

### Expectations (2/3 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✘ The next page of pins doesn't contain any of previous pages pins (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T21%3A11%3A39.529Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T21%3A11%3A39.529Z
```
{
  count: 10,
  results: [
    {
      requestid: 'f5d670cf-0323-42f3-9806-73c5534ac806',
      status: 'queued',
      created: '2022-06-01T21:11:39.529+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjthe2dmmbugq',
        _id: 'f5d670cf-0323-42f3-9806-73c5534ac806',
        sourceCid: 'baeaaadbxguwdkmjthe2dmmbugq',
        contentCid: 'baeaaadbxguwdkmjthe2dmmbugq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:39.529+00:00',
        updated: '2022-06-01T21:11:39.529+00:00',
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
      requestid: '9dbe6383-61c5-4bee-b2b5-564d0f87d2e7',
      status: 'queued',
      created: '2022-06-01T21:11:38.017+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjtga2tsnbzgm',
        _id: '9dbe6383-61c5-4bee-b2b5-564d0f87d2e7',
        sourceCid: 'baeaaadbxguwdkmjtga2tsnbzgm',
        contentCid: 'baeaaadbxguwdkmjtga2tsnbzgm',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:38.017+00:00',
        updated: '2022-06-01T21:11:38.017+00:00',
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
      requestid: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
      status: 'queued',
      created: '2022-06-01T21:11:36.841+00:00',
      pin: {
        cid: 'baeaaadbwhawdkmzvge4diobtga',
        _id: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
        sourceCid: 'baeaaadbwhawdkmzvge4diobtga',
        contentCid: 'baeaaadbwhawdkmzvge4diobtga',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:36.841+00:00',
        updated: '2022-06-01T21:11:36.841+00:00',
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
      requestid: 'd6189f01-eef6-4271-9a15-f96e8cc7bd56',
      status: 'queued',
      created: '2022-06-01T21:11:36.687+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjsgqztinbvha',
        _id: 'd6189f01-eef6-4271-9a15-f96e8cc7bd56',
        sourceCid: 'baeaaadbxguwdkmjsgqztinbvha',
        contentCid: 'baeaaadbxguwdkmjsgqztinbvha',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:36.687+00:00',
        updated: '2022-06-01T21:11:36.687+00:00',
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
      requestid: '8bfdde82-2096-4956-a55d-ab17be51f417',
      status: 'queued',
      created: '2022-06-01T21:11:35.232+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjrg43tgnbsga',
        _id: '8bfdde82-2096-4956-a55d-ab17be51f417',
        sourceCid: 'baeaaadbxguwdkmjrg43tgnbsga',
        contentCid: 'baeaaadbxguwdkmjrg43tgnbsga',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:35.232+00:00',
        updated: '2022-06-01T21:11:35.232+00:00',
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
      requestid: 'fd9e40a6-8e2d-4945-8289-6cf298bc772c',
      status: 'queued',
      created: '2022-06-01T21:11:33.579+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjqg44tinrwgu',
        _id: 'fd9e40a6-8e2d-4945-8289-6cf298bc772c',
        sourceCid: 'baeaaadbxguwdkmjqg44tinrwgu',
        contentCid: 'baeaaadbxguwdkmjqg44tinrwgu',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:33.579+00:00',
        updated: '2022-06-01T21:11:33.579+00:00',
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
      requestid: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
      status: 'queued',
      created: '2022-06-01T21:11:29.793+00:00',
      pin: {
        cid: 'baeaaaczwgawdomrvge3tanbq',
        _id: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
        sourceCid: 'baeaaaczwgawdomrvge3tanbq',
        contentCid: 'baeaaaczwgawdomrvge3tanbq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:29.793+00:00',
        updated: '2022-06-01T21:11:29.793+00:00',
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
      requestid: '5e6d3071-1b64-40a2-a8f6-4b68f64a2a53',
      status: 'queued',
      created: '2022-06-01T21:11:27.663+00:00',
      pin: {
        cid: 'baeaaadbxgawdemzrgyydsmjugy',
        _id: '5e6d3071-1b64-40a2-a8f6-4b68f64a2a53',
        sourceCid: 'baeaaadbxgawdemzrgyydsmjugy',
        contentCid: 'baeaaadbxgawdemzrgyydsmjugy',
        authKey: 315318824629964100,
        name: 'aca718c4-79cb-446a-82fe-815802461735',
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:27.663+00:00',
        updated: '2022-06-01T21:11:27.663+00:00',
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
      requestid: '415e4bdc-fa11-4d6f-8ce6-e723beac4d85',
      status: 'queued',
      created: '2022-06-01T21:11:24.622+00:00',
      pin: {
        cid: 'baeaaadbwguwdkobrgmydonjsgq',
        _id: '415e4bdc-fa11-4d6f-8ce6-e723beac4d85',
        sourceCid: 'baeaaadbwguwdkobrgmydonjsgq',
        contentCid: 'baeaaadbwguwdkobrgmydonjsgq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:24.622+00:00',
        updated: '2022-06-01T21:11:24.622+00:00',
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
      requestid: '9eccc31b-56ec-44d3-a75e-e18eb43f825b',
      status: 'queued',
      created: '2022-06-01T21:11:14.401+00:00',
      pin: {
        cid: 'baeaaadbvguwdkobqhaydknbrgm',
        _id: '9eccc31b-56ec-44d3-a75e-e18eb43f825b',
        sourceCid: 'baeaaadbvguwdkobqhaydknbrgm',
        contentCid: 'baeaaadbvguwdkobqhaydknbrgm',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:14.401+00:00',
        updated: '2022-06-01T21:11:14.401+00:00',
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
  count: 10,
  results: Set(10) {
    {
      requestid: 'f5d670cf-0323-42f3-9806-73c5534ac806',
      status: 'queued',
      created: 2022-06-01T21:11:39.529Z,
      pin: {
        cid: 'baeaaadbxguwdkmjthe2dmmbugq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '9dbe6383-61c5-4bee-b2b5-564d0f87d2e7',
      status: 'queued',
      created: 2022-06-01T21:11:38.017Z,
      pin: {
        cid: 'baeaaadbxguwdkmjtga2tsnbzgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
      status: 'queued',
      created: 2022-06-01T21:11:36.841Z,
      pin: {
        cid: 'baeaaadbwhawdkmzvge4diobtga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'd6189f01-eef6-4271-9a15-f96e8cc7bd56',
      status: 'queued',
      created: 2022-06-01T21:11:36.687Z,
      pin: {
        cid: 'baeaaadbxguwdkmjsgqztinbvha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '8bfdde82-2096-4956-a55d-ab17be51f417',
      status: 'queued',
      created: 2022-06-01T21:11:35.232Z,
      pin: {
        cid: 'baeaaadbxguwdkmjrg43tgnbsga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'fd9e40a6-8e2d-4945-8289-6cf298bc772c',
      status: 'queued',
      created: 2022-06-01T21:11:33.579Z,
      pin: {
        cid: 'baeaaadbxguwdkmjqg44tinrwgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
      status: 'queued',
      created: 2022-06-01T21:11:29.793Z,
      pin: {
        cid: 'baeaaaczwgawdomrvge3tanbq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '5e6d3071-1b64-40a2-a8f6-4b68f64a2a53',
      status: 'queued',
      created: 2022-06-01T21:11:27.663Z,
      pin: {
        cid: 'baeaaadbxgawdemzrgyydsmjugy',
        name: 'aca718c4-79cb-446a-82fe-815802461735',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '415e4bdc-fa11-4d6f-8ce6-e723beac4d85',
      status: 'queued',
      created: 2022-06-01T21:11:24.622Z,
      pin: {
        cid: 'baeaaadbwguwdkobrgmydonjsgq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '9eccc31b-56ec-44d3-a75e-e18eb43f825b',
      status: 'queued',
      created: 2022-06-01T21:11:14.401Z,
      pin: {
        cid: 'baeaaadbvguwdkobqhaydknbrgm',
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
  "cf-ray": "714af19e7be39e68-SJC",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"f5d670cf-0323-42f3-9806-73c5534ac806","status":"queued","created":"2022-06-01T21:11:39.529+00:00","pin":{"cid":"baeaaadbxguwdkmjthe2dmmbugq","_id":"f5d670cf-0323-42f3-9806-73c5534ac806","sourceCid":"baeaaadbxguwdkmjthe2dmmbugq","contentCid":"baeaaadbxguwdkmjthe2dmmbugq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:39.529+00:00","updated":"2022-06-01T21:11:39.529+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"9dbe6383-61c5-4bee-b2b5-564d0f87d2e7","status":"queued","created":"2022-06-01T21:11:38.017+00:00","pin":{"cid":"baeaaadbxguwdkmjtga2tsnbzgm","_id":"9dbe6383-61c5-4bee-b2b5-564d0f87d2e7","sourceCid":"baeaaadbxguwdkmjtga2tsnbzgm","contentCid":"baeaaadbxguwdkmjtga2tsnbzgm","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:38.017+00:00","updated":"2022-06-01T21:11:38.017+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"0133b511-4780-4816-b0e7-5cf1a6b520d6","status":"queued","created":"2022-06-01T21:11:36.841+00:00","pin":{"cid":"baeaaadbwhawdkmzvge4diobtga","_id":"0133b511-4780-4816-b0e7-5cf1a6b520d6","sourceCid":"baeaaadbwhawdkmzvge4diobtga","contentCid":"baeaaadbwhawdkmzvge4diobtga","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:36.841+00:00","updated":"2022-06-01T21:11:36.841+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"d6189f01-eef6-4271-9a15-f96e8cc7bd56","status":"queued","created":"2022-06-01T21:11:36.687+00:00","pin":{"cid":"baeaaadbxguwdkmjsgqztinbvha","_id":"d6189f01-eef6-4271-9a15-f96e8cc7bd56","sourceCid":"baeaaadbxguwdkmjsgqztinbvha","contentCid":"baeaaadbxguwdkmjsgqztinbvha","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:36.687+00:00","updated":"2022-06-01T21:11:36.687+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"8bfdde82-2096-4956-a55d-ab17be51f417","status":"queued","created":"2022-06-01T21:11:35.232+00:00","pin":{"cid":"baeaaadbxguwdkmjrg43tgnbsga","_id":"8bfdde82-2096-4956-a55d-ab17be51f417","sourceCid":"baeaaadbxguwdkmjrg43tgnbsga","contentCid":"baeaaadbxguwdkmjrg43tgnbsga","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:35.232+00:00","updated":"2022-06-01T21:11:35.232+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"fd9e40a6-8e2d-4945-8289-6cf298bc772c","status":"queued","created":"2022-06-01T21:11:33.579+00:00","pin":{"cid":"baeaaadbxguwdkmjqg44tinrwgu","_id":"fd9e40a6-8e2d-4945-8289-6cf298bc772c","sourceCid":"baeaaadbxguwdkmjqg44tinrwgu","contentCid":"baeaaadbxguwdkmjqg44tinrwgu","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:33.579+00:00","updated":"2022-06-01T21:11:33.579+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"d32d7d53-12e3-41e1-9135-05e64d8fcf84","status":"queued","created":"2022-06-01T21:11:29.793+00:00","pin":{"cid":"baeaaaczwgawdomrvge3tanbq","_id":"d32d7d53-12e3-41e1-9135-05e64d8fcf84","sourceCid":"baeaaaczwgawdomrvge3tanbq","contentCid":"baeaaaczwgawdomrvge3tanbq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:29.793+00:00","updated":"2022-06-01T21:11:29.793+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"5e6d3071-1b64-40a2-a8f6-4b68f64a2a53","status":"queued","created":"2022-06-01T21:11:27.663+00:00","pin":{"cid":"baeaaadbxgawdemzrgyydsmjugy","_id":"5e6d3071-1b64-40a2-a8f6-4b68f64a2a53","sourceCid":"baeaaadbxgawdemzrgyydsmjugy","contentCid":"baeaaadbxgawdemzrgyydsmjugy","authKey":315318824629964100,"name":"aca718c4-79cb-446a-82fe-815802461735","meta":null,"deleted":null,"created":"2022-06-01T21:11:27.663+00:00","updated":"2022-06-01T21:11:27.663+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"415e4bdc-fa11-4d6f-8ce6-e723beac4d85","status":"queued","created":"2022-06-01T21:11:24.622+00:00","pin":{"cid":"baeaaadbwguwdkobrgmydonjsgq","_id":"415e4bdc-fa11-4d6f-8ce6-e723beac4d85","sourceCid":"baeaaadbwguwdkobrgmydonjsgq","contentCid":"baeaaadbwguwdkobrgmydonjsgq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:24.622+00:00","updated":"2022-06-01T21:11:24.622+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"9eccc31b-56ec-44d3-a75e-e18eb43f825b","status":"queued","created":"2022-06-01T21:11:14.401+00:00","pin":{"cid":"baeaaadbvguwdkobqhaydknbrgm","_id":"9eccc31b-56ec-44d3-a75e-e18eb43f825b","sourceCid":"baeaaadbvguwdkobqhaydknbrgm","contentCid":"baeaaadbvguwdkobqhaydknbrgm","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:14.401+00:00","updated":"2022-06-01T21:11:14.401+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}]}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ✘ FAILED

### Expectations (15/16 successful)

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
  count: 12,
  results: [
    {
      requestid: 'd5c5ac11-1914-4697-9aaa-879058dc4eda',
      status: 'queued',
      created: '2022-06-01T21:11:41.142+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjuhe4taobqgm',
        _id: 'd5c5ac11-1914-4697-9aaa-879058dc4eda',
        sourceCid: 'baeaaadbxguwdkmjuhe4taobqgm',
        contentCid: 'baeaaadbxguwdkmjuhe4taobqgm',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:41.142+00:00',
        updated: '2022-06-01T21:11:41.142+00:00',
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
      requestid: 'e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7',
      status: 'queued',
      created: '2022-06-01T21:11:39.664+00:00',
      pin: {
        cid: 'baeaaadbxgewdgnzyg4ztqmbugy',
        _id: 'e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7',
        sourceCid: 'baeaaadbxgewdgnzyg4ztqmbugy',
        contentCid: 'baeaaadbxgewdgnzyg4ztqmbugy',
        authKey: 315318824629964100,
        name: 'cf500356-f73c-47a1-9f16-e9277927b05d',
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:39.664+00:00',
        updated: '2022-06-01T21:11:39.664+00:00',
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
      requestid: 'f5d670cf-0323-42f3-9806-73c5534ac806',
      status: 'queued',
      created: '2022-06-01T21:11:39.529+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjthe2dmmbugq',
        _id: 'f5d670cf-0323-42f3-9806-73c5534ac806',
        sourceCid: 'baeaaadbxguwdkmjthe2dmmbugq',
        contentCid: 'baeaaadbxguwdkmjthe2dmmbugq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:39.529+00:00',
        updated: '2022-06-01T21:11:39.529+00:00',
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
      requestid: '9dbe6383-61c5-4bee-b2b5-564d0f87d2e7',
      status: 'queued',
      created: '2022-06-01T21:11:38.017+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjtga2tsnbzgm',
        _id: '9dbe6383-61c5-4bee-b2b5-564d0f87d2e7',
        sourceCid: 'baeaaadbxguwdkmjtga2tsnbzgm',
        contentCid: 'baeaaadbxguwdkmjtga2tsnbzgm',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:38.017+00:00',
        updated: '2022-06-01T21:11:38.017+00:00',
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
      requestid: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
      status: 'queued',
      created: '2022-06-01T21:11:36.841+00:00',
      pin: {
        cid: 'baeaaadbwhawdkmzvge4diobtga',
        _id: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
        sourceCid: 'baeaaadbwhawdkmzvge4diobtga',
        contentCid: 'baeaaadbwhawdkmzvge4diobtga',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:36.841+00:00',
        updated: '2022-06-01T21:11:36.841+00:00',
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
      requestid: 'd6189f01-eef6-4271-9a15-f96e8cc7bd56',
      status: 'queued',
      created: '2022-06-01T21:11:36.687+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjsgqztinbvha',
        _id: 'd6189f01-eef6-4271-9a15-f96e8cc7bd56',
        sourceCid: 'baeaaadbxguwdkmjsgqztinbvha',
        contentCid: 'baeaaadbxguwdkmjsgqztinbvha',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:36.687+00:00',
        updated: '2022-06-01T21:11:36.687+00:00',
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
      requestid: '8bfdde82-2096-4956-a55d-ab17be51f417',
      status: 'queued',
      created: '2022-06-01T21:11:35.232+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjrg43tgnbsga',
        _id: '8bfdde82-2096-4956-a55d-ab17be51f417',
        sourceCid: 'baeaaadbxguwdkmjrg43tgnbsga',
        contentCid: 'baeaaadbxguwdkmjrg43tgnbsga',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:35.232+00:00',
        updated: '2022-06-01T21:11:35.232+00:00',
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
      requestid: 'fd9e40a6-8e2d-4945-8289-6cf298bc772c',
      status: 'queued',
      created: '2022-06-01T21:11:33.579+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjqg44tinrwgu',
        _id: 'fd9e40a6-8e2d-4945-8289-6cf298bc772c',
        sourceCid: 'baeaaadbxguwdkmjqg44tinrwgu',
        contentCid: 'baeaaadbxguwdkmjqg44tinrwgu',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:33.579+00:00',
        updated: '2022-06-01T21:11:33.579+00:00',
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
      requestid: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
      status: 'queued',
      created: '2022-06-01T21:11:29.793+00:00',
      pin: {
        cid: 'baeaaaczwgawdomrvge3tanbq',
        _id: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
        sourceCid: 'baeaaaczwgawdomrvge3tanbq',
        contentCid: 'baeaaaczwgawdomrvge3tanbq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:29.793+00:00',
        updated: '2022-06-01T21:11:29.793+00:00',
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
      requestid: '5e6d3071-1b64-40a2-a8f6-4b68f64a2a53',
      status: 'queued',
      created: '2022-06-01T21:11:27.663+00:00',
      pin: {
        cid: 'baeaaadbxgawdemzrgyydsmjugy',
        _id: '5e6d3071-1b64-40a2-a8f6-4b68f64a2a53',
        sourceCid: 'baeaaadbxgawdemzrgyydsmjugy',
        contentCid: 'baeaaadbxgawdemzrgyydsmjugy',
        authKey: 315318824629964100,
        name: 'aca718c4-79cb-446a-82fe-815802461735',
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:27.663+00:00',
        updated: '2022-06-01T21:11:27.663+00:00',
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
  count: 12,
  results: Set(10) {
    {
      requestid: 'd5c5ac11-1914-4697-9aaa-879058dc4eda',
      status: 'queued',
      created: 2022-06-01T21:11:41.142Z,
      pin: {
        cid: 'baeaaadbxguwdkmjuhe4taobqgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7',
      status: 'queued',
      created: 2022-06-01T21:11:39.664Z,
      pin: {
        cid: 'baeaaadbxgewdgnzyg4ztqmbugy',
        name: 'cf500356-f73c-47a1-9f16-e9277927b05d',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'f5d670cf-0323-42f3-9806-73c5534ac806',
      status: 'queued',
      created: 2022-06-01T21:11:39.529Z,
      pin: {
        cid: 'baeaaadbxguwdkmjthe2dmmbugq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '9dbe6383-61c5-4bee-b2b5-564d0f87d2e7',
      status: 'queued',
      created: 2022-06-01T21:11:38.017Z,
      pin: {
        cid: 'baeaaadbxguwdkmjtga2tsnbzgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
      status: 'queued',
      created: 2022-06-01T21:11:36.841Z,
      pin: {
        cid: 'baeaaadbwhawdkmzvge4diobtga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'd6189f01-eef6-4271-9a15-f96e8cc7bd56',
      status: 'queued',
      created: 2022-06-01T21:11:36.687Z,
      pin: {
        cid: 'baeaaadbxguwdkmjsgqztinbvha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '8bfdde82-2096-4956-a55d-ab17be51f417',
      status: 'queued',
      created: 2022-06-01T21:11:35.232Z,
      pin: {
        cid: 'baeaaadbxguwdkmjrg43tgnbsga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'fd9e40a6-8e2d-4945-8289-6cf298bc772c',
      status: 'queued',
      created: 2022-06-01T21:11:33.579Z,
      pin: {
        cid: 'baeaaadbxguwdkmjqg44tinrwgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
      status: 'queued',
      created: 2022-06-01T21:11:29.793Z,
      pin: {
        cid: 'baeaaaczwgawdomrvge3tanbq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '5e6d3071-1b64-40a2-a8f6-4b68f64a2a53',
      status: 'queued',
      created: 2022-06-01T21:11:27.663Z,
      pin: {
        cid: 'baeaaadbxgawdemzrgyydsmjugy',
        name: 'aca718c4-79cb-446a-82fe-815802461735',
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
  "cf-ray": "714af17e5f44963f-SJC",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:44 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":12,"results":[{"requestid":"d5c5ac11-1914-4697-9aaa-879058dc4eda","status":"queued","created":"2022-06-01T21:11:41.142+00:00","pin":{"cid":"baeaaadbxguwdkmjuhe4taobqgm","_id":"d5c5ac11-1914-4697-9aaa-879058dc4eda","sourceCid":"baeaaadbxguwdkmjuhe4taobqgm","contentCid":"baeaaadbxguwdkmjuhe4taobqgm","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:41.142+00:00","updated":"2022-06-01T21:11:41.142+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7","status":"queued","created":"2022-06-01T21:11:39.664+00:00","pin":{"cid":"baeaaadbxgewdgnzyg4ztqmbugy","_id":"e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7","sourceCid":"baeaaadbxgewdgnzyg4ztqmbugy","contentCid":"baeaaadbxgewdgnzyg4ztqmbugy","authKey":315318824629964100,"name":"cf500356-f73c-47a1-9f16-e9277927b05d","meta":null,"deleted":null,"created":"2022-06-01T21:11:39.664+00:00","updated":"2022-06-01T21:11:39.664+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"f5d670cf-0323-42f3-9806-73c5534ac806","status":"queued","created":"2022-06-01T21:11:39.529+00:00","pin":{"cid":"baeaaadbxguwdkmjthe2dmmbugq","_id":"f5d670cf-0323-42f3-9806-73c5534ac806","sourceCid":"baeaaadbxguwdkmjthe2dmmbugq","contentCid":"baeaaadbxguwdkmjthe2dmmbugq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:39.529+00:00","updated":"2022-06-01T21:11:39.529+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"9dbe6383-61c5-4bee-b2b5-564d0f87d2e7","status":"queued","created":"2022-06-01T21:11:38.017+00:00","pin":{"cid":"baeaaadbxguwdkmjtga2tsnbzgm","_id":"9dbe6383-61c5-4bee-b2b5-564d0f87d2e7","sourceCid":"baeaaadbxguwdkmjtga2tsnbzgm","contentCid":"baeaaadbxguwdkmjtga2tsnbzgm","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:38.017+00:00","updated":"2022-06-01T21:11:38.017+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"0133b511-4780-4816-b0e7-5cf1a6b520d6","status":"queued","created":"2022-06-01T21:11:36.841+00:00","pin":{"cid":"baeaaadbwhawdkmzvge4diobtga","_id":"0133b511-4780-4816-b0e7-5cf1a6b520d6","sourceCid":"baeaaadbwhawdkmzvge4diobtga","contentCid":"baeaaadbwhawdkmzvge4diobtga","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:36.841+00:00","updated":"2022-06-01T21:11:36.841+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"d6189f01-eef6-4271-9a15-f96e8cc7bd56","status":"queued","created":"2022-06-01T21:11:36.687+00:00","pin":{"cid":"baeaaadbxguwdkmjsgqztinbvha","_id":"d6189f01-eef6-4271-9a15-f96e8cc7bd56","sourceCid":"baeaaadbxguwdkmjsgqztinbvha","contentCid":"baeaaadbxguwdkmjsgqztinbvha","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:36.687+00:00","updated":"2022-06-01T21:11:36.687+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"8bfdde82-2096-4956-a55d-ab17be51f417","status":"queued","created":"2022-06-01T21:11:35.232+00:00","pin":{"cid":"baeaaadbxguwdkmjrg43tgnbsga","_id":"8bfdde82-2096-4956-a55d-ab17be51f417","sourceCid":"baeaaadbxguwdkmjrg43tgnbsga","contentCid":"baeaaadbxguwdkmjrg43tgnbsga","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:35.232+00:00","updated":"2022-06-01T21:11:35.232+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"fd9e40a6-8e2d-4945-8289-6cf298bc772c","status":"queued","created":"2022-06-01T21:11:33.579+00:00","pin":{"cid":"baeaaadbxguwdkmjqg44tinrwgu","_id":"fd9e40a6-8e2d-4945-8289-6cf298bc772c","sourceCid":"baeaaadbxguwdkmjqg44tinrwgu","contentCid":"baeaaadbxguwdkmjqg44tinrwgu","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:33.579+00:00","updated":"2022-06-01T21:11:33.579+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"d32d7d53-12e3-41e1-9135-05e64d8fcf84","status":"queued","created":"2022-06-01T21:11:29.793+00:00","pin":{"cid":"baeaaaczwgawdomrvge3tanbq","_id":"d32d7d53-12e3-41e1-9135-05e64d8fcf84","sourceCid":"baeaaaczwgawdomrvge3tanbq","contentCid":"baeaaaczwgawdomrvge3tanbq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:29.793+00:00","updated":"2022-06-01T21:11:29.793+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"5e6d3071-1b64-40a2-a8f6-4b68f64a2a53","status":"queued","created":"2022-06-01T21:11:27.663+00:00","pin":{"cid":"baeaaadbxgawdemzrgyydsmjugy","_id":"5e6d3071-1b64-40a2-a8f6-4b68f64a2a53","sourceCid":"baeaaadbxgawdemzrgyydsmjugy","contentCid":"baeaaadbxgawdemzrgyydsmjugy","authKey":315318824629964100,"name":"aca718c4-79cb-446a-82fe-815802461735","meta":null,"deleted":null,"created":"2022-06-01T21:11:27.663+00:00","updated":"2022-06-01T21:11:27.663+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}]}
```
## Can delete pin with requestid '05bc562f-a4f3-45d3-b256-e070ac0ec726' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/05bc562f-a4f3-45d3-b256-e070ac0ec726

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/05bc562f-a4f3-45d3-b256-e070ac0ec726
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
  "cf-ray": "714af1adb9b8963f-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:51 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'f4a6f2c1-18af-4783-bc36-025b09563490' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/f4a6f2c1-18af-4783-bc36-025b09563490

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/f4a6f2c1-18af-4783-bc36-025b09563490
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
  "cf-ray": "714af1b3ac4197cd-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:52 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '289db601-4b4d-40ae-9891-9d680cebb5b0' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/289db601-4b4d-40ae-9891-9d680cebb5b0

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/289db601-4b4d-40ae-9891-9d680cebb5b0
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
  "cf-ray": "714af1ba0ca69855-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:52 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '4a1a641d-9cb7-4f18-a591-2801ae31b175' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/4a1a641d-9cb7-4f18-a591-2801ae31b175

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/4a1a641d-9cb7-4f18-a591-2801ae31b175
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
  "cf-ray": "714af1c02f516450-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:54 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'c47e74f8-a383-49fd-ac28-d4ee8535dc39' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/c47e74f8-a383-49fd-ac28-d4ee8535dc39

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/c47e74f8-a383-49fd-ac28-d4ee8535dc39
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
  "cf-ray": "714af1c7290a963f-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:55 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '5138faac-b345-4864-ac2a-a7e716f2fff8' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/5138faac-b345-4864-ac2a-a7e716f2fff8

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/5138faac-b345-4864-ac2a-a7e716f2fff8
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
  "cf-ray": "714af1ccabef96de-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:56 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '7c33f4b1-a6be-4c18-9096-b74945200800' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/7c33f4b1-a6be-4c18-9096-b74945200800

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/7c33f4b1-a6be-4c18-9096-b74945200800
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
  "cf-ray": "714af1d2ecb6983d-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:57 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '67c29275-ee85-42c4-8e96-43c73edbfe7f' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/67c29275-ee85-42c4-8e96-43c73edbfe7f

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/67c29275-ee85-42c4-8e96-43c73edbfe7f
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
  "cf-ray": "714af1d93a00963f-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:58 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'd5c5ac11-1914-4697-9aaa-879058dc4eda' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/d5c5ac11-1914-4697-9aaa-879058dc4eda

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/d5c5ac11-1914-4697-9aaa-879058dc4eda
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
  "cf-ray": "714af1df68d89663-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:59 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7
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
  "cf-ray": "714af1e5ab099e6a-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:59 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'f5d670cf-0323-42f3-9806-73c5534ac806' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/f5d670cf-0323-42f3-9806-73c5534ac806

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/f5d670cf-0323-42f3-9806-73c5534ac806
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
  "cf-ray": "714af1f1cafb963f-SJC",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:12:01 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_RESOURCE_NOT_FOUND","details":"Requested data was not found."}
```
## Can delete pin with requestid '9dbe6383-61c5-4bee-b2b5-564d0f87d2e7' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/9dbe6383-61c5-4bee-b2b5-564d0f87d2e7

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/9dbe6383-61c5-4bee-b2b5-564d0f87d2e7
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
  "cf-ray": "714af1f7fabc97ed-SJC",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:12:03 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_RESOURCE_NOT_FOUND","details":"Requested data was not found."}
```
## Can delete pin with requestid '0133b511-4780-4816-b0e7-5cf1a6b520d6' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/0133b511-4780-4816-b0e7-5cf1a6b520d6

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/0133b511-4780-4816-b0e7-5cf1a6b520d6
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
  "cf-ray": "714af1fe3bee981c-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:12:04 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'd6189f01-eef6-4271-9a15-f96e8cc7bd56' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/d6189f01-eef6-4271-9a15-f96e8cc7bd56

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/d6189f01-eef6-4271-9a15-f96e8cc7bd56
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
  "cf-ray": "714af2047ca89e58-SJC",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:12:05 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_RESOURCE_NOT_FOUND","details":"Requested data was not found."}
```
## Can delete pin with requestid '8bfdde82-2096-4956-a55d-ab17be51f417' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/8bfdde82-2096-4956-a55d-ab17be51f417

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/8bfdde82-2096-4956-a55d-ab17be51f417
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
  "cf-ray": "714af20abc689663-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:12:05 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'fd9e40a6-8e2d-4945-8289-6cf298bc772c' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/fd9e40a6-8e2d-4945-8289-6cf298bc772c

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/fd9e40a6-8e2d-4945-8289-6cf298bc772c
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
  "cf-ray": "714af210fede967c-SJC",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:12:07 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_RESOURCE_NOT_FOUND","details":"Requested data was not found."}
```
## Can delete pin with requestid 'd32d7d53-12e3-41e1-9135-05e64d8fcf84' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/d32d7d53-12e3-41e1-9135-05e64d8fcf84

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/d32d7d53-12e3-41e1-9135-05e64d8fcf84
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
  "cf-ray": "714af2173eb9987f-SJC",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:12:07 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_RESOURCE_NOT_FOUND","details":"Requested data was not found."}
```
## Can delete pin with requestid '5e6d3071-1b64-40a2-a8f6-4b68f64a2a53' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/5e6d3071-1b64-40a2-a8f6-4b68f64a2a53

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/5e6d3071-1b64-40a2-a8f6-4b68f64a2a53
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
  "cf-ray": "714af21d7c439822-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:12:08 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '415e4bdc-fa11-4d6f-8ce6-e723beac4d85' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/415e4bdc-fa11-4d6f-8ce6-e723beac4d85

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/415e4bdc-fa11-4d6f-8ce6-e723beac4d85
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
  "cf-ray": "714af223baaf97ed-SJC",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:12:09 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_RESOURCE_NOT_FOUND","details":"Requested data was not found."}
```
## Can delete pin with requestid '9eccc31b-56ec-44d3-a75e-e18eb43f825b' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/9eccc31b-56ec-44d3-a75e-e18eb43f825b

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/9eccc31b-56ec-44d3-a75e-e18eb43f825b
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
  "cf-ray": "714af22a0b38981c-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:12:10 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Get all Pins created before 'Wed Jun 01 2022 21:11:39 GMT+0000 (Coordinated Universal Time)' - ✘ FAILED

### Expectations (8/20 successful)

  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)
  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)
  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)


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

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T21%3A11%3A39.664Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T21%3A11%3A39.664Z
```
{
  count: 10,
  results: [
    {
      requestid: 'f5d670cf-0323-42f3-9806-73c5534ac806',
      status: 'queued',
      created: '2022-06-01T21:11:39.529+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjthe2dmmbugq',
        _id: 'f5d670cf-0323-42f3-9806-73c5534ac806',
        sourceCid: 'baeaaadbxguwdkmjthe2dmmbugq',
        contentCid: 'baeaaadbxguwdkmjthe2dmmbugq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:39.529+00:00',
        updated: '2022-06-01T21:11:39.529+00:00',
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
      requestid: '9dbe6383-61c5-4bee-b2b5-564d0f87d2e7',
      status: 'queued',
      created: '2022-06-01T21:11:38.017+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjtga2tsnbzgm',
        _id: '9dbe6383-61c5-4bee-b2b5-564d0f87d2e7',
        sourceCid: 'baeaaadbxguwdkmjtga2tsnbzgm',
        contentCid: 'baeaaadbxguwdkmjtga2tsnbzgm',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:38.017+00:00',
        updated: '2022-06-01T21:11:38.017+00:00',
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
      requestid: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
      status: 'queued',
      created: '2022-06-01T21:11:36.841+00:00',
      pin: {
        cid: 'baeaaadbwhawdkmzvge4diobtga',
        _id: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
        sourceCid: 'baeaaadbwhawdkmzvge4diobtga',
        contentCid: 'baeaaadbwhawdkmzvge4diobtga',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:36.841+00:00',
        updated: '2022-06-01T21:11:36.841+00:00',
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
      requestid: 'd6189f01-eef6-4271-9a15-f96e8cc7bd56',
      status: 'queued',
      created: '2022-06-01T21:11:36.687+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjsgqztinbvha',
        _id: 'd6189f01-eef6-4271-9a15-f96e8cc7bd56',
        sourceCid: 'baeaaadbxguwdkmjsgqztinbvha',
        contentCid: 'baeaaadbxguwdkmjsgqztinbvha',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:36.687+00:00',
        updated: '2022-06-01T21:11:36.687+00:00',
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
      requestid: '8bfdde82-2096-4956-a55d-ab17be51f417',
      status: 'queued',
      created: '2022-06-01T21:11:35.232+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjrg43tgnbsga',
        _id: '8bfdde82-2096-4956-a55d-ab17be51f417',
        sourceCid: 'baeaaadbxguwdkmjrg43tgnbsga',
        contentCid: 'baeaaadbxguwdkmjrg43tgnbsga',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:35.232+00:00',
        updated: '2022-06-01T21:11:35.232+00:00',
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
      requestid: 'fd9e40a6-8e2d-4945-8289-6cf298bc772c',
      status: 'queued',
      created: '2022-06-01T21:11:33.579+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjqg44tinrwgu',
        _id: 'fd9e40a6-8e2d-4945-8289-6cf298bc772c',
        sourceCid: 'baeaaadbxguwdkmjqg44tinrwgu',
        contentCid: 'baeaaadbxguwdkmjqg44tinrwgu',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:33.579+00:00',
        updated: '2022-06-01T21:11:33.579+00:00',
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
      requestid: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
      status: 'queued',
      created: '2022-06-01T21:11:29.793+00:00',
      pin: {
        cid: 'baeaaaczwgawdomrvge3tanbq',
        _id: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
        sourceCid: 'baeaaaczwgawdomrvge3tanbq',
        contentCid: 'baeaaaczwgawdomrvge3tanbq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:29.793+00:00',
        updated: '2022-06-01T21:11:29.793+00:00',
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
      requestid: '5e6d3071-1b64-40a2-a8f6-4b68f64a2a53',
      status: 'queued',
      created: '2022-06-01T21:11:27.663+00:00',
      pin: {
        cid: 'baeaaadbxgawdemzrgyydsmjugy',
        _id: '5e6d3071-1b64-40a2-a8f6-4b68f64a2a53',
        sourceCid: 'baeaaadbxgawdemzrgyydsmjugy',
        contentCid: 'baeaaadbxgawdemzrgyydsmjugy',
        authKey: 315318824629964100,
        name: 'aca718c4-79cb-446a-82fe-815802461735',
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:27.663+00:00',
        updated: '2022-06-01T21:11:27.663+00:00',
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
      requestid: '415e4bdc-fa11-4d6f-8ce6-e723beac4d85',
      status: 'queued',
      created: '2022-06-01T21:11:24.622+00:00',
      pin: {
        cid: 'baeaaadbwguwdkobrgmydonjsgq',
        _id: '415e4bdc-fa11-4d6f-8ce6-e723beac4d85',
        sourceCid: 'baeaaadbwguwdkobrgmydonjsgq',
        contentCid: 'baeaaadbwguwdkobrgmydonjsgq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:24.622+00:00',
        updated: '2022-06-01T21:11:24.622+00:00',
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
      requestid: '9eccc31b-56ec-44d3-a75e-e18eb43f825b',
      status: 'queued',
      created: '2022-06-01T21:11:14.401+00:00',
      pin: {
        cid: 'baeaaadbvguwdkobqhaydknbrgm',
        _id: '9eccc31b-56ec-44d3-a75e-e18eb43f825b',
        sourceCid: 'baeaaadbvguwdkobqhaydknbrgm',
        contentCid: 'baeaaadbvguwdkobqhaydknbrgm',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:14.401+00:00',
        updated: '2022-06-01T21:11:14.401+00:00',
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
  count: 10,
  results: Set(10) {
    {
      requestid: 'f5d670cf-0323-42f3-9806-73c5534ac806',
      status: 'queued',
      created: 2022-06-01T21:11:39.529Z,
      pin: {
        cid: 'baeaaadbxguwdkmjthe2dmmbugq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '9dbe6383-61c5-4bee-b2b5-564d0f87d2e7',
      status: 'queued',
      created: 2022-06-01T21:11:38.017Z,
      pin: {
        cid: 'baeaaadbxguwdkmjtga2tsnbzgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '0133b511-4780-4816-b0e7-5cf1a6b520d6',
      status: 'queued',
      created: 2022-06-01T21:11:36.841Z,
      pin: {
        cid: 'baeaaadbwhawdkmzvge4diobtga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'd6189f01-eef6-4271-9a15-f96e8cc7bd56',
      status: 'queued',
      created: 2022-06-01T21:11:36.687Z,
      pin: {
        cid: 'baeaaadbxguwdkmjsgqztinbvha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '8bfdde82-2096-4956-a55d-ab17be51f417',
      status: 'queued',
      created: 2022-06-01T21:11:35.232Z,
      pin: {
        cid: 'baeaaadbxguwdkmjrg43tgnbsga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'fd9e40a6-8e2d-4945-8289-6cf298bc772c',
      status: 'queued',
      created: 2022-06-01T21:11:33.579Z,
      pin: {
        cid: 'baeaaadbxguwdkmjqg44tinrwgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'd32d7d53-12e3-41e1-9135-05e64d8fcf84',
      status: 'queued',
      created: 2022-06-01T21:11:29.793Z,
      pin: {
        cid: 'baeaaaczwgawdomrvge3tanbq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '5e6d3071-1b64-40a2-a8f6-4b68f64a2a53',
      status: 'queued',
      created: 2022-06-01T21:11:27.663Z,
      pin: {
        cid: 'baeaaadbxgawdemzrgyydsmjugy',
        name: 'aca718c4-79cb-446a-82fe-815802461735',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '415e4bdc-fa11-4d6f-8ce6-e723beac4d85',
      status: 'queued',
      created: 2022-06-01T21:11:24.622Z,
      pin: {
        cid: 'baeaaadbwguwdkobrgmydonjsgq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '9eccc31b-56ec-44d3-a75e-e18eb43f825b',
      status: 'queued',
      created: 2022-06-01T21:11:14.401Z,
      pin: {
        cid: 'baeaaadbvguwdkobqhaydknbrgm',
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
  "cf-ray": "714af1ebeee0987f-SJC",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:12:01 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"f5d670cf-0323-42f3-9806-73c5534ac806","status":"queued","created":"2022-06-01T21:11:39.529+00:00","pin":{"cid":"baeaaadbxguwdkmjthe2dmmbugq","_id":"f5d670cf-0323-42f3-9806-73c5534ac806","sourceCid":"baeaaadbxguwdkmjthe2dmmbugq","contentCid":"baeaaadbxguwdkmjthe2dmmbugq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:39.529+00:00","updated":"2022-06-01T21:11:39.529+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.529+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"9dbe6383-61c5-4bee-b2b5-564d0f87d2e7","status":"queued","created":"2022-06-01T21:11:38.017+00:00","pin":{"cid":"baeaaadbxguwdkmjtga2tsnbzgm","_id":"9dbe6383-61c5-4bee-b2b5-564d0f87d2e7","sourceCid":"baeaaadbxguwdkmjtga2tsnbzgm","contentCid":"baeaaadbxguwdkmjtga2tsnbzgm","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:38.017+00:00","updated":"2022-06-01T21:11:38.017+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:38.017+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"0133b511-4780-4816-b0e7-5cf1a6b520d6","status":"queued","created":"2022-06-01T21:11:36.841+00:00","pin":{"cid":"baeaaadbwhawdkmzvge4diobtga","_id":"0133b511-4780-4816-b0e7-5cf1a6b520d6","sourceCid":"baeaaadbwhawdkmzvge4diobtga","contentCid":"baeaaadbwhawdkmzvge4diobtga","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:36.841+00:00","updated":"2022-06-01T21:11:36.841+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.841+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"d6189f01-eef6-4271-9a15-f96e8cc7bd56","status":"queued","created":"2022-06-01T21:11:36.687+00:00","pin":{"cid":"baeaaadbxguwdkmjsgqztinbvha","_id":"d6189f01-eef6-4271-9a15-f96e8cc7bd56","sourceCid":"baeaaadbxguwdkmjsgqztinbvha","contentCid":"baeaaadbxguwdkmjsgqztinbvha","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:36.687+00:00","updated":"2022-06-01T21:11:36.687+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:36.687+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"8bfdde82-2096-4956-a55d-ab17be51f417","status":"queued","created":"2022-06-01T21:11:35.232+00:00","pin":{"cid":"baeaaadbxguwdkmjrg43tgnbsga","_id":"8bfdde82-2096-4956-a55d-ab17be51f417","sourceCid":"baeaaadbxguwdkmjrg43tgnbsga","contentCid":"baeaaadbxguwdkmjrg43tgnbsga","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:35.232+00:00","updated":"2022-06-01T21:11:35.232+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:35.232+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"fd9e40a6-8e2d-4945-8289-6cf298bc772c","status":"queued","created":"2022-06-01T21:11:33.579+00:00","pin":{"cid":"baeaaadbxguwdkmjqg44tinrwgu","_id":"fd9e40a6-8e2d-4945-8289-6cf298bc772c","sourceCid":"baeaaadbxguwdkmjqg44tinrwgu","contentCid":"baeaaadbxguwdkmjqg44tinrwgu","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:33.579+00:00","updated":"2022-06-01T21:11:33.579+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:33.579+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"d32d7d53-12e3-41e1-9135-05e64d8fcf84","status":"queued","created":"2022-06-01T21:11:29.793+00:00","pin":{"cid":"baeaaaczwgawdomrvge3tanbq","_id":"d32d7d53-12e3-41e1-9135-05e64d8fcf84","sourceCid":"baeaaaczwgawdomrvge3tanbq","contentCid":"baeaaaczwgawdomrvge3tanbq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:29.793+00:00","updated":"2022-06-01T21:11:29.793+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:29.793+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"5e6d3071-1b64-40a2-a8f6-4b68f64a2a53","status":"queued","created":"2022-06-01T21:11:27.663+00:00","pin":{"cid":"baeaaadbxgawdemzrgyydsmjugy","_id":"5e6d3071-1b64-40a2-a8f6-4b68f64a2a53","sourceCid":"baeaaadbxgawdemzrgyydsmjugy","contentCid":"baeaaadbxgawdemzrgyydsmjugy","authKey":315318824629964100,"name":"aca718c4-79cb-446a-82fe-815802461735","meta":null,"deleted":null,"created":"2022-06-01T21:11:27.663+00:00","updated":"2022-06-01T21:11:27.663+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:27.663+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"415e4bdc-fa11-4d6f-8ce6-e723beac4d85","status":"queued","created":"2022-06-01T21:11:24.622+00:00","pin":{"cid":"baeaaadbwguwdkobrgmydonjsgq","_id":"415e4bdc-fa11-4d6f-8ce6-e723beac4d85","sourceCid":"baeaaadbwguwdkobrgmydonjsgq","contentCid":"baeaaadbwguwdkobrgmydonjsgq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:24.622+00:00","updated":"2022-06-01T21:11:24.622+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:24.622+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"9eccc31b-56ec-44d3-a75e-e18eb43f825b","status":"queued","created":"2022-06-01T21:11:14.401+00:00","pin":{"cid":"baeaaadbvguwdkobqhaydknbrgm","_id":"9eccc31b-56ec-44d3-a75e-e18eb43f825b","sourceCid":"baeaaadbvguwdkobqhaydknbrgm","contentCid":"baeaaadbvguwdkobqhaydknbrgm","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:14.401+00:00","updated":"2022-06-01T21:11:14.401+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:14.401+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}]}
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
  "cf-ray": "714af2303a0c9651-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:12:12 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":0,"results":[]}
```
## Can delete all pins - ✘ FAILED

### Expectations (29/41 successful)

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
  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)
  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)
  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✘ Response is ok (failure)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✓ Final pinsGet call returns a count of zero (success)


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
  count: 20,
  results: [
    {
      requestid: '05bc562f-a4f3-45d3-b256-e070ac0ec726',
      status: 'pinning',
      created: '2022-06-01T21:11:49.334+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmrrha4tgnzzgu',
        _id: '05bc562f-a4f3-45d3-b256-e070ac0ec726',
        sourceCid: 'baeaaadbxguwdkmrrha4tgnzzgu',
        contentCid: 'baeaaadbxguwdkmrrha4tgnzzgu',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:49.334+00:00',
        updated: '2022-06-01T21:11:49.334+00:00',
        pins: [ [Object], [Object], [Object] ]
      },
      delegates: []
    },
    {
      requestid: 'f4a6f2c1-18af-4783-bc36-025b09563490',
      status: 'queued',
      created: '2022-06-01T21:11:47.327+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmrqgyztsobsgq',
        _id: 'f4a6f2c1-18af-4783-bc36-025b09563490',
        sourceCid: 'baeaaadbxguwdkmrqgyztsobsgq',
        contentCid: 'baeaaadbxguwdkmrqgyztsobsgq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:47.327+00:00',
        updated: '2022-06-01T21:11:47.327+00:00',
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
      requestid: '289db601-4b4d-40ae-9891-9d680cebb5b0',
      status: 'queued',
      created: '2022-06-01T21:11:46.543+00:00',
      pin: {
        cid: 'baeaaadbxgywdomjxhe2tgmjwg4',
        _id: '289db601-4b4d-40ae-9891-9d680cebb5b0',
        sourceCid: 'baeaaadbxgywdomjxhe2tgmjwg4',
        contentCid: 'baeaaadbxgywdomjxhe2tgmjwg4',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:46.543+00:00',
        updated: '2022-06-01T21:11:46.543+00:00',
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
      requestid: '4a1a641d-9cb7-4f18-a591-2801ae31b175',
      status: 'queued',
      created: '2022-06-01T21:11:46.272+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjygm2demjzgm',
        _id: '4a1a641d-9cb7-4f18-a591-2801ae31b175',
        sourceCid: 'baeaaadbxguwdkmjygm2demjzgm',
        contentCid: 'baeaaadbxguwdkmjygm2demjzgm',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:46.272+00:00',
        updated: '2022-06-01T21:11:46.272+00:00',
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
      requestid: 'c47e74f8-a383-49fd-ac28-d4ee8535dc39',
      status: 'queued',
      created: '2022-06-01T21:11:45.511+00:00',
      pin: {
        cid: 'baeaaadbxgywdomjxgi2tcmzugq',
        _id: 'c47e74f8-a383-49fd-ac28-d4ee8535dc39',
        sourceCid: 'baeaaadbxgywdomjxgi2tcmzugq',
        contentCid: 'baeaaadbxgywdomjxgi2tcmzugq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:45.511+00:00',
        updated: '2022-06-01T21:11:45.511+00:00',
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
      requestid: '5138faac-b345-4864-ac2a-a7e716f2fff8',
      status: 'queued',
      created: '2022-06-01T21:11:44.992+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjxge4dcojsg4',
        _id: '5138faac-b345-4864-ac2a-a7e716f2fff8',
        sourceCid: 'baeaaadbxguwdkmjxge4dcojsg4',
        contentCid: 'baeaaadbxguwdkmjxge4dcojsg4',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:44.992+00:00',
        updated: '2022-06-01T21:11:44.992+00:00',
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
      requestid: '7c33f4b1-a6be-4c18-9096-b74945200800',
      status: 'queued',
      created: '2022-06-01T21:11:44.666+00:00',
      pin: {
        cid: 'baeaaadbxgywdomjvg42tsmrzgy',
        _id: '7c33f4b1-a6be-4c18-9096-b74945200800',
        sourceCid: 'baeaaadbxgywdomjvg42tsmrzgy',
        contentCid: 'baeaaadbxgywdomjvg42tsmrzgy',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:44.666+00:00',
        updated: '2022-06-01T21:11:44.666+00:00',
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
      requestid: '67c29275-ee85-42c4-8e96-43c73edbfe7f',
      status: 'queued',
      created: '2022-06-01T21:11:43.679+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjwgmytmnjxha',
        _id: '67c29275-ee85-42c4-8e96-43c73edbfe7f',
        sourceCid: 'baeaaadbxguwdkmjwgmytmnjxha',
        contentCid: 'baeaaadbxguwdkmjwgmytmnjxha',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:43.679+00:00',
        updated: '2022-06-01T21:11:43.679+00:00',
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
      requestid: 'd5c5ac11-1914-4697-9aaa-879058dc4eda',
      status: 'queued',
      created: '2022-06-01T21:11:41.142+00:00',
      pin: {
        cid: 'baeaaadbxguwdkmjuhe4taobqgm',
        _id: 'd5c5ac11-1914-4697-9aaa-879058dc4eda',
        sourceCid: 'baeaaadbxguwdkmjuhe4taobqgm',
        contentCid: 'baeaaadbxguwdkmjuhe4taobqgm',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:41.142+00:00',
        updated: '2022-06-01T21:11:41.142+00:00',
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
      requestid: 'e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7',
      status: 'queued',
      created: '2022-06-01T21:11:39.664+00:00',
      pin: {
        cid: 'baeaaadbxgewdgnzyg4ztqmbugy',
        _id: 'e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7',
        sourceCid: 'baeaaadbxgewdgnzyg4ztqmbugy',
        contentCid: 'baeaaadbxgewdgnzyg4ztqmbugy',
        authKey: 315318824629964100,
        name: 'cf500356-f73c-47a1-9f16-e9277927b05d',
        meta: null,
        deleted: null,
        created: '2022-06-01T21:11:39.664+00:00',
        updated: '2022-06-01T21:11:39.664+00:00',
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
  count: 20,
  results: Set(10) {
    {
      requestid: '05bc562f-a4f3-45d3-b256-e070ac0ec726',
      status: 'pinning',
      created: 2022-06-01T21:11:49.334Z,
      pin: {
        cid: 'baeaaadbxguwdkmrrha4tgnzzgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'f4a6f2c1-18af-4783-bc36-025b09563490',
      status: 'queued',
      created: 2022-06-01T21:11:47.327Z,
      pin: {
        cid: 'baeaaadbxguwdkmrqgyztsobsgq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '289db601-4b4d-40ae-9891-9d680cebb5b0',
      status: 'queued',
      created: 2022-06-01T21:11:46.543Z,
      pin: {
        cid: 'baeaaadbxgywdomjxhe2tgmjwg4',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '4a1a641d-9cb7-4f18-a591-2801ae31b175',
      status: 'queued',
      created: 2022-06-01T21:11:46.272Z,
      pin: {
        cid: 'baeaaadbxguwdkmjygm2demjzgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'c47e74f8-a383-49fd-ac28-d4ee8535dc39',
      status: 'queued',
      created: 2022-06-01T21:11:45.511Z,
      pin: {
        cid: 'baeaaadbxgywdomjxgi2tcmzugq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '5138faac-b345-4864-ac2a-a7e716f2fff8',
      status: 'queued',
      created: 2022-06-01T21:11:44.992Z,
      pin: {
        cid: 'baeaaadbxguwdkmjxge4dcojsg4',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '7c33f4b1-a6be-4c18-9096-b74945200800',
      status: 'queued',
      created: 2022-06-01T21:11:44.666Z,
      pin: {
        cid: 'baeaaadbxgywdomjvg42tsmrzgy',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '67c29275-ee85-42c4-8e96-43c73edbfe7f',
      status: 'queued',
      created: 2022-06-01T21:11:43.679Z,
      pin: {
        cid: 'baeaaadbxguwdkmjwgmytmnjxha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'd5c5ac11-1914-4697-9aaa-879058dc4eda',
      status: 'queued',
      created: 2022-06-01T21:11:41.142Z,
      pin: {
        cid: 'baeaaadbxguwdkmjuhe4taobqgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7',
      status: 'queued',
      created: 2022-06-01T21:11:39.664Z,
      pin: {
        cid: 'baeaaadbxgewdgnzyg4ztqmbugy',
        name: 'cf500356-f73c-47a1-9f16-e9277927b05d',
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
  "cf-ray": "714af1a4aa95255a-SJC",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:50 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":20,"results":[{"requestid":"05bc562f-a4f3-45d3-b256-e070ac0ec726","status":"pinning","created":"2022-06-01T21:11:49.334+00:00","pin":{"cid":"baeaaadbxguwdkmrrha4tgnzzgu","_id":"05bc562f-a4f3-45d3-b256-e070ac0ec726","sourceCid":"baeaaadbxguwdkmrrha4tgnzzgu","contentCid":"baeaaadbxguwdkmrrha4tgnzzgu","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:49.334+00:00","updated":"2022-06-01T21:11:49.334+00:00","pins":[{"status":"PinError","updated":"2022-06-01T21:11:49.334+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Pinning","updated":"2022-06-01T21:11:49.334+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:49.334+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"f4a6f2c1-18af-4783-bc36-025b09563490","status":"queued","created":"2022-06-01T21:11:47.327+00:00","pin":{"cid":"baeaaadbxguwdkmrqgyztsobsgq","_id":"f4a6f2c1-18af-4783-bc36-025b09563490","sourceCid":"baeaaadbxguwdkmrqgyztsobsgq","contentCid":"baeaaadbxguwdkmrqgyztsobsgq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:47.327+00:00","updated":"2022-06-01T21:11:47.327+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:47.327+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"289db601-4b4d-40ae-9891-9d680cebb5b0","status":"queued","created":"2022-06-01T21:11:46.543+00:00","pin":{"cid":"baeaaadbxgywdomjxhe2tgmjwg4","_id":"289db601-4b4d-40ae-9891-9d680cebb5b0","sourceCid":"baeaaadbxgywdomjxhe2tgmjwg4","contentCid":"baeaaadbxgywdomjxhe2tgmjwg4","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:46.543+00:00","updated":"2022-06-01T21:11:46.543+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.543+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"4a1a641d-9cb7-4f18-a591-2801ae31b175","status":"queued","created":"2022-06-01T21:11:46.272+00:00","pin":{"cid":"baeaaadbxguwdkmjygm2demjzgm","_id":"4a1a641d-9cb7-4f18-a591-2801ae31b175","sourceCid":"baeaaadbxguwdkmjygm2demjzgm","contentCid":"baeaaadbxguwdkmjygm2demjzgm","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:46.272+00:00","updated":"2022-06-01T21:11:46.272+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:46.272+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"c47e74f8-a383-49fd-ac28-d4ee8535dc39","status":"queued","created":"2022-06-01T21:11:45.511+00:00","pin":{"cid":"baeaaadbxgywdomjxgi2tcmzugq","_id":"c47e74f8-a383-49fd-ac28-d4ee8535dc39","sourceCid":"baeaaadbxgywdomjxgi2tcmzugq","contentCid":"baeaaadbxgywdomjxgi2tcmzugq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:45.511+00:00","updated":"2022-06-01T21:11:45.511+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:45.511+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"5138faac-b345-4864-ac2a-a7e716f2fff8","status":"queued","created":"2022-06-01T21:11:44.992+00:00","pin":{"cid":"baeaaadbxguwdkmjxge4dcojsg4","_id":"5138faac-b345-4864-ac2a-a7e716f2fff8","sourceCid":"baeaaadbxguwdkmjxge4dcojsg4","contentCid":"baeaaadbxguwdkmjxge4dcojsg4","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:44.992+00:00","updated":"2022-06-01T21:11:44.992+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.992+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"7c33f4b1-a6be-4c18-9096-b74945200800","status":"queued","created":"2022-06-01T21:11:44.666+00:00","pin":{"cid":"baeaaadbxgywdomjvg42tsmrzgy","_id":"7c33f4b1-a6be-4c18-9096-b74945200800","sourceCid":"baeaaadbxgywdomjvg42tsmrzgy","contentCid":"baeaaadbxgywdomjvg42tsmrzgy","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:44.666+00:00","updated":"2022-06-01T21:11:44.666+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:44.666+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"67c29275-ee85-42c4-8e96-43c73edbfe7f","status":"queued","created":"2022-06-01T21:11:43.679+00:00","pin":{"cid":"baeaaadbxguwdkmjwgmytmnjxha","_id":"67c29275-ee85-42c4-8e96-43c73edbfe7f","sourceCid":"baeaaadbxguwdkmjwgmytmnjxha","contentCid":"baeaaadbxguwdkmjwgmytmnjxha","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:43.679+00:00","updated":"2022-06-01T21:11:43.679+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:43.679+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"d5c5ac11-1914-4697-9aaa-879058dc4eda","status":"queued","created":"2022-06-01T21:11:41.142+00:00","pin":{"cid":"baeaaadbxguwdkmjuhe4taobqgm","_id":"d5c5ac11-1914-4697-9aaa-879058dc4eda","sourceCid":"baeaaadbxguwdkmjuhe4taobqgm","contentCid":"baeaaadbxguwdkmjuhe4taobqgm","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T21:11:41.142+00:00","updated":"2022-06-01T21:11:41.142+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:41.142+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7","status":"queued","created":"2022-06-01T21:11:39.664+00:00","pin":{"cid":"baeaaadbxgewdgnzyg4ztqmbugy","_id":"e6f54872-7f6a-42f1-a1ca-ea8d95a7efb7","sourceCid":"baeaaadbxgewdgnzyg4ztqmbugy","contentCid":"baeaaadbxgewdgnzyg4ztqmbugy","authKey":315318824629964100,"name":"cf500356-f73c-47a1-9f16-e9277927b05d","meta":null,"deleted":null,"created":"2022-06-01T21:11:39.664+00:00","updated":"2022-06-01T21:11:39.664+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T21:11:39.664+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}]}
```
