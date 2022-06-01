
# https://api.web3.storage compliance:

## Summary (2/9 successful)

  ✘ Request with no authentication token
  ✘ Request with invalid token
  ✘ Pins post of CID 'baeaaadjrgi2cyojtg4ydkmbxha2q'
  ✘ Can create and then delete a new pin
  ✘ List pin objects (GET /pins) in all states
  ✓ Can create and replace a pin's CID
  ✘ Can create a pin with name='a67c9989-3656-4961-8ffa-c1dbe9275f4c'
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
  "cf-ray": "714adcc9f80d5752-IAD",
  "connection": "close",
  "content-length": "87",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:35 GMT",
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
  "cf-ray": "714adccf9c305c35-IAD",
  "connection": "close",
  "content-length": "82",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:36 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"code":"ERROR_UNRECOGNISED_TOKEN","message":"Could not parse provided API token"}
```
## Pins post of CID 'baeaaadjrgi2cyojtg4ydkmbxha2q' - ✘ FAILED

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
{"cid":"baeaaadjrgi2cyojtg4ydkmbxha2q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
  status: 'queued',
  created: '2022-06-01T20:57:37.856+00:00',
  pin: {
    cid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
    _id: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
    sourceCid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
    contentCid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:57:37.856+00:00',
    updated: '2022-06-01T20:57:37.856+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:37.856+00:00',
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
  requestid: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
  status: 'queued',
  created: 2022-06-01T20:57:37.856Z,
  pin: {
    cid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
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
  "cf-ray": "714adcd5e9898298-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:37 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"c59a0c34-ec04-432a-9f1a-e8af3609f59f","status":"queued","created":"2022-06-01T20:57:37.856+00:00","pin":{"cid":"baeaaadjrgi2cyojtg4ydkmbxha2q","_id":"c59a0c34-ec04-432a-9f1a-e8af3609f59f","sourceCid":"baeaaadjrgi2cyojtg4ydkmbxha2q","contentCid":"baeaaadjrgi2cyojtg4ydkmbxha2q","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:37.856+00:00","updated":"2022-06-01T20:57:37.856+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## The newly created pin can be immediately deleted - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202: The Pin was deleted successfully (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/9955be93-4268-453a-84c6-98e7c7d35912

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/9955be93-4268-453a-84c6-98e7c7d35912
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
  "cf-ray": "714adce40bb574a3-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:39 GMT",
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
{"cid":"baeaaadjrgi3cynbwgyydsobqgu2q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '9955be93-4268-453a-84c6-98e7c7d35912',
  status: 'queued',
  created: '2022-06-01T20:57:39.046+00:00',
  pin: {
    cid: 'baeaaadjrgi3cynbwgyydsobqgu2q',
    _id: '9955be93-4268-453a-84c6-98e7c7d35912',
    sourceCid: 'baeaaadjrgi3cynbwgyydsobqgu2q',
    contentCid: 'baeaaadjrgi3cynbwgyydsobqgu2q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:57:39.046+00:00',
    updated: '2022-06-01T20:57:39.046+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:39.046+00:00',
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
  requestid: '9955be93-4268-453a-84c6-98e7c7d35912',
  status: 'queued',
  created: 2022-06-01T20:57:39.046Z,
  pin: {
    cid: 'baeaaadjrgi3cynbwgyydsobqgu2q',
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
  "cf-ray": "714adcdcafa45c95-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"9955be93-4268-453a-84c6-98e7c7d35912","status":"queued","created":"2022-06-01T20:57:39.046+00:00","pin":{"cid":"baeaaadjrgi3cynbwgyydsobqgu2q","_id":"9955be93-4268-453a-84c6-98e7c7d35912","sourceCid":"baeaaadjrgi3cynbwgyydsobqgu2q","contentCid":"baeaaadjrgi3cynbwgyydsobqgu2q","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:39.046+00:00","updated":"2022-06-01T20:57:39.046+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:39.046+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
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
      requestid: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
      status: 'queued',
      created: '2022-06-01T20:57:37.856+00:00',
      pin: {
        cid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
        _id: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
        sourceCid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
        contentCid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:37.856+00:00',
        updated: '2022-06-01T20:57:37.856+00:00',
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
      requestid: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
      status: 'queued',
      created: 2022-06-01T20:57:37.856Z,
      pin: {
        cid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
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
  "cf-ray": "714adce76b2a700f-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:40 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":1,"results":[{"requestid":"c59a0c34-ec04-432a-9f1a-e8af3609f59f","status":"queued","created":"2022-06-01T20:57:37.856+00:00","pin":{"cid":"baeaaadjrgi2cyojtg4ydkmbxha2q","_id":"c59a0c34-ec04-432a-9f1a-e8af3609f59f","sourceCid":"baeaaadjrgi2cyojtg4ydkmbxha2q","contentCid":"baeaaadjrgi2cyojtg4ydkmbxha2q","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:37.856+00:00","updated":"2022-06-01T20:57:37.856+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}]}
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

#### Request - GET: https://api.web3.storage/pins/0e3864cb-e958-4353-813a-88617614af60

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/0e3864cb-e958-4353-813a-88617614af60
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
  "cf-ray": "714adcfdaf1482ec-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:43 GMT",
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

#### Request - GET: https://api.web3.storage/pins/fc04ed13-a43f-4ee5-a8a6-bfddc542738b

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/fc04ed13-a43f-4ee5-a8a6-bfddc542738b
```
{
  requestid: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
  status: 'queued',
  created: '2022-06-01T20:57:43.115+00:00',
  pin: {
    cid: 'baeaaadjrgmycymzxg4ydoojzheza',
    _id: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
    sourceCid: 'baeaaadjrgmycymzxg4ydoojzheza',
    contentCid: 'baeaaadjrgmycymzxg4ydoojzheza',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:57:43.115+00:00',
    updated: '2022-06-01T20:57:43.115+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
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
  requestid: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
  status: 'queued',
  created: 2022-06-01T20:57:43.115Z,
  pin: {
    cid: 'baeaaadjrgmycymzxg4ydoojzheza',
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
  "cf-ray": "714add03e82e0678-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:45 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"fc04ed13-a43f-4ee5-a8a6-bfddc542738b","status":"queued","created":"2022-06-01T20:57:43.115+00:00","pin":{"cid":"baeaaadjrgmycymzxg4ydoojzheza","_id":"fc04ed13-a43f-4ee5-a8a6-bfddc542738b","sourceCid":"baeaaadjrgmycymzxg4ydoojzheza","contentCid":"baeaaadjrgmycymzxg4ydoojzheza","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:43.115+00:00","updated":"2022-06-01T20:57:43.115+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Pin's with requestid '0e3864cb-e958-4353-813a-88617614af60' can have cid 'baeaaadjrgi4cyobzg4ztcnjwgyya' replaced with 'baeaaadjrgmycymzxg4ydoojzheza' - ✓ SUCCESS

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

#### Request - POST: https://api.web3.storage/pins/0e3864cb-e958-4353-813a-88617614af60

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrgmycymzxg4ydoojzheza"}
```
#### Response data from https://api.web3.storage/pins/0e3864cb-e958-4353-813a-88617614af60
```
{
  requestid: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
  status: 'queued',
  created: '2022-06-01T20:57:43.115+00:00',
  pin: {
    cid: 'baeaaadjrgmycymzxg4ydoojzheza',
    _id: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
    sourceCid: 'baeaaadjrgmycymzxg4ydoojzheza',
    contentCid: 'baeaaadjrgmycymzxg4ydoojzheza',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:57:43.115+00:00',
    updated: '2022-06-01T20:57:43.115+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:43.115+00:00',
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
  requestid: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
  status: 'queued',
  created: 2022-06-01T20:57:43.115Z,
  pin: {
    cid: 'baeaaadjrgmycymzxg4ydoojzheza',
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
  "cf-ray": "714adcf51a288023-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"fc04ed13-a43f-4ee5-a8a6-bfddc542738b","status":"queued","created":"2022-06-01T20:57:43.115+00:00","pin":{"cid":"baeaaadjrgmycymzxg4ydoojzheza","_id":"fc04ed13-a43f-4ee5-a8a6-bfddc542738b","sourceCid":"baeaaadjrgmycymzxg4ydoojzheza","contentCid":"baeaaadjrgmycymzxg4ydoojzheza","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:43.115+00:00","updated":"2022-06-01T20:57:43.115+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create and replace a pin's CID - ✓ SUCCESS

### Expectations (7/7 successful)

  ✓ Pin exists (success)
  ✓ Could obtain requestid from new pin (0e3864cb-e958-4353-813a-88617614af60) (success)
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
{"cid":"baeaaadjrgi4cyobzg4ztcnjwgyya"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '0e3864cb-e958-4353-813a-88617614af60',
  status: 'queued',
  created: '2022-06-01T20:57:41.817+00:00',
  pin: {
    cid: 'baeaaadjrgi4cyobzg4ztcnjwgyya',
    _id: '0e3864cb-e958-4353-813a-88617614af60',
    sourceCid: 'baeaaadjrgi4cyobzg4ztcnjwgyya',
    contentCid: 'baeaaadjrgi4cyobzg4ztcnjwgyya',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:57:41.817+00:00',
    updated: '2022-06-01T20:57:41.817+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:41.817+00:00',
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
  requestid: '0e3864cb-e958-4353-813a-88617614af60',
  status: 'queued',
  created: 2022-06-01T20:57:41.817Z,
  pin: {
    cid: 'baeaaadjrgi4cyobzg4ztcnjwgyya',
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
  "cf-ray": "714adcedaa8f8f20-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:41 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"0e3864cb-e958-4353-813a-88617614af60","status":"queued","created":"2022-06-01T20:57:41.817+00:00","pin":{"cid":"baeaaadjrgi4cyobzg4ztcnjwgyya","_id":"0e3864cb-e958-4353-813a-88617614af60","sourceCid":"baeaaadjrgi4cyobzg4ztcnjwgyya","contentCid":"baeaaadjrgi4cyobzg4ztcnjwgyya","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:41.817+00:00","updated":"2022-06-01T20:57:41.817+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:41.817+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can retrieve pin with name 'a67c9989-3656-4961-8ffa-c1dbe9275f4c' via the 'exact' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://api.web3.storage/pins?name=a67c9989-3656-4961-8ffa-c1dbe9275f4c&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=a67c9989-3656-4961-8ffa-c1dbe9275f4c&match=exact
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
  "cf-ray": "714add141e03577e-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:47 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_REQUIRED_DATA","details":"Instance does not have required property \"status\"."}
```
## Can retrieve pin with name 'A67C9989-3656-4961-8FFA-C1DBE9275F4C' via the 'iexact' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://api.web3.storage/pins?name=A67C9989-3656-4961-8FFA-C1DBE9275F4C&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=A67C9989-3656-4961-8FFA-C1DBE9275F4C&match=iexact
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
  "cf-ray": "714add17b9ef5b95-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_REQUIRED_DATA","details":"Instance does not have required property \"status\"."}
```
## Can retrieve pin with name '3656-4961-8ffa-c1d' via the 'partial' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://api.web3.storage/pins?name=3656-4961-8ffa-c1d&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=3656-4961-8ffa-c1d&match=partial
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
  "cf-ray": "714add1d0ab85cf4-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_REQUIRED_DATA","details":"Instance does not have required property \"status\"."}
```
## Can retrieve pin with name '3656-4961-8FFA-C1D' via the 'ipartial' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://api.web3.storage/pins?name=3656-4961-8FFA-C1D&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=3656-4961-8FFA-C1D&match=ipartial
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
  "cf-ray": "714add2348d682ec-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:49 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"PSA_REQUIRED_DATA","details":"Instance does not have required property \"status\"."}
```
## Can create a pin with name='a67c9989-3656-4961-8ffa-c1dbe9275f4c' - ✘ FAILED

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
{"cid":"baeaaadjrgmzsynzwguzdkobugy4a","name":"a67c9989-3656-4961-8ffa-c1dbe9275f4c"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'eb2158ef-566f-44ee-92b7-a1b6628784a5',
  status: 'queued',
  created: '2022-06-01T20:57:46.652+00:00',
  pin: {
    cid: 'baeaaadjrgmzsynzwguzdkobugy4a',
    _id: 'eb2158ef-566f-44ee-92b7-a1b6628784a5',
    sourceCid: 'baeaaadjrgmzsynzwguzdkobugy4a',
    contentCid: 'baeaaadjrgmzsynzwguzdkobugy4a',
    authKey: '315318824629964106',
    name: 'a67c9989-3656-4961-8ffa-c1dbe9275f4c',
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:57:46.652+00:00',
    updated: '2022-06-01T20:57:46.652+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:46.652+00:00',
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
  requestid: 'eb2158ef-566f-44ee-92b7-a1b6628784a5',
  status: 'queued',
  created: 2022-06-01T20:57:46.652Z,
  pin: {
    cid: 'baeaaadjrgmzsynzwguzdkobugy4a',
    name: 'a67c9989-3656-4961-8ffa-c1dbe9275f4c',
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
  "cf-ray": "714add0a580e067c-IAD",
  "connection": "close",
  "content-length": "3831",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:46 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"eb2158ef-566f-44ee-92b7-a1b6628784a5","status":"queued","created":"2022-06-01T20:57:46.652+00:00","pin":{"cid":"baeaaadjrgmzsynzwguzdkobugy4a","_id":"eb2158ef-566f-44ee-92b7-a1b6628784a5","sourceCid":"baeaaadjrgmzsynzwguzdkobugy4a","contentCid":"baeaaadjrgmzsynzwguzdkobugy4a","authKey":"315318824629964106","name":"a67c9989-3656-4961-8ffa-c1dbe9275f4c","origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:46.652+00:00","updated":"2022-06-01T20:57:46.652+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjrgm4cyobrgqztmobyge4q' - ✓ SUCCESS

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
{"cid":"baeaaadjrgm4cyobrgqztmobyge4q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '05523720-71f8-409b-9544-d354e4e649a4',
  status: 'queued',
  created: '2022-06-01T20:57:51.552+00:00',
  pin: {
    cid: 'baeaaadjrgm4cyobrgqztmobyge4q',
    _id: '05523720-71f8-409b-9544-d354e4e649a4',
    sourceCid: 'baeaaadjrgm4cyobrgqztmobyge4q',
    contentCid: 'baeaaadjrgm4cyobrgqztmobyge4q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:57:51.552+00:00',
    updated: '2022-06-01T20:57:51.552+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:51.552+00:00',
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
  requestid: '05523720-71f8-409b-9544-d354e4e649a4',
  status: 'queued',
  created: 2022-06-01T20:57:51.552Z,
  pin: {
    cid: 'baeaaadjrgm4cyobrgqztmobyge4q',
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
  "cf-ray": "714add2a192357dc-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:51 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"05523720-71f8-409b-9544-d354e4e649a4","status":"queued","created":"2022-06-01T20:57:51.552+00:00","pin":{"cid":"baeaaadjrgm4cyobrgqztmobyge4q","_id":"05523720-71f8-409b-9544-d354e4e649a4","sourceCid":"baeaaadjrgm4cyobrgqztmobyge4q","contentCid":"baeaaadjrgm4cyobrgqztmobyge4q","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:51.552+00:00","updated":"2022-06-01T20:57:51.552+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjrgm4cyobrguytmnrzgmyq' - ✓ SUCCESS

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
{"cid":"baeaaadjrgm4cyobrguytmnrzgmyq"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'b3a79d9f-b840-493c-a7f4-0febd6b276b1',
  status: 'queued',
  created: '2022-06-01T20:57:52.316+00:00',
  pin: {
    cid: 'baeaaadjrgm4cyobrguytmnrzgmyq',
    _id: 'b3a79d9f-b840-493c-a7f4-0febd6b276b1',
    sourceCid: 'baeaaadjrgm4cyobrguytmnrzgmyq',
    contentCid: 'baeaaadjrgm4cyobrguytmnrzgmyq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:57:52.316+00:00',
    updated: '2022-06-01T20:57:52.316+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:52.316+00:00',
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
  requestid: 'b3a79d9f-b840-493c-a7f4-0febd6b276b1',
  status: 'queued',
  created: 2022-06-01T20:57:52.316Z,
  pin: {
    cid: 'baeaaadjrgm4cyobrguytmnrzgmyq',
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
  "cf-ray": "714add327db405b0-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:52 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"b3a79d9f-b840-493c-a7f4-0febd6b276b1","status":"queued","created":"2022-06-01T20:57:52.316+00:00","pin":{"cid":"baeaaadjrgm4cyobrguytmnrzgmyq","_id":"b3a79d9f-b840-493c-a7f4-0febd6b276b1","sourceCid":"baeaaadjrgm4cyobrguytmnrzgmyq","contentCid":"baeaaadjrgm4cyobrguytmnrzgmyq","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:52.316+00:00","updated":"2022-06-01T20:57:52.316+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjrgm4cyobrgu3tmmjsgm4q' - ✓ SUCCESS

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
{"cid":"baeaaadjrgm4cyobrgu3tmmjsgm4q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '5ff494d3-8d25-4b01-a505-bca77609cc37',
  status: 'queued',
  created: '2022-06-01T20:57:55.636+00:00',
  pin: {
    cid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
    _id: '5ff494d3-8d25-4b01-a505-bca77609cc37',
    sourceCid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
    contentCid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:57:55.636+00:00',
    updated: '2022-06-01T20:57:55.636+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:55.636+00:00',
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
  requestid: '5ff494d3-8d25-4b01-a505-bca77609cc37',
  status: 'queued',
  created: 2022-06-01T20:57:55.636Z,
  pin: {
    cid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
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
  "cf-ray": "714add3718c90641-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:55 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"5ff494d3-8d25-4b01-a505-bca77609cc37","status":"queued","created":"2022-06-01T20:57:55.636+00:00","pin":{"cid":"baeaaadjrgm4cyobrgu3tmmjsgm4q","_id":"5ff494d3-8d25-4b01-a505-bca77609cc37","sourceCid":"baeaaadjrgm4cyobrgu3tmmjsgm4q","contentCid":"baeaaadjrgm4cyobrgu3tmmjsgm4q","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:55.636+00:00","updated":"2022-06-01T20:57:55.636+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjrgm4cyobrgyztkobrgq4a' - ✓ SUCCESS

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
{"cid":"baeaaadjrgm4cyobrgyztkobrgq4a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10',
  status: 'queued',
  created: '2022-06-01T20:57:56.549+00:00',
  pin: {
    cid: 'baeaaadjrgm4cyobrgyztkobrgq4a',
    _id: '27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10',
    sourceCid: 'baeaaadjrgm4cyobrgyztkobrgq4a',
    contentCid: 'baeaaadjrgm4cyobrgyztkobrgq4a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:57:56.549+00:00',
    updated: '2022-06-01T20:57:56.549+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:56.549+00:00',
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
  requestid: '27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10',
  status: 'queued',
  created: 2022-06-01T20:57:56.549Z,
  pin: {
    cid: 'baeaaadjrgm4cyobrgyztkobrgq4a',
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
  "cf-ray": "714add4bbf5e57c4-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:56 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10","status":"queued","created":"2022-06-01T20:57:56.549+00:00","pin":{"cid":"baeaaadjrgm4cyobrgyztkobrgq4a","_id":"27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10","sourceCid":"baeaaadjrgm4cyobrgyztkobrgq4a","contentCid":"baeaaadjrgm4cyobrgyztkobrgq4a","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:56.549+00:00","updated":"2022-06-01T20:57:56.549+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjrgm4cyobrg4ydimzxgu4a' - ✓ SUCCESS

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
{"cid":"baeaaadjrgm4cyobrg4ydimzxgu4a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '3af10143-cc62-48a3-8bb0-f753fbc52143',
  status: 'queued',
  created: '2022-06-01T20:57:57.764+00:00',
  pin: {
    cid: 'baeaaadjrgm4cyobrg4ydimzxgu4a',
    _id: '3af10143-cc62-48a3-8bb0-f753fbc52143',
    sourceCid: 'baeaaadjrgm4cyobrg4ydimzxgu4a',
    contentCid: 'baeaaadjrgm4cyobrg4ydimzxgu4a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:57:57.764+00:00',
    updated: '2022-06-01T20:57:57.764+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:57.764+00:00',
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
  requestid: '3af10143-cc62-48a3-8bb0-f753fbc52143',
  status: 'queued',
  created: 2022-06-01T20:57:57.764Z,
  pin: {
    cid: 'baeaaadjrgm4cyobrg4ydimzxgu4a',
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
  "cf-ray": "714add512c39595b-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:57 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"3af10143-cc62-48a3-8bb0-f753fbc52143","status":"queued","created":"2022-06-01T20:57:57.764+00:00","pin":{"cid":"baeaaadjrgm4cyobrg4ydimzxgu4a","_id":"3af10143-cc62-48a3-8bb0-f753fbc52143","sourceCid":"baeaaadjrgm4cyobrg4ydimzxgu4a","contentCid":"baeaaadjrgm4cyobrg4ydimzxgu4a","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:57.764+00:00","updated":"2022-06-01T20:57:57.764+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjrgm4cyobrg43tmmbygy4q' - ✓ SUCCESS

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
{"cid":"baeaaadjrgm4cyobrg43tmmbygy4q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'bee6f014-c201-42d7-9f3c-875cc153219b',
  status: 'queued',
  created: '2022-06-01T20:57:58.346+00:00',
  pin: {
    cid: 'baeaaadjrgm4cyobrg43tmmbygy4q',
    _id: 'bee6f014-c201-42d7-9f3c-875cc153219b',
    sourceCid: 'baeaaadjrgm4cyobrg43tmmbygy4q',
    contentCid: 'baeaaadjrgm4cyobrg43tmmbygy4q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:57:58.346+00:00',
    updated: '2022-06-01T20:57:58.346+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.346+00:00',
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
  requestid: 'bee6f014-c201-42d7-9f3c-875cc153219b',
  status: 'queued',
  created: 2022-06-01T20:57:58.346Z,
  pin: {
    cid: 'baeaaadjrgm4cyobrg43tmmbygy4q',
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
  "cf-ray": "714add58fb1b57dc-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:58 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"bee6f014-c201-42d7-9f3c-875cc153219b","status":"queued","created":"2022-06-01T20:57:58.346+00:00","pin":{"cid":"baeaaadjrgm4cyobrg43tmmbygy4q","_id":"bee6f014-c201-42d7-9f3c-875cc153219b","sourceCid":"baeaaadjrgm4cyobrg43tmmbygy4q","contentCid":"baeaaadjrgm4cyobrg43tmmbygy4q","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:58.346+00:00","updated":"2022-06-01T20:57:58.346+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjrgm4cyobrha3tmnzzha2a' - ✓ SUCCESS

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
{"cid":"baeaaadjrgm4cyobrha3tmnzzha2a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '2860125f-0541-47b8-8b65-e2ccade6e91d',
  status: 'queued',
  created: '2022-06-01T20:57:58.999+00:00',
  pin: {
    cid: 'baeaaadjrgm4cyobrha3tmnzzha2a',
    _id: '2860125f-0541-47b8-8b65-e2ccade6e91d',
    sourceCid: 'baeaaadjrgm4cyobrha3tmnzzha2a',
    contentCid: 'baeaaadjrgm4cyobrha3tmnzzha2a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:57:58.999+00:00',
    updated: '2022-06-01T20:57:58.999+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:58.999+00:00',
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
  requestid: '2860125f-0541-47b8-8b65-e2ccade6e91d',
  status: 'queued',
  created: 2022-06-01T20:57:58.999Z,
  pin: {
    cid: 'baeaaadjrgm4cyobrha3tmnzzha2a',
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
  "cf-ray": "714add5c698105b0-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:59 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"2860125f-0541-47b8-8b65-e2ccade6e91d","status":"queued","created":"2022-06-01T20:57:58.999+00:00","pin":{"cid":"baeaaadjrgm4cyobrha3tmnzzha2a","_id":"2860125f-0541-47b8-8b65-e2ccade6e91d","sourceCid":"baeaaadjrgm4cyobrha3tmnzzha2a","contentCid":"baeaaadjrgm4cyobrha3tmnzzha2a","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:58.999+00:00","updated":"2022-06-01T20:57:58.999+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjrgm4cyobrheztgnzsheza' - ✓ SUCCESS

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
{"cid":"baeaaadjrgm4cyobrheztgnzsheza"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'c688a92a-da6b-428f-9950-8667a9eebef0',
  status: 'queued',
  created: '2022-06-01T20:57:59.976+00:00',
  pin: {
    cid: 'baeaaadjrgm4cyobrheztgnzsheza',
    _id: 'c688a92a-da6b-428f-9950-8667a9eebef0',
    sourceCid: 'baeaaadjrgm4cyobrheztgnzsheza',
    contentCid: 'baeaaadjrgm4cyobrheztgnzsheza',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:57:59.976+00:00',
    updated: '2022-06-01T20:57:59.976+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:57:59.976+00:00',
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
  requestid: 'c688a92a-da6b-428f-9950-8667a9eebef0',
  status: 'queued',
  created: 2022-06-01T20:57:59.976Z,
  pin: {
    cid: 'baeaaadjrgm4cyobrheztgnzsheza',
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
  "cf-ray": "714add625fc87fe1-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:00 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"c688a92a-da6b-428f-9950-8667a9eebef0","status":"queued","created":"2022-06-01T20:57:59.976+00:00","pin":{"cid":"baeaaadjrgm4cyobrheztgnzsheza","_id":"c688a92a-da6b-428f-9950-8667a9eebef0","sourceCid":"baeaaadjrgm4cyobrheztgnzsheza","contentCid":"baeaaadjrgm4cyobrheztgnzsheza","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:59.976+00:00","updated":"2022-06-01T20:57:59.976+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjrgm4cyobsgaydeobzgaza' - ✓ SUCCESS

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
{"cid":"baeaaadjrgm4cyobsgaydeobzgaza"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '9166bf41-dc97-4876-924e-fec8bd8b7bff',
  status: 'queued',
  created: '2022-06-01T20:58:01.334+00:00',
  pin: {
    cid: 'baeaaadjrgm4cyobsgaydeobzgaza',
    _id: '9166bf41-dc97-4876-924e-fec8bd8b7bff',
    sourceCid: 'baeaaadjrgm4cyobsgaydeobzgaza',
    contentCid: 'baeaaadjrgm4cyobsgaydeobzgaza',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:58:01.334+00:00',
    updated: '2022-06-01T20:58:01.334+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.334+00:00',
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
  requestid: '9166bf41-dc97-4876-924e-fec8bd8b7bff',
  status: 'queued',
  created: 2022-06-01T20:58:01.334Z,
  pin: {
    cid: 'baeaaadjrgm4cyobsgaydeobzgaza',
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
  "cf-ray": "714add689e405b9b-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:01 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"9166bf41-dc97-4876-924e-fec8bd8b7bff","status":"queued","created":"2022-06-01T20:58:01.334+00:00","pin":{"cid":"baeaaadjrgm4cyobsgaydeobzgaza","_id":"9166bf41-dc97-4876-924e-fec8bd8b7bff","sourceCid":"baeaaadjrgm4cyobsgaydeobzgaza","contentCid":"baeaaadjrgm4cyobsgaydeobzgaza","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:58:01.334+00:00","updated":"2022-06-01T20:58:01.334+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjrgm4cyobsga2tkmrzgeya' - ✓ SUCCESS

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
{"cid":"baeaaadjrgm4cyobsga2tkmrzgeya"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '78b9c95d-a6d2-403a-b124-6be34bb8380f',
  status: 'queued',
  created: '2022-06-01T20:58:01.703+00:00',
  pin: {
    cid: 'baeaaadjrgm4cyobsga2tkmrzgeya',
    _id: '78b9c95d-a6d2-403a-b124-6be34bb8380f',
    sourceCid: 'baeaaadjrgm4cyobsga2tkmrzgeya',
    contentCid: 'baeaaadjrgm4cyobsga2tkmrzgeya',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:58:01.703+00:00',
    updated: '2022-06-01T20:58:01.703+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:01.703+00:00',
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
  requestid: '78b9c95d-a6d2-403a-b124-6be34bb8380f',
  status: 'queued',
  created: 2022-06-01T20:58:01.703Z,
  pin: {
    cid: 'baeaaadjrgm4cyobsga2tkmrzgeya',
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
  "cf-ray": "714add6f59990641-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:01 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"78b9c95d-a6d2-403a-b124-6be34bb8380f","status":"queued","created":"2022-06-01T20:58:01.703+00:00","pin":{"cid":"baeaaadjrgm4cyobsga2tkmrzgeya","_id":"78b9c95d-a6d2-403a-b124-6be34bb8380f","sourceCid":"baeaaadjrgm4cyobsga2tkmrzgeya","contentCid":"baeaaadjrgm4cyobsga2tkmrzgeya","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:58:01.703+00:00","updated":"2022-06-01T20:58:01.703+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjrgm4cyobsgeydonzrge4a' - ✓ SUCCESS

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
{"cid":"baeaaadjrgm4cyobsgeydonzrge4a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '3a652318-bea5-4445-93d5-2293412f7a30',
  status: 'queued',
  created: '2022-06-01T20:58:03.232+00:00',
  pin: {
    cid: 'baeaaadjrgm4cyobsgeydonzrge4a',
    _id: '3a652318-bea5-4445-93d5-2293412f7a30',
    sourceCid: 'baeaaadjrgm4cyobsgeydonzrge4a',
    contentCid: 'baeaaadjrgm4cyobsgeydonzrge4a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:58:03.232+00:00',
    updated: '2022-06-01T20:58:03.232+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:03.232+00:00',
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
  requestid: '3a652318-bea5-4445-93d5-2293412f7a30',
  status: 'queued',
  created: 2022-06-01T20:58:03.232Z,
  pin: {
    cid: 'baeaaadjrgm4cyobsgeydonzrge4a',
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
  "cf-ray": "714add75190d5b41-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:03 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"3a652318-bea5-4445-93d5-2293412f7a30","status":"queued","created":"2022-06-01T20:58:03.232+00:00","pin":{"cid":"baeaaadjrgm4cyobsgeydonzrge4a","_id":"3a652318-bea5-4445-93d5-2293412f7a30","sourceCid":"baeaaadjrgm4cyobsgeydonzrge4a","contentCid":"baeaaadjrgm4cyobsgeydonzrge4a","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:58:03.232+00:00","updated":"2022-06-01T20:58:03.232+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjrgm4cyobsge2tsmjrgi2q' - ✓ SUCCESS

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
{"cid":"baeaaadjrgm4cyobsge2tsmjrgi2q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'e39fd882-cc65-430f-8246-2c84c381f391',
  status: 'queued',
  created: '2022-06-01T20:58:04.567+00:00',
  pin: {
    cid: 'baeaaadjrgm4cyobsge2tsmjrgi2q',
    _id: 'e39fd882-cc65-430f-8246-2c84c381f391',
    sourceCid: 'baeaaadjrgm4cyobsge2tsmjrgi2q',
    contentCid: 'baeaaadjrgm4cyobsge2tsmjrgi2q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-01T20:58:04.567+00:00',
    updated: '2022-06-01T20:58:04.567+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-01T20:58:04.567+00:00',
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
  requestid: 'e39fd882-cc65-430f-8246-2c84c381f391',
  status: 'queued',
  created: 2022-06-01T20:58:04.567Z,
  pin: {
    cid: 'baeaaadjrgm4cyobsge2tsmjrgi2q',
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
  "cf-ray": "714add7b8f3a5dd3-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:04 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"e39fd882-cc65-430f-8246-2c84c381f391","status":"queued","created":"2022-06-01T20:58:04.567+00:00","pin":{"cid":"baeaaadjrgm4cyobsge2tsmjrgi2q","_id":"e39fd882-cc65-430f-8246-2c84c381f391","sourceCid":"baeaaadjrgm4cyobsge2tsmjrgi2q","contentCid":"baeaaadjrgm4cyobsge2tsmjrgi2q","authKey":"315318824629964106","name":null,"origins":null,"meta":null,"deleted":null,"created":"2022-06-01T20:58:04.567+00:00","updated":"2022-06-01T20:58:04.567+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}
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
      requestid: 'e39fd882-cc65-430f-8246-2c84c381f391',
      status: 'queued',
      created: '2022-06-01T20:58:04.567+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobsge2tsmjrgi2q',
        _id: 'e39fd882-cc65-430f-8246-2c84c381f391',
        sourceCid: 'baeaaadjrgm4cyobsge2tsmjrgi2q',
        contentCid: 'baeaaadjrgm4cyobsge2tsmjrgi2q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:58:04.567+00:00',
        updated: '2022-06-01T20:58:04.567+00:00',
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
      requestid: '3a652318-bea5-4445-93d5-2293412f7a30',
      status: 'queued',
      created: '2022-06-01T20:58:03.232+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobsgeydonzrge4a',
        _id: '3a652318-bea5-4445-93d5-2293412f7a30',
        sourceCid: 'baeaaadjrgm4cyobsgeydonzrge4a',
        contentCid: 'baeaaadjrgm4cyobsgeydonzrge4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:58:03.232+00:00',
        updated: '2022-06-01T20:58:03.232+00:00',
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
      requestid: '78b9c95d-a6d2-403a-b124-6be34bb8380f',
      status: 'queued',
      created: '2022-06-01T20:58:01.703+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobsga2tkmrzgeya',
        _id: '78b9c95d-a6d2-403a-b124-6be34bb8380f',
        sourceCid: 'baeaaadjrgm4cyobsga2tkmrzgeya',
        contentCid: 'baeaaadjrgm4cyobsga2tkmrzgeya',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:58:01.703+00:00',
        updated: '2022-06-01T20:58:01.703+00:00',
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
      requestid: '9166bf41-dc97-4876-924e-fec8bd8b7bff',
      status: 'queued',
      created: '2022-06-01T20:58:01.334+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobsgaydeobzgaza',
        _id: '9166bf41-dc97-4876-924e-fec8bd8b7bff',
        sourceCid: 'baeaaadjrgm4cyobsgaydeobzgaza',
        contentCid: 'baeaaadjrgm4cyobsgaydeobzgaza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:58:01.334+00:00',
        updated: '2022-06-01T20:58:01.334+00:00',
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
      requestid: 'c688a92a-da6b-428f-9950-8667a9eebef0',
      status: 'queued',
      created: '2022-06-01T20:57:59.976+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrheztgnzsheza',
        _id: 'c688a92a-da6b-428f-9950-8667a9eebef0',
        sourceCid: 'baeaaadjrgm4cyobrheztgnzsheza',
        contentCid: 'baeaaadjrgm4cyobrheztgnzsheza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:59.976+00:00',
        updated: '2022-06-01T20:57:59.976+00:00',
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
      requestid: '2860125f-0541-47b8-8b65-e2ccade6e91d',
      status: 'queued',
      created: '2022-06-01T20:57:58.999+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrha3tmnzzha2a',
        _id: '2860125f-0541-47b8-8b65-e2ccade6e91d',
        sourceCid: 'baeaaadjrgm4cyobrha3tmnzzha2a',
        contentCid: 'baeaaadjrgm4cyobrha3tmnzzha2a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:58.999+00:00',
        updated: '2022-06-01T20:57:58.999+00:00',
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
      requestid: 'bee6f014-c201-42d7-9f3c-875cc153219b',
      status: 'queued',
      created: '2022-06-01T20:57:58.346+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrg43tmmbygy4q',
        _id: 'bee6f014-c201-42d7-9f3c-875cc153219b',
        sourceCid: 'baeaaadjrgm4cyobrg43tmmbygy4q',
        contentCid: 'baeaaadjrgm4cyobrg43tmmbygy4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:58.346+00:00',
        updated: '2022-06-01T20:57:58.346+00:00',
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
      requestid: '3af10143-cc62-48a3-8bb0-f753fbc52143',
      status: 'queued',
      created: '2022-06-01T20:57:57.764+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrg4ydimzxgu4a',
        _id: '3af10143-cc62-48a3-8bb0-f753fbc52143',
        sourceCid: 'baeaaadjrgm4cyobrg4ydimzxgu4a',
        contentCid: 'baeaaadjrgm4cyobrg4ydimzxgu4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:57.764+00:00',
        updated: '2022-06-01T20:57:57.764+00:00',
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
      requestid: '27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10',
      status: 'queued',
      created: '2022-06-01T20:57:56.549+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrgyztkobrgq4a',
        _id: '27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10',
        sourceCid: 'baeaaadjrgm4cyobrgyztkobrgq4a',
        contentCid: 'baeaaadjrgm4cyobrgyztkobrgq4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:56.549+00:00',
        updated: '2022-06-01T20:57:56.549+00:00',
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
      requestid: '5ff494d3-8d25-4b01-a505-bca77609cc37',
      status: 'queued',
      created: '2022-06-01T20:57:55.636+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
        _id: '5ff494d3-8d25-4b01-a505-bca77609cc37',
        sourceCid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
        contentCid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:55.636+00:00',
        updated: '2022-06-01T20:57:55.636+00:00',
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
      requestid: 'e39fd882-cc65-430f-8246-2c84c381f391',
      status: 'queued',
      created: 2022-06-01T20:58:04.567Z,
      pin: {
        cid: 'baeaaadjrgm4cyobsge2tsmjrgi2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '3a652318-bea5-4445-93d5-2293412f7a30',
      status: 'queued',
      created: 2022-06-01T20:58:03.232Z,
      pin: {
        cid: 'baeaaadjrgm4cyobsgeydonzrge4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '78b9c95d-a6d2-403a-b124-6be34bb8380f',
      status: 'queued',
      created: 2022-06-01T20:58:01.703Z,
      pin: {
        cid: 'baeaaadjrgm4cyobsga2tkmrzgeya',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '9166bf41-dc97-4876-924e-fec8bd8b7bff',
      status: 'queued',
      created: 2022-06-01T20:58:01.334Z,
      pin: {
        cid: 'baeaaadjrgm4cyobsgaydeobzgaza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'c688a92a-da6b-428f-9950-8667a9eebef0',
      status: 'queued',
      created: 2022-06-01T20:57:59.976Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrheztgnzsheza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '2860125f-0541-47b8-8b65-e2ccade6e91d',
      status: 'queued',
      created: 2022-06-01T20:57:58.999Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrha3tmnzzha2a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'bee6f014-c201-42d7-9f3c-875cc153219b',
      status: 'queued',
      created: 2022-06-01T20:57:58.346Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrg43tmmbygy4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '3af10143-cc62-48a3-8bb0-f753fbc52143',
      status: 'queued',
      created: 2022-06-01T20:57:57.764Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrg4ydimzxgu4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10',
      status: 'queued',
      created: 2022-06-01T20:57:56.549Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrgyztkobrgq4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '5ff494d3-8d25-4b01-a505-bca77609cc37',
      status: 'queued',
      created: 2022-06-01T20:57:55.636Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
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
  "cf-ray": "714add836ac057c4-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:04 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":15,"results":[{"requestid":"e39fd882-cc65-430f-8246-2c84c381f391","status":"queued","created":"2022-06-01T20:58:04.567+00:00","pin":{"cid":"baeaaadjrgm4cyobsge2tsmjrgi2q","_id":"e39fd882-cc65-430f-8246-2c84c381f391","sourceCid":"baeaaadjrgm4cyobsge2tsmjrgi2q","contentCid":"baeaaadjrgm4cyobsge2tsmjrgi2q","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:58:04.567+00:00","updated":"2022-06-01T20:58:04.567+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"3a652318-bea5-4445-93d5-2293412f7a30","status":"queued","created":"2022-06-01T20:58:03.232+00:00","pin":{"cid":"baeaaadjrgm4cyobsgeydonzrge4a","_id":"3a652318-bea5-4445-93d5-2293412f7a30","sourceCid":"baeaaadjrgm4cyobsgeydonzrge4a","contentCid":"baeaaadjrgm4cyobsgeydonzrge4a","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:58:03.232+00:00","updated":"2022-06-01T20:58:03.232+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"78b9c95d-a6d2-403a-b124-6be34bb8380f","status":"queued","created":"2022-06-01T20:58:01.703+00:00","pin":{"cid":"baeaaadjrgm4cyobsga2tkmrzgeya","_id":"78b9c95d-a6d2-403a-b124-6be34bb8380f","sourceCid":"baeaaadjrgm4cyobsga2tkmrzgeya","contentCid":"baeaaadjrgm4cyobsga2tkmrzgeya","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:58:01.703+00:00","updated":"2022-06-01T20:58:01.703+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"9166bf41-dc97-4876-924e-fec8bd8b7bff","status":"queued","created":"2022-06-01T20:58:01.334+00:00","pin":{"cid":"baeaaadjrgm4cyobsgaydeobzgaza","_id":"9166bf41-dc97-4876-924e-fec8bd8b7bff","sourceCid":"baeaaadjrgm4cyobsgaydeobzgaza","contentCid":"baeaaadjrgm4cyobsgaydeobzgaza","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:58:01.334+00:00","updated":"2022-06-01T20:58:01.334+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"c688a92a-da6b-428f-9950-8667a9eebef0","status":"queued","created":"2022-06-01T20:57:59.976+00:00","pin":{"cid":"baeaaadjrgm4cyobrheztgnzsheza","_id":"c688a92a-da6b-428f-9950-8667a9eebef0","sourceCid":"baeaaadjrgm4cyobrheztgnzsheza","contentCid":"baeaaadjrgm4cyobrheztgnzsheza","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:59.976+00:00","updated":"2022-06-01T20:57:59.976+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"2860125f-0541-47b8-8b65-e2ccade6e91d","status":"queued","created":"2022-06-01T20:57:58.999+00:00","pin":{"cid":"baeaaadjrgm4cyobrha3tmnzzha2a","_id":"2860125f-0541-47b8-8b65-e2ccade6e91d","sourceCid":"baeaaadjrgm4cyobrha3tmnzzha2a","contentCid":"baeaaadjrgm4cyobrha3tmnzzha2a","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:58.999+00:00","updated":"2022-06-01T20:57:58.999+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"bee6f014-c201-42d7-9f3c-875cc153219b","status":"queued","created":"2022-06-01T20:57:58.346+00:00","pin":{"cid":"baeaaadjrgm4cyobrg43tmmbygy4q","_id":"bee6f014-c201-42d7-9f3c-875cc153219b","sourceCid":"baeaaadjrgm4cyobrg43tmmbygy4q","contentCid":"baeaaadjrgm4cyobrg43tmmbygy4q","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:58.346+00:00","updated":"2022-06-01T20:57:58.346+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"3af10143-cc62-48a3-8bb0-f753fbc52143","status":"queued","created":"2022-06-01T20:57:57.764+00:00","pin":{"cid":"baeaaadjrgm4cyobrg4ydimzxgu4a","_id":"3af10143-cc62-48a3-8bb0-f753fbc52143","sourceCid":"baeaaadjrgm4cyobrg4ydimzxgu4a","contentCid":"baeaaadjrgm4cyobrg4ydimzxgu4a","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:57.764+00:00","updated":"2022-06-01T20:57:57.764+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10","status":"queued","created":"2022-06-01T20:57:56.549+00:00","pin":{"cid":"baeaaadjrgm4cyobrgyztkobrgq4a","_id":"27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10","sourceCid":"baeaaadjrgm4cyobrgyztkobrgq4a","contentCid":"baeaaadjrgm4cyobrgyztkobrgq4a","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:56.549+00:00","updated":"2022-06-01T20:57:56.549+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"5ff494d3-8d25-4b01-a505-bca77609cc37","status":"queued","created":"2022-06-01T20:57:55.636+00:00","pin":{"cid":"baeaaadjrgm4cyobrgu3tmmjsgm4q","_id":"5ff494d3-8d25-4b01-a505-bca77609cc37","sourceCid":"baeaaadjrgm4cyobrgu3tmmjsgm4q","contentCid":"baeaaadjrgm4cyobrgu3tmmjsgm4q","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:55.636+00:00","updated":"2022-06-01T20:57:55.636+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}]}
```
## Pagination: Retrieve the next page of pins - ✘ FAILED

### Expectations (2/3 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✘ The next page of pins doesn't contain any of previous pages pins (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T20%3A57%3A55.636Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T20%3A57%3A55.636Z
```
{
  count: 6,
  results: [
    {
      requestid: '5ff494d3-8d25-4b01-a505-bca77609cc37',
      status: 'queued',
      created: '2022-06-01T20:57:55.636+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
        _id: '5ff494d3-8d25-4b01-a505-bca77609cc37',
        sourceCid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
        contentCid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:55.636+00:00',
        updated: '2022-06-01T20:57:55.636+00:00',
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
      requestid: 'b3a79d9f-b840-493c-a7f4-0febd6b276b1',
      status: 'queued',
      created: '2022-06-01T20:57:52.316+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrguytmnrzgmyq',
        _id: 'b3a79d9f-b840-493c-a7f4-0febd6b276b1',
        sourceCid: 'baeaaadjrgm4cyobrguytmnrzgmyq',
        contentCid: 'baeaaadjrgm4cyobrguytmnrzgmyq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:52.316+00:00',
        updated: '2022-06-01T20:57:52.316+00:00',
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
      requestid: '05523720-71f8-409b-9544-d354e4e649a4',
      status: 'queued',
      created: '2022-06-01T20:57:51.552+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrgqztmobyge4q',
        _id: '05523720-71f8-409b-9544-d354e4e649a4',
        sourceCid: 'baeaaadjrgm4cyobrgqztmobyge4q',
        contentCid: 'baeaaadjrgm4cyobrgqztmobyge4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:51.552+00:00',
        updated: '2022-06-01T20:57:51.552+00:00',
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
      requestid: 'eb2158ef-566f-44ee-92b7-a1b6628784a5',
      status: 'queued',
      created: '2022-06-01T20:57:46.652+00:00',
      pin: {
        cid: 'baeaaadjrgmzsynzwguzdkobugy4a',
        _id: 'eb2158ef-566f-44ee-92b7-a1b6628784a5',
        sourceCid: 'baeaaadjrgmzsynzwguzdkobugy4a',
        contentCid: 'baeaaadjrgmzsynzwguzdkobugy4a',
        authKey: 315318824629964100,
        name: 'a67c9989-3656-4961-8ffa-c1dbe9275f4c',
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:46.652+00:00',
        updated: '2022-06-01T20:57:46.652+00:00',
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
      requestid: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
      status: 'queued',
      created: '2022-06-01T20:57:43.115+00:00',
      pin: {
        cid: 'baeaaadjrgmycymzxg4ydoojzheza',
        _id: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
        sourceCid: 'baeaaadjrgmycymzxg4ydoojzheza',
        contentCid: 'baeaaadjrgmycymzxg4ydoojzheza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:43.115+00:00',
        updated: '2022-06-01T20:57:43.115+00:00',
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
      requestid: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
      status: 'queued',
      created: '2022-06-01T20:57:37.856+00:00',
      pin: {
        cid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
        _id: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
        sourceCid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
        contentCid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:37.856+00:00',
        updated: '2022-06-01T20:57:37.856+00:00',
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
      requestid: '5ff494d3-8d25-4b01-a505-bca77609cc37',
      status: 'queued',
      created: 2022-06-01T20:57:55.636Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'b3a79d9f-b840-493c-a7f4-0febd6b276b1',
      status: 'queued',
      created: 2022-06-01T20:57:52.316Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrguytmnrzgmyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '05523720-71f8-409b-9544-d354e4e649a4',
      status: 'queued',
      created: 2022-06-01T20:57:51.552Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrgqztmobyge4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'eb2158ef-566f-44ee-92b7-a1b6628784a5',
      status: 'queued',
      created: 2022-06-01T20:57:46.652Z,
      pin: {
        cid: 'baeaaadjrgmzsynzwguzdkobugy4a',
        name: 'a67c9989-3656-4961-8ffa-c1dbe9275f4c',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
      status: 'queued',
      created: 2022-06-01T20:57:43.115Z,
      pin: {
        cid: 'baeaaadjrgmycymzxg4ydoojzheza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
      status: 'queued',
      created: 2022-06-01T20:57:37.856Z,
      pin: {
        cid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
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
  "cf-ray": "714add84dfb356e0-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:05 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":6,"results":[{"requestid":"5ff494d3-8d25-4b01-a505-bca77609cc37","status":"queued","created":"2022-06-01T20:57:55.636+00:00","pin":{"cid":"baeaaadjrgm4cyobrgu3tmmjsgm4q","_id":"5ff494d3-8d25-4b01-a505-bca77609cc37","sourceCid":"baeaaadjrgm4cyobrgu3tmmjsgm4q","contentCid":"baeaaadjrgm4cyobrgu3tmmjsgm4q","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:55.636+00:00","updated":"2022-06-01T20:57:55.636+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"b3a79d9f-b840-493c-a7f4-0febd6b276b1","status":"queued","created":"2022-06-01T20:57:52.316+00:00","pin":{"cid":"baeaaadjrgm4cyobrguytmnrzgmyq","_id":"b3a79d9f-b840-493c-a7f4-0febd6b276b1","sourceCid":"baeaaadjrgm4cyobrguytmnrzgmyq","contentCid":"baeaaadjrgm4cyobrguytmnrzgmyq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:52.316+00:00","updated":"2022-06-01T20:57:52.316+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"05523720-71f8-409b-9544-d354e4e649a4","status":"queued","created":"2022-06-01T20:57:51.552+00:00","pin":{"cid":"baeaaadjrgm4cyobrgqztmobyge4q","_id":"05523720-71f8-409b-9544-d354e4e649a4","sourceCid":"baeaaadjrgm4cyobrgqztmobyge4q","contentCid":"baeaaadjrgm4cyobrgqztmobyge4q","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:51.552+00:00","updated":"2022-06-01T20:57:51.552+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"eb2158ef-566f-44ee-92b7-a1b6628784a5","status":"queued","created":"2022-06-01T20:57:46.652+00:00","pin":{"cid":"baeaaadjrgmzsynzwguzdkobugy4a","_id":"eb2158ef-566f-44ee-92b7-a1b6628784a5","sourceCid":"baeaaadjrgmzsynzwguzdkobugy4a","contentCid":"baeaaadjrgmzsynzwguzdkobugy4a","authKey":315318824629964100,"name":"a67c9989-3656-4961-8ffa-c1dbe9275f4c","meta":null,"deleted":null,"created":"2022-06-01T20:57:46.652+00:00","updated":"2022-06-01T20:57:46.652+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"fc04ed13-a43f-4ee5-a8a6-bfddc542738b","status":"queued","created":"2022-06-01T20:57:43.115+00:00","pin":{"cid":"baeaaadjrgmycymzxg4ydoojzheza","_id":"fc04ed13-a43f-4ee5-a8a6-bfddc542738b","sourceCid":"baeaaadjrgmycymzxg4ydoojzheza","contentCid":"baeaaadjrgmycymzxg4ydoojzheza","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:43.115+00:00","updated":"2022-06-01T20:57:43.115+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"c59a0c34-ec04-432a-9f1a-e8af3609f59f","status":"queued","created":"2022-06-01T20:57:37.856+00:00","pin":{"cid":"baeaaadjrgi2cyojtg4ydkmbxha2q","_id":"c59a0c34-ec04-432a-9f1a-e8af3609f59f","sourceCid":"baeaaadjrgi2cyojtg4ydkmbxha2q","contentCid":"baeaaadjrgi2cyojtg4ydkmbxha2q","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:37.856+00:00","updated":"2022-06-01T20:57:37.856+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}]}
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
      requestid: 'eb2158ef-566f-44ee-92b7-a1b6628784a5',
      status: 'queued',
      created: '2022-06-01T20:57:46.652+00:00',
      pin: {
        cid: 'baeaaadjrgmzsynzwguzdkobugy4a',
        _id: 'eb2158ef-566f-44ee-92b7-a1b6628784a5',
        sourceCid: 'baeaaadjrgmzsynzwguzdkobugy4a',
        contentCid: 'baeaaadjrgmzsynzwguzdkobugy4a',
        authKey: 315318824629964100,
        name: 'a67c9989-3656-4961-8ffa-c1dbe9275f4c',
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:46.652+00:00',
        updated: '2022-06-01T20:57:46.652+00:00',
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
      requestid: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
      status: 'queued',
      created: '2022-06-01T20:57:43.115+00:00',
      pin: {
        cid: 'baeaaadjrgmycymzxg4ydoojzheza',
        _id: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
        sourceCid: 'baeaaadjrgmycymzxg4ydoojzheza',
        contentCid: 'baeaaadjrgmycymzxg4ydoojzheza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:43.115+00:00',
        updated: '2022-06-01T20:57:43.115+00:00',
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
      requestid: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
      status: 'queued',
      created: '2022-06-01T20:57:37.856+00:00',
      pin: {
        cid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
        _id: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
        sourceCid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
        contentCid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:37.856+00:00',
        updated: '2022-06-01T20:57:37.856+00:00',
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
      requestid: 'eb2158ef-566f-44ee-92b7-a1b6628784a5',
      status: 'queued',
      created: 2022-06-01T20:57:46.652Z,
      pin: {
        cid: 'baeaaadjrgmzsynzwguzdkobugy4a',
        name: 'a67c9989-3656-4961-8ffa-c1dbe9275f4c',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
      status: 'queued',
      created: 2022-06-01T20:57:43.115Z,
      pin: {
        cid: 'baeaaadjrgmycymzxg4ydoojzheza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
      status: 'queued',
      created: 2022-06-01T20:57:37.856Z,
      pin: {
        cid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
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
  "cf-ray": "714add23d8e681c9-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:50 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":3,"results":[{"requestid":"eb2158ef-566f-44ee-92b7-a1b6628784a5","status":"queued","created":"2022-06-01T20:57:46.652+00:00","pin":{"cid":"baeaaadjrgmzsynzwguzdkobugy4a","_id":"eb2158ef-566f-44ee-92b7-a1b6628784a5","sourceCid":"baeaaadjrgmzsynzwguzdkobugy4a","contentCid":"baeaaadjrgmzsynzwguzdkobugy4a","authKey":315318824629964100,"name":"a67c9989-3656-4961-8ffa-c1dbe9275f4c","meta":null,"deleted":null,"created":"2022-06-01T20:57:46.652+00:00","updated":"2022-06-01T20:57:46.652+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"fc04ed13-a43f-4ee5-a8a6-bfddc542738b","status":"queued","created":"2022-06-01T20:57:43.115+00:00","pin":{"cid":"baeaaadjrgmycymzxg4ydoojzheza","_id":"fc04ed13-a43f-4ee5-a8a6-bfddc542738b","sourceCid":"baeaaadjrgmycymzxg4ydoojzheza","contentCid":"baeaaadjrgmycymzxg4ydoojzheza","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:43.115+00:00","updated":"2022-06-01T20:57:43.115+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"c59a0c34-ec04-432a-9f1a-e8af3609f59f","status":"queued","created":"2022-06-01T20:57:37.856+00:00","pin":{"cid":"baeaaadjrgi2cyojtg4ydkmbxha2q","_id":"c59a0c34-ec04-432a-9f1a-e8af3609f59f","sourceCid":"baeaaadjrgi2cyojtg4ydkmbxha2q","contentCid":"baeaaadjrgi2cyojtg4ydkmbxha2q","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:37.856+00:00","updated":"2022-06-01T20:57:37.856+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}]}
```
## Can delete pin with requestid 'e39fd882-cc65-430f-8246-2c84c381f391' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/e39fd882-cc65-430f-8246-2c84c381f391

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/e39fd882-cc65-430f-8246-2c84c381f391
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
  "cf-ray": "714add916b1a5c64-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:07 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '3a652318-bea5-4445-93d5-2293412f7a30' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/3a652318-bea5-4445-93d5-2293412f7a30

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/3a652318-bea5-4445-93d5-2293412f7a30
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
  "cf-ray": "714add97b9cf0641-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:08 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '78b9c95d-a6d2-403a-b124-6be34bb8380f' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/78b9c95d-a6d2-403a-b124-6be34bb8380f

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/78b9c95d-a6d2-403a-b124-6be34bb8380f
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
  "cf-ray": "714add9dee855b41-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:09 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '9166bf41-dc97-4876-924e-fec8bd8b7bff' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/9166bf41-dc97-4876-924e-fec8bd8b7bff

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/9166bf41-dc97-4876-924e-fec8bd8b7bff
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
  "cf-ray": "714adda41b456fcb-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:10 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'c688a92a-da6b-428f-9950-8667a9eebef0' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/c688a92a-da6b-428f-9950-8667a9eebef0

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/c688a92a-da6b-428f-9950-8667a9eebef0
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
  "cf-ray": "714addaa58ce56e0-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:11 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '2860125f-0541-47b8-8b65-e2ccade6e91d' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/2860125f-0541-47b8-8b65-e2ccade6e91d

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/2860125f-0541-47b8-8b65-e2ccade6e91d
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
  "cf-ray": "714addb0ab5a0607-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:12 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'bee6f014-c201-42d7-9f3c-875cc153219b' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/bee6f014-c201-42d7-9f3c-875cc153219b

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/bee6f014-c201-42d7-9f3c-875cc153219b
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
  "cf-ray": "714addb6da615b9a-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:13 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '3af10143-cc62-48a3-8bb0-f753fbc52143' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/3af10143-cc62-48a3-8bb0-f753fbc52143

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/3af10143-cc62-48a3-8bb0-f753fbc52143
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
  "cf-ray": "714addbd1d515896-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:14 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10
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
  "cf-ray": "714addc35df55b41-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:15 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '5ff494d3-8d25-4b01-a505-bca77609cc37' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/5ff494d3-8d25-4b01-a505-bca77609cc37

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/5ff494d3-8d25-4b01-a505-bca77609cc37
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
  "cf-ray": "714addc9a90205fb-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:16 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'b3a79d9f-b840-493c-a7f4-0febd6b276b1' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/b3a79d9f-b840-493c-a7f4-0febd6b276b1

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/b3a79d9f-b840-493c-a7f4-0febd6b276b1
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
  "cf-ray": "714addd0fd5d82e0-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:17 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '05523720-71f8-409b-9544-d354e4e649a4' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/05523720-71f8-409b-9544-d354e4e649a4

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/05523720-71f8-409b-9544-d354e4e649a4
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
  "cf-ray": "714addd75e840607-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:18 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'eb2158ef-566f-44ee-92b7-a1b6628784a5' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/eb2158ef-566f-44ee-92b7-a1b6628784a5

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/eb2158ef-566f-44ee-92b7-a1b6628784a5
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
  "cf-ray": "714adddd7dd55b9a-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:19 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/fc04ed13-a43f-4ee5-a8a6-bfddc542738b

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/fc04ed13-a43f-4ee5-a8a6-bfddc542738b
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
  "cf-ray": "714adde3be2b5896-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:20 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'c59a0c34-ec04-432a-9f1a-e8af3609f59f' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/c59a0c34-ec04-432a-9f1a-e8af3609f59f

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/c59a0c34-ec04-432a-9f1a-e8af3609f59f
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
  "cf-ray": "714adde9f9f05b41-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Get all Pins created before 'Wed Jun 01 2022 20:57:55 GMT+0000 (Coordinated Universal Time)' - ✓ SUCCESS

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

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T20%3A57%3A55.636Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T20%3A57%3A55.636Z
```
{
  count: 5,
  results: [
    {
      requestid: 'b3a79d9f-b840-493c-a7f4-0febd6b276b1',
      status: 'queued',
      created: '2022-06-01T20:57:52.316+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrguytmnrzgmyq',
        _id: 'b3a79d9f-b840-493c-a7f4-0febd6b276b1',
        sourceCid: 'baeaaadjrgm4cyobrguytmnrzgmyq',
        contentCid: 'baeaaadjrgm4cyobrguytmnrzgmyq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:52.316+00:00',
        updated: '2022-06-01T20:57:52.316+00:00',
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
      requestid: '05523720-71f8-409b-9544-d354e4e649a4',
      status: 'queued',
      created: '2022-06-01T20:57:51.552+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrgqztmobyge4q',
        _id: '05523720-71f8-409b-9544-d354e4e649a4',
        sourceCid: 'baeaaadjrgm4cyobrgqztmobyge4q',
        contentCid: 'baeaaadjrgm4cyobrgqztmobyge4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:51.552+00:00',
        updated: '2022-06-01T20:57:51.552+00:00',
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
      requestid: 'eb2158ef-566f-44ee-92b7-a1b6628784a5',
      status: 'queued',
      created: '2022-06-01T20:57:46.652+00:00',
      pin: {
        cid: 'baeaaadjrgmzsynzwguzdkobugy4a',
        _id: 'eb2158ef-566f-44ee-92b7-a1b6628784a5',
        sourceCid: 'baeaaadjrgmzsynzwguzdkobugy4a',
        contentCid: 'baeaaadjrgmzsynzwguzdkobugy4a',
        authKey: 315318824629964100,
        name: 'a67c9989-3656-4961-8ffa-c1dbe9275f4c',
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:46.652+00:00',
        updated: '2022-06-01T20:57:46.652+00:00',
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
      requestid: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
      status: 'queued',
      created: '2022-06-01T20:57:43.115+00:00',
      pin: {
        cid: 'baeaaadjrgmycymzxg4ydoojzheza',
        _id: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
        sourceCid: 'baeaaadjrgmycymzxg4ydoojzheza',
        contentCid: 'baeaaadjrgmycymzxg4ydoojzheza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:43.115+00:00',
        updated: '2022-06-01T20:57:43.115+00:00',
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
      requestid: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
      status: 'queued',
      created: '2022-06-01T20:57:37.856+00:00',
      pin: {
        cid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
        _id: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
        sourceCid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
        contentCid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:37.856+00:00',
        updated: '2022-06-01T20:57:37.856+00:00',
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
      requestid: 'b3a79d9f-b840-493c-a7f4-0febd6b276b1',
      status: 'queued',
      created: 2022-06-01T20:57:52.316Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrguytmnrzgmyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '05523720-71f8-409b-9544-d354e4e649a4',
      status: 'queued',
      created: 2022-06-01T20:57:51.552Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrgqztmobyge4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'eb2158ef-566f-44ee-92b7-a1b6628784a5',
      status: 'queued',
      created: 2022-06-01T20:57:46.652Z,
      pin: {
        cid: 'baeaaadjrgmzsynzwguzdkobugy4a',
        name: 'a67c9989-3656-4961-8ffa-c1dbe9275f4c',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'fc04ed13-a43f-4ee5-a8a6-bfddc542738b',
      status: 'queued',
      created: 2022-06-01T20:57:43.115Z,
      pin: {
        cid: 'baeaaadjrgmycymzxg4ydoojzheza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'c59a0c34-ec04-432a-9f1a-e8af3609f59f',
      status: 'queued',
      created: 2022-06-01T20:57:37.856Z,
      pin: {
        cid: 'baeaaadjrgi2cyojtg4ydkmbxha2q',
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
  "cf-ray": "714addcfdca156e0-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:17 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":5,"results":[{"requestid":"b3a79d9f-b840-493c-a7f4-0febd6b276b1","status":"queued","created":"2022-06-01T20:57:52.316+00:00","pin":{"cid":"baeaaadjrgm4cyobrguytmnrzgmyq","_id":"b3a79d9f-b840-493c-a7f4-0febd6b276b1","sourceCid":"baeaaadjrgm4cyobrguytmnrzgmyq","contentCid":"baeaaadjrgm4cyobrguytmnrzgmyq","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:52.316+00:00","updated":"2022-06-01T20:57:52.316+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:52.316+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"05523720-71f8-409b-9544-d354e4e649a4","status":"queued","created":"2022-06-01T20:57:51.552+00:00","pin":{"cid":"baeaaadjrgm4cyobrgqztmobyge4q","_id":"05523720-71f8-409b-9544-d354e4e649a4","sourceCid":"baeaaadjrgm4cyobrgqztmobyge4q","contentCid":"baeaaadjrgm4cyobrgqztmobyge4q","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:51.552+00:00","updated":"2022-06-01T20:57:51.552+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:51.552+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"eb2158ef-566f-44ee-92b7-a1b6628784a5","status":"queued","created":"2022-06-01T20:57:46.652+00:00","pin":{"cid":"baeaaadjrgmzsynzwguzdkobugy4a","_id":"eb2158ef-566f-44ee-92b7-a1b6628784a5","sourceCid":"baeaaadjrgmzsynzwguzdkobugy4a","contentCid":"baeaaadjrgmzsynzwguzdkobugy4a","authKey":315318824629964100,"name":"a67c9989-3656-4961-8ffa-c1dbe9275f4c","meta":null,"deleted":null,"created":"2022-06-01T20:57:46.652+00:00","updated":"2022-06-01T20:57:46.652+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:46.652+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"fc04ed13-a43f-4ee5-a8a6-bfddc542738b","status":"queued","created":"2022-06-01T20:57:43.115+00:00","pin":{"cid":"baeaaadjrgmycymzxg4ydoojzheza","_id":"fc04ed13-a43f-4ee5-a8a6-bfddc542738b","sourceCid":"baeaaadjrgmycymzxg4ydoojzheza","contentCid":"baeaaadjrgmycymzxg4ydoojzheza","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:43.115+00:00","updated":"2022-06-01T20:57:43.115+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:43.115+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"c59a0c34-ec04-432a-9f1a-e8af3609f59f","status":"queued","created":"2022-06-01T20:57:37.856+00:00","pin":{"cid":"baeaaadjrgi2cyojtg4ydkmbxha2q","_id":"c59a0c34-ec04-432a-9f1a-e8af3609f59f","sourceCid":"baeaaadjrgi2cyojtg4ydkmbxha2q","contentCid":"baeaaadjrgi2cyojtg4ydkmbxha2q","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:37.856+00:00","updated":"2022-06-01T20:57:37.856+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:37.856+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}]}
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
  "cf-ray": "714addf03d83573a-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:22 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":0,"results":[]}
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
      requestid: 'e39fd882-cc65-430f-8246-2c84c381f391',
      status: 'queued',
      created: '2022-06-01T20:58:04.567+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobsge2tsmjrgi2q',
        _id: 'e39fd882-cc65-430f-8246-2c84c381f391',
        sourceCid: 'baeaaadjrgm4cyobsge2tsmjrgi2q',
        contentCid: 'baeaaadjrgm4cyobsge2tsmjrgi2q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:58:04.567+00:00',
        updated: '2022-06-01T20:58:04.567+00:00',
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
      requestid: '3a652318-bea5-4445-93d5-2293412f7a30',
      status: 'queued',
      created: '2022-06-01T20:58:03.232+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobsgeydonzrge4a',
        _id: '3a652318-bea5-4445-93d5-2293412f7a30',
        sourceCid: 'baeaaadjrgm4cyobsgeydonzrge4a',
        contentCid: 'baeaaadjrgm4cyobsgeydonzrge4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:58:03.232+00:00',
        updated: '2022-06-01T20:58:03.232+00:00',
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
      requestid: '78b9c95d-a6d2-403a-b124-6be34bb8380f',
      status: 'queued',
      created: '2022-06-01T20:58:01.703+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobsga2tkmrzgeya',
        _id: '78b9c95d-a6d2-403a-b124-6be34bb8380f',
        sourceCid: 'baeaaadjrgm4cyobsga2tkmrzgeya',
        contentCid: 'baeaaadjrgm4cyobsga2tkmrzgeya',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:58:01.703+00:00',
        updated: '2022-06-01T20:58:01.703+00:00',
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
      requestid: '9166bf41-dc97-4876-924e-fec8bd8b7bff',
      status: 'queued',
      created: '2022-06-01T20:58:01.334+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobsgaydeobzgaza',
        _id: '9166bf41-dc97-4876-924e-fec8bd8b7bff',
        sourceCid: 'baeaaadjrgm4cyobsgaydeobzgaza',
        contentCid: 'baeaaadjrgm4cyobsgaydeobzgaza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:58:01.334+00:00',
        updated: '2022-06-01T20:58:01.334+00:00',
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
      requestid: 'c688a92a-da6b-428f-9950-8667a9eebef0',
      status: 'queued',
      created: '2022-06-01T20:57:59.976+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrheztgnzsheza',
        _id: 'c688a92a-da6b-428f-9950-8667a9eebef0',
        sourceCid: 'baeaaadjrgm4cyobrheztgnzsheza',
        contentCid: 'baeaaadjrgm4cyobrheztgnzsheza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:59.976+00:00',
        updated: '2022-06-01T20:57:59.976+00:00',
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
      requestid: '2860125f-0541-47b8-8b65-e2ccade6e91d',
      status: 'queued',
      created: '2022-06-01T20:57:58.999+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrha3tmnzzha2a',
        _id: '2860125f-0541-47b8-8b65-e2ccade6e91d',
        sourceCid: 'baeaaadjrgm4cyobrha3tmnzzha2a',
        contentCid: 'baeaaadjrgm4cyobrha3tmnzzha2a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:58.999+00:00',
        updated: '2022-06-01T20:57:58.999+00:00',
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
      requestid: 'bee6f014-c201-42d7-9f3c-875cc153219b',
      status: 'queued',
      created: '2022-06-01T20:57:58.346+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrg43tmmbygy4q',
        _id: 'bee6f014-c201-42d7-9f3c-875cc153219b',
        sourceCid: 'baeaaadjrgm4cyobrg43tmmbygy4q',
        contentCid: 'baeaaadjrgm4cyobrg43tmmbygy4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:58.346+00:00',
        updated: '2022-06-01T20:57:58.346+00:00',
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
      requestid: '3af10143-cc62-48a3-8bb0-f753fbc52143',
      status: 'queued',
      created: '2022-06-01T20:57:57.764+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrg4ydimzxgu4a',
        _id: '3af10143-cc62-48a3-8bb0-f753fbc52143',
        sourceCid: 'baeaaadjrgm4cyobrg4ydimzxgu4a',
        contentCid: 'baeaaadjrgm4cyobrg4ydimzxgu4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:57.764+00:00',
        updated: '2022-06-01T20:57:57.764+00:00',
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
      requestid: '27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10',
      status: 'queued',
      created: '2022-06-01T20:57:56.549+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrgyztkobrgq4a',
        _id: '27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10',
        sourceCid: 'baeaaadjrgm4cyobrgyztkobrgq4a',
        contentCid: 'baeaaadjrgm4cyobrgyztkobrgq4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:56.549+00:00',
        updated: '2022-06-01T20:57:56.549+00:00',
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
      requestid: '5ff494d3-8d25-4b01-a505-bca77609cc37',
      status: 'queued',
      created: '2022-06-01T20:57:55.636+00:00',
      pin: {
        cid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
        _id: '5ff494d3-8d25-4b01-a505-bca77609cc37',
        sourceCid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
        contentCid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-01T20:57:55.636+00:00',
        updated: '2022-06-01T20:57:55.636+00:00',
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
      requestid: 'e39fd882-cc65-430f-8246-2c84c381f391',
      status: 'queued',
      created: 2022-06-01T20:58:04.567Z,
      pin: {
        cid: 'baeaaadjrgm4cyobsge2tsmjrgi2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '3a652318-bea5-4445-93d5-2293412f7a30',
      status: 'queued',
      created: 2022-06-01T20:58:03.232Z,
      pin: {
        cid: 'baeaaadjrgm4cyobsgeydonzrge4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '78b9c95d-a6d2-403a-b124-6be34bb8380f',
      status: 'queued',
      created: 2022-06-01T20:58:01.703Z,
      pin: {
        cid: 'baeaaadjrgm4cyobsga2tkmrzgeya',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '9166bf41-dc97-4876-924e-fec8bd8b7bff',
      status: 'queued',
      created: 2022-06-01T20:58:01.334Z,
      pin: {
        cid: 'baeaaadjrgm4cyobsgaydeobzgaza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'c688a92a-da6b-428f-9950-8667a9eebef0',
      status: 'queued',
      created: 2022-06-01T20:57:59.976Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrheztgnzsheza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '2860125f-0541-47b8-8b65-e2ccade6e91d',
      status: 'queued',
      created: 2022-06-01T20:57:58.999Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrha3tmnzzha2a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'bee6f014-c201-42d7-9f3c-875cc153219b',
      status: 'queued',
      created: 2022-06-01T20:57:58.346Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrg43tmmbygy4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '3af10143-cc62-48a3-8bb0-f753fbc52143',
      status: 'queued',
      created: 2022-06-01T20:57:57.764Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrg4ydimzxgu4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10',
      status: 'queued',
      created: 2022-06-01T20:57:56.549Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrgyztkobrgq4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '5ff494d3-8d25-4b01-a505-bca77609cc37',
      status: 'queued',
      created: 2022-06-01T20:57:55.636Z,
      pin: {
        cid: 'baeaaadjrgm4cyobrgu3tmmjsgm4q',
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
  "cf-ray": "714add8b1db25b9a-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:06 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":15,"results":[{"requestid":"e39fd882-cc65-430f-8246-2c84c381f391","status":"queued","created":"2022-06-01T20:58:04.567+00:00","pin":{"cid":"baeaaadjrgm4cyobsge2tsmjrgi2q","_id":"e39fd882-cc65-430f-8246-2c84c381f391","sourceCid":"baeaaadjrgm4cyobsge2tsmjrgi2q","contentCid":"baeaaadjrgm4cyobsge2tsmjrgi2q","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:58:04.567+00:00","updated":"2022-06-01T20:58:04.567+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:04.567+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"3a652318-bea5-4445-93d5-2293412f7a30","status":"queued","created":"2022-06-01T20:58:03.232+00:00","pin":{"cid":"baeaaadjrgm4cyobsgeydonzrge4a","_id":"3a652318-bea5-4445-93d5-2293412f7a30","sourceCid":"baeaaadjrgm4cyobsgeydonzrge4a","contentCid":"baeaaadjrgm4cyobsgeydonzrge4a","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:58:03.232+00:00","updated":"2022-06-01T20:58:03.232+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:03.232+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"78b9c95d-a6d2-403a-b124-6be34bb8380f","status":"queued","created":"2022-06-01T20:58:01.703+00:00","pin":{"cid":"baeaaadjrgm4cyobsga2tkmrzgeya","_id":"78b9c95d-a6d2-403a-b124-6be34bb8380f","sourceCid":"baeaaadjrgm4cyobsga2tkmrzgeya","contentCid":"baeaaadjrgm4cyobsga2tkmrzgeya","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:58:01.703+00:00","updated":"2022-06-01T20:58:01.703+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.703+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"9166bf41-dc97-4876-924e-fec8bd8b7bff","status":"queued","created":"2022-06-01T20:58:01.334+00:00","pin":{"cid":"baeaaadjrgm4cyobsgaydeobzgaza","_id":"9166bf41-dc97-4876-924e-fec8bd8b7bff","sourceCid":"baeaaadjrgm4cyobsgaydeobzgaza","contentCid":"baeaaadjrgm4cyobsgaydeobzgaza","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:58:01.334+00:00","updated":"2022-06-01T20:58:01.334+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:58:01.334+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"c688a92a-da6b-428f-9950-8667a9eebef0","status":"queued","created":"2022-06-01T20:57:59.976+00:00","pin":{"cid":"baeaaadjrgm4cyobrheztgnzsheza","_id":"c688a92a-da6b-428f-9950-8667a9eebef0","sourceCid":"baeaaadjrgm4cyobrheztgnzsheza","contentCid":"baeaaadjrgm4cyobrheztgnzsheza","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:59.976+00:00","updated":"2022-06-01T20:57:59.976+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:59.976+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"2860125f-0541-47b8-8b65-e2ccade6e91d","status":"queued","created":"2022-06-01T20:57:58.999+00:00","pin":{"cid":"baeaaadjrgm4cyobrha3tmnzzha2a","_id":"2860125f-0541-47b8-8b65-e2ccade6e91d","sourceCid":"baeaaadjrgm4cyobrha3tmnzzha2a","contentCid":"baeaaadjrgm4cyobrha3tmnzzha2a","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:58.999+00:00","updated":"2022-06-01T20:57:58.999+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.999+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"bee6f014-c201-42d7-9f3c-875cc153219b","status":"queued","created":"2022-06-01T20:57:58.346+00:00","pin":{"cid":"baeaaadjrgm4cyobrg43tmmbygy4q","_id":"bee6f014-c201-42d7-9f3c-875cc153219b","sourceCid":"baeaaadjrgm4cyobrg43tmmbygy4q","contentCid":"baeaaadjrgm4cyobrg43tmmbygy4q","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:58.346+00:00","updated":"2022-06-01T20:57:58.346+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:58.346+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"3af10143-cc62-48a3-8bb0-f753fbc52143","status":"queued","created":"2022-06-01T20:57:57.764+00:00","pin":{"cid":"baeaaadjrgm4cyobrg4ydimzxgu4a","_id":"3af10143-cc62-48a3-8bb0-f753fbc52143","sourceCid":"baeaaadjrgm4cyobrg4ydimzxgu4a","contentCid":"baeaaadjrgm4cyobrg4ydimzxgu4a","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:57.764+00:00","updated":"2022-06-01T20:57:57.764+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:57.764+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10","status":"queued","created":"2022-06-01T20:57:56.549+00:00","pin":{"cid":"baeaaadjrgm4cyobrgyztkobrgq4a","_id":"27f465c3-1312-4b2f-bbfe-9c9b3ddf1d10","sourceCid":"baeaaadjrgm4cyobrgyztkobrgq4a","contentCid":"baeaaadjrgm4cyobrgyztkobrgq4a","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:56.549+00:00","updated":"2022-06-01T20:57:56.549+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:56.549+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]},{"requestid":"5ff494d3-8d25-4b01-a505-bca77609cc37","status":"queued","created":"2022-06-01T20:57:55.636+00:00","pin":{"cid":"baeaaadjrgm4cyobrgu3tmmjsgm4q","_id":"5ff494d3-8d25-4b01-a505-bca77609cc37","sourceCid":"baeaaadjrgm4cyobrgu3tmmjsgm4q","contentCid":"baeaaadjrgm4cyobrgu3tmmjsgm4q","authKey":315318824629964100,"name":null,"meta":null,"deleted":null,"created":"2022-06-01T20:57:55.636+00:00","updated":"2022-06-01T20:57:55.636+00:00","pins":[{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1","peerName":"web3-storage-sv15","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU","peerName":"web3-storage-dc13","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW","peerName":"web3-storage-am6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK","peerName":"web3-storage-sv15-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj","peerName":"web3-storage-am6-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ","peerName":"web3-storage-dc13-2","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP","peerName":"web3-storage-dc13-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy","peerName":"web3-storage-sv15-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m","peerName":"web3-storage-am6-3","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL","peerName":"web3-storage-am6-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA","peerName":"web3-storage-am6-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V","peerName":"web3-storage-dc13-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k","peerName":"web3-storage-dc13-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i","peerName":"web3-storage-sv15-5","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr","peerName":"web3-storage-sv15-4","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn","peerName":"web3-storage-am6-6","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG","peerName":"web3-storage-am6-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF","peerName":"web3-storage-dc13-8","region":null},{"status":"Unpinned","updated":"2022-06-01T20:57:55.636+00:00","peerId":"12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT","peerName":"web3-storage-sv15-8","region":null}]},"delegates":[]}]}
```
