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
  "cf-ray": "717545852a1e8266-IAD",
  "connection": "close",
  "content-length": "87",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:07 GMT",
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
  "cf-ray": "7175458a8d03829c-IAD",
  "connection": "close",
  "content-length": "82",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:07 GMT",
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
## Pins post of CID 'baeaaadbsgm4cynzwhaytsobqgi' - ✘ FAILED

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
{"cid":"baeaaadbsgm4cynzwhaytsobqgi"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
  status: 'queued',
  created: '2022-06-07T00:29:09.01+00:00',
  pin: {
    cid: 'baeaaadbsgm4cynzwhaytsobqgi',
    _id: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
    sourceCid: 'baeaaadbsgm4cynzwhaytsobqgi',
    contentCid: 'baeaaadbsgm4cynzwhaytsobqgi',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:09.01+00:00',
    updated: '2022-06-07T00:29:09.01+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:09.01+00:00',
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
  requestid: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
  status: 'queued',
  created: 2022-06-07T00:29:09.010Z,
  pin: {
    cid: 'baeaaadbsgm4cynzwhaytsobqgi',
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
  "cf-ray": "71754590dcaf0664-IAD",
  "connection": "close",
  "content-length": "3769",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:09 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "a331416f-a198-4a37-9d9a-78d7fcf69c67",
  "status": "queued",
  "created": "2022-06-07T00:29:09.01+00:00",
  "pin": {
    "cid": "baeaaadbsgm4cynzwhaytsobqgi",
    "_id": "a331416f-a198-4a37-9d9a-78d7fcf69c67",
    "sourceCid": "baeaaadbsgm4cynzwhaytsobqgi",
    "contentCid": "baeaaadbsgm4cynzwhaytsobqgi",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:09.01+00:00",
    "updated": "2022-06-07T00:29:09.01+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:09.01+00:00",
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

#### Request - DELETE: https://api.web3.storage/pins/b2856707-1894-45ea-a7eb-597e20c370f0

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/b2856707-1894-45ea-a7eb-597e20c370f0
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
  "cf-ray": "7175459c0eb581b1-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:10 GMT",
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
{"cid":"baeaaadjsgm4symrzgi2tqobyguzq"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'b2856707-1894-45ea-a7eb-597e20c370f0',
  status: 'queued',
  created: '2022-06-07T00:29:10.152+00:00',
  pin: {
    cid: 'baeaaadjsgm4symrzgi2tqobyguzq',
    _id: 'b2856707-1894-45ea-a7eb-597e20c370f0',
    sourceCid: 'baeaaadjsgm4symrzgi2tqobyguzq',
    contentCid: 'baeaaadjsgm4symrzgi2tqobyguzq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:10.152+00:00',
    updated: '2022-06-07T00:29:10.152+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:10.152+00:00',
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
  requestid: 'b2856707-1894-45ea-a7eb-597e20c370f0',
  status: 'queued',
  created: 2022-06-07T00:29:10.152Z,
  pin: {
    cid: 'baeaaadjsgm4symrzgi2tqobyguzq',
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
  "cf-ray": "71754597092d05d6-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:10 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "b2856707-1894-45ea-a7eb-597e20c370f0",
  "status": "queued",
  "created": "2022-06-07T00:29:10.152+00:00",
  "pin": {
    "cid": "baeaaadjsgm4symrzgi2tqobyguzq",
    "_id": "b2856707-1894-45ea-a7eb-597e20c370f0",
    "sourceCid": "baeaaadjsgm4symrzgi2tqobyguzq",
    "contentCid": "baeaaadjsgm4symrzgi2tqobyguzq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:10.152+00:00",
    "updated": "2022-06-07T00:29:10.152+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:10.152+00:00",
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
      requestid: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
      status: 'queued',
      created: '2022-06-07T00:29:09.01+00:00',
      pin: {
        cid: 'baeaaadbsgm4cynzwhaytsobqgi',
        _id: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
        sourceCid: 'baeaaadbsgm4cynzwhaytsobqgi',
        contentCid: 'baeaaadbsgm4cynzwhaytsobqgi',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:09.01+00:00',
        updated: '2022-06-07T00:29:09.01+00:00',
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
      requestid: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
      status: 'queued',
      created: 2022-06-07T00:29:09.010Z,
      pin: {
        cid: 'baeaaadbsgm4cynzwhaytsobqgi',
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
  "cf-ray": "7175459fd8088f22-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:11 GMT",
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
      "requestid": "a331416f-a198-4a37-9d9a-78d7fcf69c67",
      "status": "queued",
      "created": "2022-06-07T00:29:09.01+00:00",
      "pin": {
        "cid": "baeaaadbsgm4cynzwhaytsobqgi",
        "_id": "a331416f-a198-4a37-9d9a-78d7fcf69c67",
        "sourceCid": "baeaaadbsgm4cynzwhaytsobqgi",
        "contentCid": "baeaaadbsgm4cynzwhaytsobqgi",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:09.01+00:00",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
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

#### Request - GET: https://api.web3.storage/pins/28972b26-df11-4ed0-ae41-b687ca2fdbc6

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/28972b26-df11-4ed0-ae41-b687ca2fdbc6
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
  "cf-ray": "717545b2ecfe5d85-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:14 GMT",
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

#### Request - GET: https://api.web3.storage/pins/f350373a-4868-43e4-a2c4-ed4a39e9ee47

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/f350373a-4868-43e4-a2c4-ed4a39e9ee47
```
{
  requestid: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
  status: 'queued',
  created: '2022-06-07T00:29:13.89+00:00',
  pin: {
    cid: 'baeaaadbsgqzsyobzgi3dqmrxge',
    _id: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
    sourceCid: 'baeaaadbsgqzsyobzgi3dqmrxge',
    contentCid: 'baeaaadbsgqzsyobzgi3dqmrxge',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:13.89+00:00',
    updated: '2022-06-07T00:29:13.89+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
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
  requestid: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
  status: 'queued',
  created: 2022-06-07T00:29:13.890Z,
  pin: {
    cid: 'baeaaadbsgqzsyobzgi3dqmrxge',
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
  "cf-ray": "717545b92b348220-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:15 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "f350373a-4868-43e4-a2c4-ed4a39e9ee47",
  "status": "queued",
  "created": "2022-06-07T00:29:13.89+00:00",
  "pin": {
    "cid": "baeaaadbsgqzsyobzgi3dqmrxge",
    "_id": "f350373a-4868-43e4-a2c4-ed4a39e9ee47",
    "sourceCid": "baeaaadbsgqzsyobzgi3dqmrxge",
    "contentCid": "baeaaadbsgqzsyobzgi3dqmrxge",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:13.89+00:00",
    "updated": "2022-06-07T00:29:13.89+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Pin's with requestid '28972b26-df11-4ed0-ae41-b687ca2fdbc6' can have cid 'baeaaadjsgqysynrwgy4dqobvgu2a' replaced with 'baeaaadbsgqzsyobzgi3dqmrxge' - ✓ SUCCESS

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

#### Request - POST: https://api.web3.storage/pins/28972b26-df11-4ed0-ae41-b687ca2fdbc6

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbsgqzsyobzgi3dqmrxge"}
```
#### Response data from https://api.web3.storage/pins/28972b26-df11-4ed0-ae41-b687ca2fdbc6
```
{
  requestid: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
  status: 'queued',
  created: '2022-06-07T00:29:13.89+00:00',
  pin: {
    cid: 'baeaaadbsgqzsyobzgi3dqmrxge',
    _id: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
    sourceCid: 'baeaaadbsgqzsyobzgi3dqmrxge',
    contentCid: 'baeaaadbsgqzsyobzgi3dqmrxge',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:13.89+00:00',
    updated: '2022-06-07T00:29:13.89+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:13.89+00:00',
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
  requestid: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
  status: 'queued',
  created: 2022-06-07T00:29:13.890Z,
  pin: {
    cid: 'baeaaadbsgqzsyobzgi3dqmrxge',
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
  "cf-ray": "717545ac5aab59fe-IAD",
  "connection": "close",
  "content-length": "3769",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:14 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "f350373a-4868-43e4-a2c4-ed4a39e9ee47",
  "status": "queued",
  "created": "2022-06-07T00:29:13.89+00:00",
  "pin": {
    "cid": "baeaaadbsgqzsyobzgi3dqmrxge",
    "_id": "f350373a-4868-43e4-a2c4-ed4a39e9ee47",
    "sourceCid": "baeaaadbsgqzsyobzgi3dqmrxge",
    "contentCid": "baeaaadbsgqzsyobzgi3dqmrxge",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:13.89+00:00",
    "updated": "2022-06-07T00:29:13.89+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:13.89+00:00",
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

  ✓ Could obtain requestid from new pin (28972b26-df11-4ed0-ae41-b687ca2fdbc6) (success)

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
{"cid":"baeaaadjsgqysynrwgy4dqobvgu2a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '28972b26-df11-4ed0-ae41-b687ca2fdbc6',
  status: 'queued',
  created: '2022-06-07T00:29:12.79+00:00',
  pin: {
    cid: 'baeaaadjsgqysynrwgy4dqobvgu2a',
    _id: '28972b26-df11-4ed0-ae41-b687ca2fdbc6',
    sourceCid: 'baeaaadjsgqysynrwgy4dqobvgu2a',
    contentCid: 'baeaaadjsgqysynrwgy4dqobvgu2a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:12.79+00:00',
    updated: '2022-06-07T00:29:12.79+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:12.79+00:00',
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
  requestid: '28972b26-df11-4ed0-ae41-b687ca2fdbc6',
  status: 'queued',
  created: 2022-06-07T00:29:12.790Z,
  pin: {
    cid: 'baeaaadjsgqysynrwgy4dqobvgu2a',
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
  "cf-ray": "717545a60ef30612-IAD",
  "connection": "close",
  "content-length": "3775",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:12 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "28972b26-df11-4ed0-ae41-b687ca2fdbc6",
  "status": "queued",
  "created": "2022-06-07T00:29:12.79+00:00",
  "pin": {
    "cid": "baeaaadjsgqysynrwgy4dqobvgu2a",
    "_id": "28972b26-df11-4ed0-ae41-b687ca2fdbc6",
    "sourceCid": "baeaaadjsgqysynrwgy4dqobvgu2a",
    "contentCid": "baeaaadjsgqysynrwgy4dqobvgu2a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:12.79+00:00",
    "updated": "2022-06-07T00:29:12.79+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:12.79+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can retrieve pin with name 'a45365d5-1114-49ae-8b2f-c67a9bf42de0' via the 'exact' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://api.web3.storage/pins?name=a45365d5-1114-49ae-8b2f-c67a9bf42de0&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=a45365d5-1114-49ae-8b2f-c67a9bf42de0&match=exact
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
  "cf-ray": "717545c61e3d8203-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:17 GMT",
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
## Can retrieve pin with name 'A45365D5-1114-49AE-8B2F-C67A9BF42DE0' via the 'iexact' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://api.web3.storage/pins?name=A45365D5-1114-49AE-8B2F-C67A9BF42DE0&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=A45365D5-1114-49AE-8B2F-C67A9BF42DE0&match=iexact
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
  "cf-ray": "717545c9c84e5a39-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:18 GMT",
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
## Can retrieve pin with name '1114-49ae-8b2f-c67' via the 'partial' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://api.web3.storage/pins?name=1114-49ae-8b2f-c67&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=1114-49ae-8b2f-c67&match=partial
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
  "cf-ray": "717545cfff9d81ff-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:19 GMT",
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
## Can retrieve pin with name '1114-49AE-8B2F-C67' via the 'ipartial' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://api.web3.storage/pins?name=1114-49AE-8B2F-C67&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=1114-49AE-8B2F-C67&match=ipartial
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
  "cf-ray": "717545d63e408257-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:20 GMT",
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
## Can create a pin with name='a45365d5-1114-49ae-8b2f-c67a9bf42de0' - ✘ FAILED

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
{"cid":"baeaaadjsgq2syobsgm2tgmrsgu4a","name":"a45365d5-1114-49ae-8b2f-c67a9bf42de0"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '7e1d0fb5-2393-4063-9b52-564f2d5fc0c0',
  status: 'queued',
  created: '2022-06-07T00:29:16.985+00:00',
  pin: {
    cid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
    _id: '7e1d0fb5-2393-4063-9b52-564f2d5fc0c0',
    sourceCid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
    contentCid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
    authKey: '315318824629964106',
    name: 'a45365d5-1114-49ae-8b2f-c67a9bf42de0',
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:16.985+00:00',
    updated: '2022-06-07T00:29:16.985+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:16.985+00:00',
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
  requestid: '7e1d0fb5-2393-4063-9b52-564f2d5fc0c0',
  status: 'queued',
  created: 2022-06-07T00:29:16.985Z,
  pin: {
    cid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
    name: 'a45365d5-1114-49ae-8b2f-c67a9bf42de0',
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
  "cf-ray": "717545bd39925c2e-IAD",
  "connection": "close",
  "content-length": "3831",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:17 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "7e1d0fb5-2393-4063-9b52-564f2d5fc0c0",
  "status": "queued",
  "created": "2022-06-07T00:29:16.985+00:00",
  "pin": {
    "cid": "baeaaadjsgq2syobsgm2tgmrsgu4a",
    "_id": "7e1d0fb5-2393-4063-9b52-564f2d5fc0c0",
    "sourceCid": "baeaaadjsgq2syobsgm2tgmrsgu4a",
    "contentCid": "baeaaadjsgq2syobsgm2tgmrsgu4a",
    "authKey": "315318824629964106",
    "name": "a45365d5-1114-49ae-8b2f-c67a9bf42de0",
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:16.985+00:00",
    "updated": "2022-06-07T00:29:16.985+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsguycynzygi2tmojzha3a' - ✓ SUCCESS

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
{"cid":"baeaaadjsguycynzygi2tmojzha3a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '0a30e206-3002-46d9-a77c-6dc9d54c46ff',
  status: 'queued',
  created: '2022-06-07T00:29:22.126+00:00',
  pin: {
    cid: 'baeaaadjsguycynzygi2tmojzha3a',
    _id: '0a30e206-3002-46d9-a77c-6dc9d54c46ff',
    sourceCid: 'baeaaadjsguycynzygi2tmojzha3a',
    contentCid: 'baeaaadjsguycynzygi2tmojzha3a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:22.126+00:00',
    updated: '2022-06-07T00:29:22.126+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:22.126+00:00',
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
  requestid: '0a30e206-3002-46d9-a77c-6dc9d54c46ff',
  status: 'queued',
  created: 2022-06-07T00:29:22.126Z,
  pin: {
    cid: 'baeaaadjsguycynzygi2tmojzha3a',
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
  "cf-ray": "717545df48146f98-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:22 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "0a30e206-3002-46d9-a77c-6dc9d54c46ff",
  "status": "queued",
  "created": "2022-06-07T00:29:22.126+00:00",
  "pin": {
    "cid": "baeaaadjsguycynzygi2tmojzha3a",
    "_id": "0a30e206-3002-46d9-a77c-6dc9d54c46ff",
    "sourceCid": "baeaaadjsguycynzygi2tmojzha3a",
    "contentCid": "baeaaadjsguycynzygi2tmojzha3a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:22.126+00:00",
    "updated": "2022-06-07T00:29:22.126+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsguycynzygm2dcmbwheyq' - ✓ SUCCESS

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
{"cid":"baeaaadjsguycynzygm2dcmbwheyq"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '4f1c04c1-cebd-4f89-ad02-09429280b3e5',
  status: 'queued',
  created: '2022-06-07T00:29:26.235+00:00',
  pin: {
    cid: 'baeaaadjsguycynzygm2dcmbwheyq',
    _id: '4f1c04c1-cebd-4f89-ad02-09429280b3e5',
    sourceCid: 'baeaaadjsguycynzygm2dcmbwheyq',
    contentCid: 'baeaaadjsguycynzygm2dcmbwheyq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:26.235+00:00',
    updated: '2022-06-07T00:29:26.235+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.235+00:00',
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
  requestid: '4f1c04c1-cebd-4f89-ad02-09429280b3e5',
  status: 'queued',
  created: 2022-06-07T00:29:26.235Z,
  pin: {
    cid: 'baeaaadjsguycynzygm2dcmbwheyq',
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
  "cf-ray": "717545e7cb075cbe-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "4f1c04c1-cebd-4f89-ad02-09429280b3e5",
  "status": "queued",
  "created": "2022-06-07T00:29:26.235+00:00",
  "pin": {
    "cid": "baeaaadjsguycynzygm2dcmbwheyq",
    "_id": "4f1c04c1-cebd-4f89-ad02-09429280b3e5",
    "sourceCid": "baeaaadjsguycynzygm2dcmbwheyq",
    "contentCid": "baeaaadjsguycynzygm2dcmbwheyq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:26.235+00:00",
    "updated": "2022-06-07T00:29:26.235+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsguycynzygm4tkmzshe2q' - ✓ SUCCESS

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
{"cid":"baeaaadjsguycynzygm4tkmzshe2q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '659e58d7-1227-41a6-9a26-e7fe1e27f8c7',
  status: 'queued',
  created: '2022-06-07T00:29:26.57+00:00',
  pin: {
    cid: 'baeaaadjsguycynzygm4tkmzshe2q',
    _id: '659e58d7-1227-41a6-9a26-e7fe1e27f8c7',
    sourceCid: 'baeaaadjsguycynzygm4tkmzshe2q',
    contentCid: 'baeaaadjsguycynzygm4tkmzshe2q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:26.57+00:00',
    updated: '2022-06-07T00:29:26.57+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:26.57+00:00',
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
  requestid: '659e58d7-1227-41a6-9a26-e7fe1e27f8c7',
  status: 'queued',
  created: 2022-06-07T00:29:26.570Z,
  pin: {
    cid: 'baeaaadjsguycynzygm4tkmzshe2q',
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
  "cf-ray": "717545fffbf45a39-IAD",
  "connection": "close",
  "content-length": "3775",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "659e58d7-1227-41a6-9a26-e7fe1e27f8c7",
  "status": "queued",
  "created": "2022-06-07T00:29:26.57+00:00",
  "pin": {
    "cid": "baeaaadjsguycynzygm4tkmzshe2q",
    "_id": "659e58d7-1227-41a6-9a26-e7fe1e27f8c7",
    "sourceCid": "baeaaadjsguycynzygm4tkmzshe2q",
    "contentCid": "baeaaadjsguycynzygm4tkmzshe2q",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:26.57+00:00",
    "updated": "2022-06-07T00:29:26.57+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsguycynzygq2dgnrrhe4a' - ✓ SUCCESS

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
{"cid":"baeaaadjsguycynzygq2dgnrrhe4a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'f6b07865-cf08-4208-8bca-a8b131d10412',
  status: 'queued',
  created: '2022-06-07T00:29:27.913+00:00',
  pin: {
    cid: 'baeaaadjsguycynzygq2dgnrrhe4a',
    _id: 'f6b07865-cf08-4208-8bca-a8b131d10412',
    sourceCid: 'baeaaadjsguycynzygq2dgnrrhe4a',
    contentCid: 'baeaaadjsguycynzygq2dgnrrhe4a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:27.913+00:00',
    updated: '2022-06-07T00:29:27.913+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:27.913+00:00',
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
  requestid: 'f6b07865-cf08-4208-8bca-a8b131d10412',
  status: 'queued',
  created: 2022-06-07T00:29:27.913Z,
  pin: {
    cid: 'baeaaadjsguycynzygq2dgnrrhe4a',
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
  "cf-ray": "71754604bca65afe-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:28 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "f6b07865-cf08-4208-8bca-a8b131d10412",
  "status": "queued",
  "created": "2022-06-07T00:29:27.913+00:00",
  "pin": {
    "cid": "baeaaadjsguycynzygq2dgnrrhe4a",
    "_id": "f6b07865-cf08-4208-8bca-a8b131d10412",
    "sourceCid": "baeaaadjsguycynzygq2dgnrrhe4a",
    "contentCid": "baeaaadjsguycynzygq2dgnrrhe4a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:27.913+00:00",
    "updated": "2022-06-07T00:29:27.913+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsguycynzyguytemjvgazq' - ✓ SUCCESS

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
{"cid":"baeaaadjsguycynzyguytemjvgazq"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'cac1d520-a776-41bb-8087-049e64ca9fb2',
  status: 'queued',
  created: '2022-06-07T00:29:28.878+00:00',
  pin: {
    cid: 'baeaaadjsguycynzyguytemjvgazq',
    _id: 'cac1d520-a776-41bb-8087-049e64ca9fb2',
    sourceCid: 'baeaaadjsguycynzyguytemjvgazq',
    contentCid: 'baeaaadjsguycynzyguytemjvgazq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:28.878+00:00',
    updated: '2022-06-07T00:29:28.878+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:28.878+00:00',
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
  requestid: 'cac1d520-a776-41bb-8087-049e64ca9fb2',
  status: 'queued',
  created: 2022-06-07T00:29:28.878Z,
  pin: {
    cid: 'baeaaadjsguycynzyguytemjvgazq',
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
  "cf-ray": "7175460b0c4b82c2-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:28 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "cac1d520-a776-41bb-8087-049e64ca9fb2",
  "status": "queued",
  "created": "2022-06-07T00:29:28.878+00:00",
  "pin": {
    "cid": "baeaaadjsguycynzyguytemjvgazq",
    "_id": "cac1d520-a776-41bb-8087-049e64ca9fb2",
    "sourceCid": "baeaaadjsguycynzyguytemjvgazq",
    "contentCid": "baeaaadjsguycynzyguytemjvgazq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:28.878+00:00",
    "updated": "2022-06-07T00:29:28.878+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsguycynzygu3demzwga3a' - ✓ SUCCESS

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
{"cid":"baeaaadjsguycynzygu3demzwga3a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '2c0eed59-dc5c-4450-ad99-5866227f27e6',
  status: 'queued',
  created: '2022-06-07T00:29:30.149+00:00',
  pin: {
    cid: 'baeaaadjsguycynzygu3demzwga3a',
    _id: '2c0eed59-dc5c-4450-ad99-5866227f27e6',
    sourceCid: 'baeaaadjsguycynzygu3demzwga3a',
    contentCid: 'baeaaadjsguycynzygu3demzwga3a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:30.149+00:00',
    updated: '2022-06-07T00:29:30.149+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:30.149+00:00',
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
  requestid: '2c0eed59-dc5c-4450-ad99-5866227f27e6',
  status: 'queued',
  created: 2022-06-07T00:29:30.149Z,
  pin: {
    cid: 'baeaaadjsguycynzygu3demzwga3a',
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
  "cf-ray": "717546114de65a87-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:30 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "2c0eed59-dc5c-4450-ad99-5866227f27e6",
  "status": "queued",
  "created": "2022-06-07T00:29:30.149+00:00",
  "pin": {
    "cid": "baeaaadjsguycynzygu3demzwga3a",
    "_id": "2c0eed59-dc5c-4450-ad99-5866227f27e6",
    "sourceCid": "baeaaadjsguycynzygu3demzwga3a",
    "contentCid": "baeaaadjsguycynzygu3demzwga3a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:30.149+00:00",
    "updated": "2022-06-07T00:29:30.149+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsguycynzygyydonrugeya' - ✓ SUCCESS

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
{"cid":"baeaaadjsguycynzygyydonrugeya"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '0f7246ce-2bb5-4f68-850e-752cc80e4867',
  status: 'queued',
  created: '2022-06-07T00:29:31.213+00:00',
  pin: {
    cid: 'baeaaadjsguycynzygyydonrugeya',
    _id: '0f7246ce-2bb5-4f68-850e-752cc80e4867',
    sourceCid: 'baeaaadjsguycynzygyydonrugeya',
    contentCid: 'baeaaadjsguycynzygyydonrugeya',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:31.213+00:00',
    updated: '2022-06-07T00:29:31.213+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:31.213+00:00',
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
  requestid: '0f7246ce-2bb5-4f68-850e-752cc80e4867',
  status: 'queued',
  created: 2022-06-07T00:29:31.213Z,
  pin: {
    cid: 'baeaaadjsguycynzygyydonrugeya',
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
  "cf-ray": "717546198c087ff3-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:31 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "0f7246ce-2bb5-4f68-850e-752cc80e4867",
  "status": "queued",
  "created": "2022-06-07T00:29:31.213+00:00",
  "pin": {
    "cid": "baeaaadjsguycynzygyydonrugeya",
    "_id": "0f7246ce-2bb5-4f68-850e-752cc80e4867",
    "sourceCid": "baeaaadjsguycynzygyydonrugeya",
    "contentCid": "baeaaadjsguycynzygyydonrugeya",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:31.213+00:00",
    "updated": "2022-06-07T00:29:31.213+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsguycynzygy2tenrzgezq' - ✓ SUCCESS

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
{"cid":"baeaaadjsguycynzygy2tenrzgezq"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '0f7b44c6-c6f3-40d0-9d5b-07c855710443',
  status: 'queued',
  created: '2022-06-07T00:29:32.231+00:00',
  pin: {
    cid: 'baeaaadjsguycynzygy2tenrzgezq',
    _id: '0f7b44c6-c6f3-40d0-9d5b-07c855710443',
    sourceCid: 'baeaaadjsguycynzygy2tenrzgezq',
    contentCid: 'baeaaadjsguycynzygy2tenrzgezq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:32.231+00:00',
    updated: '2022-06-07T00:29:32.231+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.231+00:00',
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
  requestid: '0f7b44c6-c6f3-40d0-9d5b-07c855710443',
  status: 'queued',
  created: 2022-06-07T00:29:32.231Z,
  pin: {
    cid: 'baeaaadjsguycynzygy2tenrzgezq',
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
  "cf-ray": "7175461f2df45b34-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "0f7b44c6-c6f3-40d0-9d5b-07c855710443",
  "status": "queued",
  "created": "2022-06-07T00:29:32.231+00:00",
  "pin": {
    "cid": "baeaaadjsguycynzygy2tenrzgezq",
    "_id": "0f7b44c6-c6f3-40d0-9d5b-07c855710443",
    "sourceCid": "baeaaadjsguycynzygy2tenrzgezq",
    "contentCid": "baeaaadjsguycynzygy2tenrzgezq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:32.231+00:00",
    "updated": "2022-06-07T00:29:32.231+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsguycynzyg4ytambqge3a' - ✓ SUCCESS

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
{"cid":"baeaaadjsguycynzyg4ytambqge3a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '1224dc88-41ed-472a-abdc-ed9be526d8c2',
  status: 'queued',
  created: '2022-06-07T00:29:32.595+00:00',
  pin: {
    cid: 'baeaaadjsguycynzyg4ytambqge3a',
    _id: '1224dc88-41ed-472a-abdc-ed9be526d8c2',
    sourceCid: 'baeaaadjsguycynzyg4ytambqge3a',
    contentCid: 'baeaaadjsguycynzyg4ytambqge3a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:32.595+00:00',
    updated: '2022-06-07T00:29:32.595+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:32.595+00:00',
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
  requestid: '1224dc88-41ed-472a-abdc-ed9be526d8c2',
  status: 'queued',
  created: 2022-06-07T00:29:32.595Z,
  pin: {
    cid: 'baeaaadjsguycynzyg4ytambqge3a',
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
  "cf-ray": "717546259c0f5a39-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "1224dc88-41ed-472a-abdc-ed9be526d8c2",
  "status": "queued",
  "created": "2022-06-07T00:29:32.595+00:00",
  "pin": {
    "cid": "baeaaadjsguycynzyg4ytambqge3a",
    "_id": "1224dc88-41ed-472a-abdc-ed9be526d8c2",
    "sourceCid": "baeaaadjsguycynzyg4ytambqge3a",
    "contentCid": "baeaaadjsguycynzyg4ytambqge3a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:32.595+00:00",
    "updated": "2022-06-07T00:29:32.595+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsguycynzyg42tkmbxge4q' - ✓ SUCCESS

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
{"cid":"baeaaadjsguycynzyg42tkmbxge4q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19',
  status: 'queued',
  created: '2022-06-07T00:29:33.86+00:00',
  pin: {
    cid: 'baeaaadjsguycynzyg42tkmbxge4q',
    _id: '77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19',
    sourceCid: 'baeaaadjsguycynzyg42tkmbxge4q',
    contentCid: 'baeaaadjsguycynzyg42tkmbxge4q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:33.86+00:00',
    updated: '2022-06-07T00:29:33.86+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:33.86+00:00',
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
  requestid: '77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19',
  status: 'queued',
  created: 2022-06-07T00:29:33.860Z,
  pin: {
    cid: 'baeaaadjsguycynzyg42tkmbxge4q',
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
  "cf-ray": "7175462a4fc25c28-IAD",
  "connection": "close",
  "content-length": "3775",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:33 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19",
  "status": "queued",
  "created": "2022-06-07T00:29:33.86+00:00",
  "pin": {
    "cid": "baeaaadjsguycynzyg42tkmbxge4q",
    "_id": "77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19",
    "sourceCid": "baeaaadjsguycynzyg42tkmbxge4q",
    "contentCid": "baeaaadjsguycynzyg42tkmbxge4q",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:33.86+00:00",
    "updated": "2022-06-07T00:29:33.86+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsguycynzyg44tqnrvgiza' - ✓ SUCCESS

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
{"cid":"baeaaadjsguycynzyg44tqnrvgiza"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '5a7a6782-556c-42b6-8f3f-2fa0a152f727',
  status: 'queued',
  created: '2022-06-07T00:29:34.929+00:00',
  pin: {
    cid: 'baeaaadjsguycynzyg44tqnrvgiza',
    _id: '5a7a6782-556c-42b6-8f3f-2fa0a152f727',
    sourceCid: 'baeaaadjsguycynzyg44tqnrvgiza',
    contentCid: 'baeaaadjsguycynzyg44tqnrvgiza',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:34.929+00:00',
    updated: '2022-06-07T00:29:34.929+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:34.929+00:00',
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
  requestid: '5a7a6782-556c-42b6-8f3f-2fa0a152f727',
  status: 'queued',
  created: 2022-06-07T00:29:34.929Z,
  pin: {
    cid: 'baeaaadjsguycynzyg44tqnrvgiza',
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
  "cf-ray": "717546307bfc9c30-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:35 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "5a7a6782-556c-42b6-8f3f-2fa0a152f727",
  "status": "queued",
  "created": "2022-06-07T00:29:34.929+00:00",
  "pin": {
    "cid": "baeaaadjsguycynzyg44tqnrvgiza",
    "_id": "5a7a6782-556c-42b6-8f3f-2fa0a152f727",
    "sourceCid": "baeaaadjsguycynzyg44tqnrvgiza",
    "contentCid": "baeaaadjsguycynzyg44tqnrvgiza",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:34.929+00:00",
    "updated": "2022-06-07T00:29:34.929+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsguycynzyha2demrzgi2q' - ✓ SUCCESS

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
{"cid":"baeaaadjsguycynzyha2demrzgi2q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '3a00b1e2-c697-4ca6-9d5c-139e4dd14b56',
  status: 'queued',
  created: '2022-06-07T00:29:35.701+00:00',
  pin: {
    cid: 'baeaaadjsguycynzyha2demrzgi2q',
    _id: '3a00b1e2-c697-4ca6-9d5c-139e4dd14b56',
    sourceCid: 'baeaaadjsguycynzyha2demrzgi2q',
    contentCid: 'baeaaadjsguycynzyha2demrzgi2q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T00:29:35.701+00:00',
    updated: '2022-06-07T00:29:35.701+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T00:29:35.701+00:00',
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
  requestid: '3a00b1e2-c697-4ca6-9d5c-139e4dd14b56',
  status: 'queued',
  created: 2022-06-07T00:29:35.701Z,
  pin: {
    cid: 'baeaaadjsguycynzyha2demrzgi2q',
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
  "cf-ray": "71754636bf4b82c2-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:35 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "3a00b1e2-c697-4ca6-9d5c-139e4dd14b56",
  "status": "queued",
  "created": "2022-06-07T00:29:35.701+00:00",
  "pin": {
    "cid": "baeaaadjsguycynzyha2demrzgi2q",
    "_id": "3a00b1e2-c697-4ca6-9d5c-139e4dd14b56",
    "sourceCid": "baeaaadjsguycynzyha2demrzgi2q",
    "contentCid": "baeaaadjsguycynzyha2demrzgi2q",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T00:29:35.701+00:00",
    "updated": "2022-06-07T00:29:35.701+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T00:29:35.701+00:00",
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
      requestid: '3a00b1e2-c697-4ca6-9d5c-139e4dd14b56',
      status: 'queued',
      created: '2022-06-07T00:29:35.701+00:00',
      pin: {
        cid: 'baeaaadjsguycynzyha2demrzgi2q',
        _id: '3a00b1e2-c697-4ca6-9d5c-139e4dd14b56',
        sourceCid: 'baeaaadjsguycynzyha2demrzgi2q',
        contentCid: 'baeaaadjsguycynzyha2demrzgi2q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:35.701+00:00',
        updated: '2022-06-07T00:29:35.701+00:00',
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
      requestid: '5a7a6782-556c-42b6-8f3f-2fa0a152f727',
      status: 'queued',
      created: '2022-06-07T00:29:34.929+00:00',
      pin: {
        cid: 'baeaaadjsguycynzyg44tqnrvgiza',
        _id: '5a7a6782-556c-42b6-8f3f-2fa0a152f727',
        sourceCid: 'baeaaadjsguycynzyg44tqnrvgiza',
        contentCid: 'baeaaadjsguycynzyg44tqnrvgiza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:34.929+00:00',
        updated: '2022-06-07T00:29:34.929+00:00',
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
      requestid: '77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19',
      status: 'queued',
      created: '2022-06-07T00:29:33.86+00:00',
      pin: {
        cid: 'baeaaadjsguycynzyg42tkmbxge4q',
        _id: '77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19',
        sourceCid: 'baeaaadjsguycynzyg42tkmbxge4q',
        contentCid: 'baeaaadjsguycynzyg42tkmbxge4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:33.86+00:00',
        updated: '2022-06-07T00:29:33.86+00:00',
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
      requestid: '1224dc88-41ed-472a-abdc-ed9be526d8c2',
      status: 'queued',
      created: '2022-06-07T00:29:32.595+00:00',
      pin: {
        cid: 'baeaaadjsguycynzyg4ytambqge3a',
        _id: '1224dc88-41ed-472a-abdc-ed9be526d8c2',
        sourceCid: 'baeaaadjsguycynzyg4ytambqge3a',
        contentCid: 'baeaaadjsguycynzyg4ytambqge3a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:32.595+00:00',
        updated: '2022-06-07T00:29:32.595+00:00',
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
      requestid: '0f7b44c6-c6f3-40d0-9d5b-07c855710443',
      status: 'queued',
      created: '2022-06-07T00:29:32.231+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygy2tenrzgezq',
        _id: '0f7b44c6-c6f3-40d0-9d5b-07c855710443',
        sourceCid: 'baeaaadjsguycynzygy2tenrzgezq',
        contentCid: 'baeaaadjsguycynzygy2tenrzgezq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:32.231+00:00',
        updated: '2022-06-07T00:29:32.231+00:00',
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
      requestid: '0f7246ce-2bb5-4f68-850e-752cc80e4867',
      status: 'queued',
      created: '2022-06-07T00:29:31.213+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygyydonrugeya',
        _id: '0f7246ce-2bb5-4f68-850e-752cc80e4867',
        sourceCid: 'baeaaadjsguycynzygyydonrugeya',
        contentCid: 'baeaaadjsguycynzygyydonrugeya',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:31.213+00:00',
        updated: '2022-06-07T00:29:31.213+00:00',
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
      requestid: '2c0eed59-dc5c-4450-ad99-5866227f27e6',
      status: 'queued',
      created: '2022-06-07T00:29:30.149+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygu3demzwga3a',
        _id: '2c0eed59-dc5c-4450-ad99-5866227f27e6',
        sourceCid: 'baeaaadjsguycynzygu3demzwga3a',
        contentCid: 'baeaaadjsguycynzygu3demzwga3a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:30.149+00:00',
        updated: '2022-06-07T00:29:30.149+00:00',
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
      requestid: 'cac1d520-a776-41bb-8087-049e64ca9fb2',
      status: 'queued',
      created: '2022-06-07T00:29:28.878+00:00',
      pin: {
        cid: 'baeaaadjsguycynzyguytemjvgazq',
        _id: 'cac1d520-a776-41bb-8087-049e64ca9fb2',
        sourceCid: 'baeaaadjsguycynzyguytemjvgazq',
        contentCid: 'baeaaadjsguycynzyguytemjvgazq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:28.878+00:00',
        updated: '2022-06-07T00:29:28.878+00:00',
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
      requestid: 'f6b07865-cf08-4208-8bca-a8b131d10412',
      status: 'queued',
      created: '2022-06-07T00:29:27.913+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygq2dgnrrhe4a',
        _id: 'f6b07865-cf08-4208-8bca-a8b131d10412',
        sourceCid: 'baeaaadjsguycynzygq2dgnrrhe4a',
        contentCid: 'baeaaadjsguycynzygq2dgnrrhe4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:27.913+00:00',
        updated: '2022-06-07T00:29:27.913+00:00',
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
      requestid: '659e58d7-1227-41a6-9a26-e7fe1e27f8c7',
      status: 'queued',
      created: '2022-06-07T00:29:26.57+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygm4tkmzshe2q',
        _id: '659e58d7-1227-41a6-9a26-e7fe1e27f8c7',
        sourceCid: 'baeaaadjsguycynzygm4tkmzshe2q',
        contentCid: 'baeaaadjsguycynzygm4tkmzshe2q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:26.57+00:00',
        updated: '2022-06-07T00:29:26.57+00:00',
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
      requestid: '3a00b1e2-c697-4ca6-9d5c-139e4dd14b56',
      status: 'queued',
      created: 2022-06-07T00:29:35.701Z,
      pin: {
        cid: 'baeaaadjsguycynzyha2demrzgi2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '5a7a6782-556c-42b6-8f3f-2fa0a152f727',
      status: 'queued',
      created: 2022-06-07T00:29:34.929Z,
      pin: {
        cid: 'baeaaadjsguycynzyg44tqnrvgiza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19',
      status: 'queued',
      created: 2022-06-07T00:29:33.860Z,
      pin: {
        cid: 'baeaaadjsguycynzyg42tkmbxge4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '1224dc88-41ed-472a-abdc-ed9be526d8c2',
      status: 'queued',
      created: 2022-06-07T00:29:32.595Z,
      pin: {
        cid: 'baeaaadjsguycynzyg4ytambqge3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '0f7b44c6-c6f3-40d0-9d5b-07c855710443',
      status: 'queued',
      created: 2022-06-07T00:29:32.231Z,
      pin: {
        cid: 'baeaaadjsguycynzygy2tenrzgezq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '0f7246ce-2bb5-4f68-850e-752cc80e4867',
      status: 'queued',
      created: 2022-06-07T00:29:31.213Z,
      pin: {
        cid: 'baeaaadjsguycynzygyydonrugeya',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '2c0eed59-dc5c-4450-ad99-5866227f27e6',
      status: 'queued',
      created: 2022-06-07T00:29:30.149Z,
      pin: {
        cid: 'baeaaadjsguycynzygu3demzwga3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'cac1d520-a776-41bb-8087-049e64ca9fb2',
      status: 'queued',
      created: 2022-06-07T00:29:28.878Z,
      pin: {
        cid: 'baeaaadjsguycynzyguytemjvgazq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'f6b07865-cf08-4208-8bca-a8b131d10412',
      status: 'queued',
      created: 2022-06-07T00:29:27.913Z,
      pin: {
        cid: 'baeaaadjsguycynzygq2dgnrrhe4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '659e58d7-1227-41a6-9a26-e7fe1e27f8c7',
      status: 'queued',
      created: 2022-06-07T00:29:26.570Z,
      pin: {
        cid: 'baeaaadjsguycynzygm4tkmzshe2q',
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
  "cf-ray": "7175463cffe25a0f-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:36 GMT",
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
      "requestid": "3a00b1e2-c697-4ca6-9d5c-139e4dd14b56",
      "status": "queued",
      "created": "2022-06-07T00:29:35.701+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzyha2demrzgi2q",
        "_id": "3a00b1e2-c697-4ca6-9d5c-139e4dd14b56",
        "sourceCid": "baeaaadjsguycynzyha2demrzgi2q",
        "contentCid": "baeaaadjsguycynzyha2demrzgi2q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:35.701+00:00",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5a7a6782-556c-42b6-8f3f-2fa0a152f727",
      "status": "queued",
      "created": "2022-06-07T00:29:34.929+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzyg44tqnrvgiza",
        "_id": "5a7a6782-556c-42b6-8f3f-2fa0a152f727",
        "sourceCid": "baeaaadjsguycynzyg44tqnrvgiza",
        "contentCid": "baeaaadjsguycynzyg44tqnrvgiza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:34.929+00:00",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19",
      "status": "queued",
      "created": "2022-06-07T00:29:33.86+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzyg42tkmbxge4q",
        "_id": "77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19",
        "sourceCid": "baeaaadjsguycynzyg42tkmbxge4q",
        "contentCid": "baeaaadjsguycynzyg42tkmbxge4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:33.86+00:00",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "1224dc88-41ed-472a-abdc-ed9be526d8c2",
      "status": "queued",
      "created": "2022-06-07T00:29:32.595+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzyg4ytambqge3a",
        "_id": "1224dc88-41ed-472a-abdc-ed9be526d8c2",
        "sourceCid": "baeaaadjsguycynzyg4ytambqge3a",
        "contentCid": "baeaaadjsguycynzyg4ytambqge3a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:32.595+00:00",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "0f7b44c6-c6f3-40d0-9d5b-07c855710443",
      "status": "queued",
      "created": "2022-06-07T00:29:32.231+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygy2tenrzgezq",
        "_id": "0f7b44c6-c6f3-40d0-9d5b-07c855710443",
        "sourceCid": "baeaaadjsguycynzygy2tenrzgezq",
        "contentCid": "baeaaadjsguycynzygy2tenrzgezq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:32.231+00:00",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "0f7246ce-2bb5-4f68-850e-752cc80e4867",
      "status": "queued",
      "created": "2022-06-07T00:29:31.213+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygyydonrugeya",
        "_id": "0f7246ce-2bb5-4f68-850e-752cc80e4867",
        "sourceCid": "baeaaadjsguycynzygyydonrugeya",
        "contentCid": "baeaaadjsguycynzygyydonrugeya",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:31.213+00:00",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "2c0eed59-dc5c-4450-ad99-5866227f27e6",
      "status": "queued",
      "created": "2022-06-07T00:29:30.149+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygu3demzwga3a",
        "_id": "2c0eed59-dc5c-4450-ad99-5866227f27e6",
        "sourceCid": "baeaaadjsguycynzygu3demzwga3a",
        "contentCid": "baeaaadjsguycynzygu3demzwga3a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:30.149+00:00",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "cac1d520-a776-41bb-8087-049e64ca9fb2",
      "status": "queued",
      "created": "2022-06-07T00:29:28.878+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzyguytemjvgazq",
        "_id": "cac1d520-a776-41bb-8087-049e64ca9fb2",
        "sourceCid": "baeaaadjsguycynzyguytemjvgazq",
        "contentCid": "baeaaadjsguycynzyguytemjvgazq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:28.878+00:00",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "f6b07865-cf08-4208-8bca-a8b131d10412",
      "status": "queued",
      "created": "2022-06-07T00:29:27.913+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygq2dgnrrhe4a",
        "_id": "f6b07865-cf08-4208-8bca-a8b131d10412",
        "sourceCid": "baeaaadjsguycynzygq2dgnrrhe4a",
        "contentCid": "baeaaadjsguycynzygq2dgnrrhe4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:27.913+00:00",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "659e58d7-1227-41a6-9a26-e7fe1e27f8c7",
      "status": "queued",
      "created": "2022-06-07T00:29:26.57+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygm4tkmzshe2q",
        "_id": "659e58d7-1227-41a6-9a26-e7fe1e27f8c7",
        "sourceCid": "baeaaadjsguycynzygm4tkmzshe2q",
        "contentCid": "baeaaadjsguycynzygm4tkmzshe2q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:26.57+00:00",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
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

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T00%3A29%3A26.570Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T00%3A29%3A26.570Z
```
{
  count: 6,
  results: [
    {
      requestid: '659e58d7-1227-41a6-9a26-e7fe1e27f8c7',
      status: 'queued',
      created: '2022-06-07T00:29:26.57+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygm4tkmzshe2q',
        _id: '659e58d7-1227-41a6-9a26-e7fe1e27f8c7',
        sourceCid: 'baeaaadjsguycynzygm4tkmzshe2q',
        contentCid: 'baeaaadjsguycynzygm4tkmzshe2q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:26.57+00:00',
        updated: '2022-06-07T00:29:26.57+00:00',
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
      requestid: '4f1c04c1-cebd-4f89-ad02-09429280b3e5',
      status: 'queued',
      created: '2022-06-07T00:29:26.235+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygm2dcmbwheyq',
        _id: '4f1c04c1-cebd-4f89-ad02-09429280b3e5',
        sourceCid: 'baeaaadjsguycynzygm2dcmbwheyq',
        contentCid: 'baeaaadjsguycynzygm2dcmbwheyq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:26.235+00:00',
        updated: '2022-06-07T00:29:26.235+00:00',
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
      requestid: '0a30e206-3002-46d9-a77c-6dc9d54c46ff',
      status: 'queued',
      created: '2022-06-07T00:29:22.126+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygi2tmojzha3a',
        _id: '0a30e206-3002-46d9-a77c-6dc9d54c46ff',
        sourceCid: 'baeaaadjsguycynzygi2tmojzha3a',
        contentCid: 'baeaaadjsguycynzygi2tmojzha3a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:22.126+00:00',
        updated: '2022-06-07T00:29:22.126+00:00',
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
      requestid: '7e1d0fb5-2393-4063-9b52-564f2d5fc0c0',
      status: 'queued',
      created: '2022-06-07T00:29:16.985+00:00',
      pin: {
        cid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
        _id: '7e1d0fb5-2393-4063-9b52-564f2d5fc0c0',
        sourceCid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
        contentCid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
        authKey: 315318824629964100,
        name: 'a45365d5-1114-49ae-8b2f-c67a9bf42de0',
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:16.985+00:00',
        updated: '2022-06-07T00:29:16.985+00:00',
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
      requestid: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
      status: 'queued',
      created: '2022-06-07T00:29:13.89+00:00',
      pin: {
        cid: 'baeaaadbsgqzsyobzgi3dqmrxge',
        _id: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
        sourceCid: 'baeaaadbsgqzsyobzgi3dqmrxge',
        contentCid: 'baeaaadbsgqzsyobzgi3dqmrxge',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:13.89+00:00',
        updated: '2022-06-07T00:29:13.89+00:00',
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
      requestid: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
      status: 'queued',
      created: '2022-06-07T00:29:09.01+00:00',
      pin: {
        cid: 'baeaaadbsgm4cynzwhaytsobqgi',
        _id: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
        sourceCid: 'baeaaadbsgm4cynzwhaytsobqgi',
        contentCid: 'baeaaadbsgm4cynzwhaytsobqgi',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:09.01+00:00',
        updated: '2022-06-07T00:29:09.01+00:00',
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
      requestid: '659e58d7-1227-41a6-9a26-e7fe1e27f8c7',
      status: 'queued',
      created: 2022-06-07T00:29:26.570Z,
      pin: {
        cid: 'baeaaadjsguycynzygm4tkmzshe2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '4f1c04c1-cebd-4f89-ad02-09429280b3e5',
      status: 'queued',
      created: 2022-06-07T00:29:26.235Z,
      pin: {
        cid: 'baeaaadjsguycynzygm2dcmbwheyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '0a30e206-3002-46d9-a77c-6dc9d54c46ff',
      status: 'queued',
      created: 2022-06-07T00:29:22.126Z,
      pin: {
        cid: 'baeaaadjsguycynzygi2tmojzha3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '7e1d0fb5-2393-4063-9b52-564f2d5fc0c0',
      status: 'queued',
      created: 2022-06-07T00:29:16.985Z,
      pin: {
        cid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
        name: 'a45365d5-1114-49ae-8b2f-c67a9bf42de0',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
      status: 'queued',
      created: 2022-06-07T00:29:13.890Z,
      pin: {
        cid: 'baeaaadbsgqzsyobzgi3dqmrxge',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
      status: 'queued',
      created: 2022-06-07T00:29:09.010Z,
      pin: {
        cid: 'baeaaadbsgm4cynzwhaytsobqgi',
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
  "cf-ray": "7175463ed8f3057f-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:37 GMT",
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
      "requestid": "659e58d7-1227-41a6-9a26-e7fe1e27f8c7",
      "status": "queued",
      "created": "2022-06-07T00:29:26.57+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygm4tkmzshe2q",
        "_id": "659e58d7-1227-41a6-9a26-e7fe1e27f8c7",
        "sourceCid": "baeaaadjsguycynzygm4tkmzshe2q",
        "contentCid": "baeaaadjsguycynzygm4tkmzshe2q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:26.57+00:00",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4f1c04c1-cebd-4f89-ad02-09429280b3e5",
      "status": "queued",
      "created": "2022-06-07T00:29:26.235+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygm2dcmbwheyq",
        "_id": "4f1c04c1-cebd-4f89-ad02-09429280b3e5",
        "sourceCid": "baeaaadjsguycynzygm2dcmbwheyq",
        "contentCid": "baeaaadjsguycynzygm2dcmbwheyq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:26.235+00:00",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "0a30e206-3002-46d9-a77c-6dc9d54c46ff",
      "status": "queued",
      "created": "2022-06-07T00:29:22.126+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygi2tmojzha3a",
        "_id": "0a30e206-3002-46d9-a77c-6dc9d54c46ff",
        "sourceCid": "baeaaadjsguycynzygi2tmojzha3a",
        "contentCid": "baeaaadjsguycynzygi2tmojzha3a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:22.126+00:00",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "7e1d0fb5-2393-4063-9b52-564f2d5fc0c0",
      "status": "queued",
      "created": "2022-06-07T00:29:16.985+00:00",
      "pin": {
        "cid": "baeaaadjsgq2syobsgm2tgmrsgu4a",
        "_id": "7e1d0fb5-2393-4063-9b52-564f2d5fc0c0",
        "sourceCid": "baeaaadjsgq2syobsgm2tgmrsgu4a",
        "contentCid": "baeaaadjsgq2syobsgm2tgmrsgu4a",
        "authKey": 315318824629964100,
        "name": "a45365d5-1114-49ae-8b2f-c67a9bf42de0",
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:16.985+00:00",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "f350373a-4868-43e4-a2c4-ed4a39e9ee47",
      "status": "queued",
      "created": "2022-06-07T00:29:13.89+00:00",
      "pin": {
        "cid": "baeaaadbsgqzsyobzgi3dqmrxge",
        "_id": "f350373a-4868-43e4-a2c4-ed4a39e9ee47",
        "sourceCid": "baeaaadbsgqzsyobzgi3dqmrxge",
        "contentCid": "baeaaadbsgqzsyobzgi3dqmrxge",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:13.89+00:00",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a331416f-a198-4a37-9d9a-78d7fcf69c67",
      "status": "queued",
      "created": "2022-06-07T00:29:09.01+00:00",
      "pin": {
        "cid": "baeaaadbsgm4cynzwhaytsobqgi",
        "_id": "a331416f-a198-4a37-9d9a-78d7fcf69c67",
        "sourceCid": "baeaaadbsgm4cynzwhaytsobqgi",
        "contentCid": "baeaaadbsgm4cynzwhaytsobqgi",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:09.01+00:00",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
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
      requestid: '7e1d0fb5-2393-4063-9b52-564f2d5fc0c0',
      status: 'queued',
      created: '2022-06-07T00:29:16.985+00:00',
      pin: {
        cid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
        _id: '7e1d0fb5-2393-4063-9b52-564f2d5fc0c0',
        sourceCid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
        contentCid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
        authKey: 315318824629964100,
        name: 'a45365d5-1114-49ae-8b2f-c67a9bf42de0',
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:16.985+00:00',
        updated: '2022-06-07T00:29:16.985+00:00',
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
      requestid: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
      status: 'queued',
      created: '2022-06-07T00:29:13.89+00:00',
      pin: {
        cid: 'baeaaadbsgqzsyobzgi3dqmrxge',
        _id: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
        sourceCid: 'baeaaadbsgqzsyobzgi3dqmrxge',
        contentCid: 'baeaaadbsgqzsyobzgi3dqmrxge',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:13.89+00:00',
        updated: '2022-06-07T00:29:13.89+00:00',
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
      requestid: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
      status: 'queued',
      created: '2022-06-07T00:29:09.01+00:00',
      pin: {
        cid: 'baeaaadbsgm4cynzwhaytsobqgi',
        _id: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
        sourceCid: 'baeaaadbsgm4cynzwhaytsobqgi',
        contentCid: 'baeaaadbsgm4cynzwhaytsobqgi',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:09.01+00:00',
        updated: '2022-06-07T00:29:09.01+00:00',
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
      requestid: '7e1d0fb5-2393-4063-9b52-564f2d5fc0c0',
      status: 'queued',
      created: 2022-06-07T00:29:16.985Z,
      pin: {
        cid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
        name: 'a45365d5-1114-49ae-8b2f-c67a9bf42de0',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
      status: 'queued',
      created: 2022-06-07T00:29:13.890Z,
      pin: {
        cid: 'baeaaadbsgqzsyobzgi3dqmrxge',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
      status: 'queued',
      created: 2022-06-07T00:29:09.010Z,
      pin: {
        cid: 'baeaaadbsgm4cynzwhaytsobqgi',
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
  "cf-ray": "717545d8fe0c0678-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:20 GMT",
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
      "requestid": "7e1d0fb5-2393-4063-9b52-564f2d5fc0c0",
      "status": "queued",
      "created": "2022-06-07T00:29:16.985+00:00",
      "pin": {
        "cid": "baeaaadjsgq2syobsgm2tgmrsgu4a",
        "_id": "7e1d0fb5-2393-4063-9b52-564f2d5fc0c0",
        "sourceCid": "baeaaadjsgq2syobsgm2tgmrsgu4a",
        "contentCid": "baeaaadjsgq2syobsgm2tgmrsgu4a",
        "authKey": 315318824629964100,
        "name": "a45365d5-1114-49ae-8b2f-c67a9bf42de0",
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:16.985+00:00",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "f350373a-4868-43e4-a2c4-ed4a39e9ee47",
      "status": "queued",
      "created": "2022-06-07T00:29:13.89+00:00",
      "pin": {
        "cid": "baeaaadbsgqzsyobzgi3dqmrxge",
        "_id": "f350373a-4868-43e4-a2c4-ed4a39e9ee47",
        "sourceCid": "baeaaadbsgqzsyobzgi3dqmrxge",
        "contentCid": "baeaaadbsgqzsyobzgi3dqmrxge",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:13.89+00:00",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a331416f-a198-4a37-9d9a-78d7fcf69c67",
      "status": "queued",
      "created": "2022-06-07T00:29:09.01+00:00",
      "pin": {
        "cid": "baeaaadbsgm4cynzwhaytsobqgi",
        "_id": "a331416f-a198-4a37-9d9a-78d7fcf69c67",
        "sourceCid": "baeaaadbsgm4cynzwhaytsobqgi",
        "contentCid": "baeaaadbsgm4cynzwhaytsobqgi",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:09.01+00:00",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
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
## Can delete pin with requestid '3a00b1e2-c697-4ca6-9d5c-139e4dd14b56' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/3a00b1e2-c697-4ca6-9d5c-139e4dd14b56

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/3a00b1e2-c697-4ca6-9d5c-139e4dd14b56
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
  "cf-ray": "7175464b5b128232-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:38 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '5a7a6782-556c-42b6-8f3f-2fa0a152f727' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/5a7a6782-556c-42b6-8f3f-2fa0a152f727

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/5a7a6782-556c-42b6-8f3f-2fa0a152f727
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
  "cf-ray": "717546519a166fe5-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19
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
  "cf-ray": "71754657dc0d9c25-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:40 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '1224dc88-41ed-472a-abdc-ed9be526d8c2' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/1224dc88-41ed-472a-abdc-ed9be526d8c2

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/1224dc88-41ed-472a-abdc-ed9be526d8c2
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
  "cf-ray": "7175465e2ea65878-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:41 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '0f7b44c6-c6f3-40d0-9d5b-07c855710443' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/0f7b44c6-c6f3-40d0-9d5b-07c855710443

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/0f7b44c6-c6f3-40d0-9d5b-07c855710443
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
  "cf-ray": "717546646f2305ce-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '0f7246ce-2bb5-4f68-850e-752cc80e4867' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/0f7246ce-2bb5-4f68-850e-752cc80e4867

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/0f7246ce-2bb5-4f68-850e-752cc80e4867
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
  "cf-ray": "7175466a99c45a45-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '2c0eed59-dc5c-4450-ad99-5866227f27e6' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/2c0eed59-dc5c-4450-ad99-5866227f27e6

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/2c0eed59-dc5c-4450-ad99-5866227f27e6
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
  "cf-ray": "71754670efef56c8-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:44 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'cac1d520-a776-41bb-8087-049e64ca9fb2' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/cac1d520-a776-41bb-8087-049e64ca9fb2

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/cac1d520-a776-41bb-8087-049e64ca9fb2
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
  "cf-ray": "717546772f0d0633-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:45 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'f6b07865-cf08-4208-8bca-a8b131d10412' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/f6b07865-cf08-4208-8bca-a8b131d10412

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/f6b07865-cf08-4208-8bca-a8b131d10412
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
  "cf-ray": "7175467d6ce67fd9-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:46 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '659e58d7-1227-41a6-9a26-e7fe1e27f8c7' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/659e58d7-1227-41a6-9a26-e7fe1e27f8c7

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/659e58d7-1227-41a6-9a26-e7fe1e27f8c7
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
  "cf-ray": "71754683aa6205d2-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:47 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '4f1c04c1-cebd-4f89-ad02-09429280b3e5' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/4f1c04c1-cebd-4f89-ad02-09429280b3e5

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/4f1c04c1-cebd-4f89-ad02-09429280b3e5
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
  "cf-ray": "7175468bde4c05c6-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:49 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '0a30e206-3002-46d9-a77c-6dc9d54c46ff' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/0a30e206-3002-46d9-a77c-6dc9d54c46ff

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/0a30e206-3002-46d9-a77c-6dc9d54c46ff
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
  "cf-ray": "717546921fb9819f-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:50 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '7e1d0fb5-2393-4063-9b52-564f2d5fc0c0' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/7e1d0fb5-2393-4063-9b52-564f2d5fc0c0

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/7e1d0fb5-2393-4063-9b52-564f2d5fc0c0
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
  "cf-ray": "717546984e5d9c49-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:51 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'f350373a-4868-43e4-a2c4-ed4a39e9ee47' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/f350373a-4868-43e4-a2c4-ed4a39e9ee47

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/f350373a-4868-43e4-a2c4-ed4a39e9ee47
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
  "cf-ray": "7175469e8cea9c6d-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:52 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'a331416f-a198-4a37-9d9a-78d7fcf69c67' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)




#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.web3.storage/pins/a331416f-a198-4a37-9d9a-78d7fcf69c67

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/a331416f-a198-4a37-9d9a-78d7fcf69c67
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
  "cf-ray": "717546a4c9266fa4-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:53 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Get all Pins created before 'Tue Jun 07 2022 00:29:26 GMT+0000 (Coordinated Universal Time)' - ✓ SUCCESS

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

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T00%3A29%3A26.570Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T00%3A29%3A26.570Z
```
{
  count: 5,
  results: [
    {
      requestid: '4f1c04c1-cebd-4f89-ad02-09429280b3e5',
      status: 'queued',
      created: '2022-06-07T00:29:26.235+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygm2dcmbwheyq',
        _id: '4f1c04c1-cebd-4f89-ad02-09429280b3e5',
        sourceCid: 'baeaaadjsguycynzygm2dcmbwheyq',
        contentCid: 'baeaaadjsguycynzygm2dcmbwheyq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:26.235+00:00',
        updated: '2022-06-07T00:29:26.235+00:00',
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
      requestid: '0a30e206-3002-46d9-a77c-6dc9d54c46ff',
      status: 'queued',
      created: '2022-06-07T00:29:22.126+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygi2tmojzha3a',
        _id: '0a30e206-3002-46d9-a77c-6dc9d54c46ff',
        sourceCid: 'baeaaadjsguycynzygi2tmojzha3a',
        contentCid: 'baeaaadjsguycynzygi2tmojzha3a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:22.126+00:00',
        updated: '2022-06-07T00:29:22.126+00:00',
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
      requestid: '7e1d0fb5-2393-4063-9b52-564f2d5fc0c0',
      status: 'queued',
      created: '2022-06-07T00:29:16.985+00:00',
      pin: {
        cid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
        _id: '7e1d0fb5-2393-4063-9b52-564f2d5fc0c0',
        sourceCid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
        contentCid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
        authKey: 315318824629964100,
        name: 'a45365d5-1114-49ae-8b2f-c67a9bf42de0',
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:16.985+00:00',
        updated: '2022-06-07T00:29:16.985+00:00',
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
      requestid: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
      status: 'queued',
      created: '2022-06-07T00:29:13.89+00:00',
      pin: {
        cid: 'baeaaadbsgqzsyobzgi3dqmrxge',
        _id: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
        sourceCid: 'baeaaadbsgqzsyobzgi3dqmrxge',
        contentCid: 'baeaaadbsgqzsyobzgi3dqmrxge',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:13.89+00:00',
        updated: '2022-06-07T00:29:13.89+00:00',
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
      requestid: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
      status: 'queued',
      created: '2022-06-07T00:29:09.01+00:00',
      pin: {
        cid: 'baeaaadbsgm4cynzwhaytsobqgi',
        _id: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
        sourceCid: 'baeaaadbsgm4cynzwhaytsobqgi',
        contentCid: 'baeaaadbsgm4cynzwhaytsobqgi',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:09.01+00:00',
        updated: '2022-06-07T00:29:09.01+00:00',
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
      requestid: '4f1c04c1-cebd-4f89-ad02-09429280b3e5',
      status: 'queued',
      created: 2022-06-07T00:29:26.235Z,
      pin: {
        cid: 'baeaaadjsguycynzygm2dcmbwheyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '0a30e206-3002-46d9-a77c-6dc9d54c46ff',
      status: 'queued',
      created: 2022-06-07T00:29:22.126Z,
      pin: {
        cid: 'baeaaadjsguycynzygi2tmojzha3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '7e1d0fb5-2393-4063-9b52-564f2d5fc0c0',
      status: 'queued',
      created: 2022-06-07T00:29:16.985Z,
      pin: {
        cid: 'baeaaadjsgq2syobsgm2tgmrsgu4a',
        name: 'a45365d5-1114-49ae-8b2f-c67a9bf42de0',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'f350373a-4868-43e4-a2c4-ed4a39e9ee47',
      status: 'queued',
      created: 2022-06-07T00:29:13.890Z,
      pin: {
        cid: 'baeaaadbsgqzsyobzgi3dqmrxge',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'a331416f-a198-4a37-9d9a-78d7fcf69c67',
      status: 'queued',
      created: 2022-06-07T00:29:09.010Z,
      pin: {
        cid: 'baeaaadbsgm4cynzwhaytsobqgi',
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
  "cf-ray": "71754689edc905ce-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:48 GMT",
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
      "requestid": "4f1c04c1-cebd-4f89-ad02-09429280b3e5",
      "status": "queued",
      "created": "2022-06-07T00:29:26.235+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygm2dcmbwheyq",
        "_id": "4f1c04c1-cebd-4f89-ad02-09429280b3e5",
        "sourceCid": "baeaaadjsguycynzygm2dcmbwheyq",
        "contentCid": "baeaaadjsguycynzygm2dcmbwheyq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:26.235+00:00",
        "updated": "2022-06-07T00:29:26.235+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.235+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "0a30e206-3002-46d9-a77c-6dc9d54c46ff",
      "status": "queued",
      "created": "2022-06-07T00:29:22.126+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygi2tmojzha3a",
        "_id": "0a30e206-3002-46d9-a77c-6dc9d54c46ff",
        "sourceCid": "baeaaadjsguycynzygi2tmojzha3a",
        "contentCid": "baeaaadjsguycynzygi2tmojzha3a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:22.126+00:00",
        "updated": "2022-06-07T00:29:22.126+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:22.126+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "7e1d0fb5-2393-4063-9b52-564f2d5fc0c0",
      "status": "queued",
      "created": "2022-06-07T00:29:16.985+00:00",
      "pin": {
        "cid": "baeaaadjsgq2syobsgm2tgmrsgu4a",
        "_id": "7e1d0fb5-2393-4063-9b52-564f2d5fc0c0",
        "sourceCid": "baeaaadjsgq2syobsgm2tgmrsgu4a",
        "contentCid": "baeaaadjsgq2syobsgm2tgmrsgu4a",
        "authKey": 315318824629964100,
        "name": "a45365d5-1114-49ae-8b2f-c67a9bf42de0",
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:16.985+00:00",
        "updated": "2022-06-07T00:29:16.985+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:16.985+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "f350373a-4868-43e4-a2c4-ed4a39e9ee47",
      "status": "queued",
      "created": "2022-06-07T00:29:13.89+00:00",
      "pin": {
        "cid": "baeaaadbsgqzsyobzgi3dqmrxge",
        "_id": "f350373a-4868-43e4-a2c4-ed4a39e9ee47",
        "sourceCid": "baeaaadbsgqzsyobzgi3dqmrxge",
        "contentCid": "baeaaadbsgqzsyobzgi3dqmrxge",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:13.89+00:00",
        "updated": "2022-06-07T00:29:13.89+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:13.89+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a331416f-a198-4a37-9d9a-78d7fcf69c67",
      "status": "queued",
      "created": "2022-06-07T00:29:09.01+00:00",
      "pin": {
        "cid": "baeaaadbsgm4cynzwhaytsobqgi",
        "_id": "a331416f-a198-4a37-9d9a-78d7fcf69c67",
        "sourceCid": "baeaaadbsgm4cynzwhaytsobqgi",
        "contentCid": "baeaaadbsgm4cynzwhaytsobqgi",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:09.01+00:00",
        "updated": "2022-06-07T00:29:09.01+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:09.01+00:00",
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
  "cf-ray": "717546ab2c8705d2-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:53 GMT",
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
      requestid: '3a00b1e2-c697-4ca6-9d5c-139e4dd14b56',
      status: 'queued',
      created: '2022-06-07T00:29:35.701+00:00',
      pin: {
        cid: 'baeaaadjsguycynzyha2demrzgi2q',
        _id: '3a00b1e2-c697-4ca6-9d5c-139e4dd14b56',
        sourceCid: 'baeaaadjsguycynzyha2demrzgi2q',
        contentCid: 'baeaaadjsguycynzyha2demrzgi2q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:35.701+00:00',
        updated: '2022-06-07T00:29:35.701+00:00',
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
      requestid: '5a7a6782-556c-42b6-8f3f-2fa0a152f727',
      status: 'queued',
      created: '2022-06-07T00:29:34.929+00:00',
      pin: {
        cid: 'baeaaadjsguycynzyg44tqnrvgiza',
        _id: '5a7a6782-556c-42b6-8f3f-2fa0a152f727',
        sourceCid: 'baeaaadjsguycynzyg44tqnrvgiza',
        contentCid: 'baeaaadjsguycynzyg44tqnrvgiza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:34.929+00:00',
        updated: '2022-06-07T00:29:34.929+00:00',
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
      requestid: '77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19',
      status: 'queued',
      created: '2022-06-07T00:29:33.86+00:00',
      pin: {
        cid: 'baeaaadjsguycynzyg42tkmbxge4q',
        _id: '77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19',
        sourceCid: 'baeaaadjsguycynzyg42tkmbxge4q',
        contentCid: 'baeaaadjsguycynzyg42tkmbxge4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:33.86+00:00',
        updated: '2022-06-07T00:29:33.86+00:00',
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
      requestid: '1224dc88-41ed-472a-abdc-ed9be526d8c2',
      status: 'queued',
      created: '2022-06-07T00:29:32.595+00:00',
      pin: {
        cid: 'baeaaadjsguycynzyg4ytambqge3a',
        _id: '1224dc88-41ed-472a-abdc-ed9be526d8c2',
        sourceCid: 'baeaaadjsguycynzyg4ytambqge3a',
        contentCid: 'baeaaadjsguycynzyg4ytambqge3a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:32.595+00:00',
        updated: '2022-06-07T00:29:32.595+00:00',
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
      requestid: '0f7b44c6-c6f3-40d0-9d5b-07c855710443',
      status: 'queued',
      created: '2022-06-07T00:29:32.231+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygy2tenrzgezq',
        _id: '0f7b44c6-c6f3-40d0-9d5b-07c855710443',
        sourceCid: 'baeaaadjsguycynzygy2tenrzgezq',
        contentCid: 'baeaaadjsguycynzygy2tenrzgezq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:32.231+00:00',
        updated: '2022-06-07T00:29:32.231+00:00',
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
      requestid: '0f7246ce-2bb5-4f68-850e-752cc80e4867',
      status: 'queued',
      created: '2022-06-07T00:29:31.213+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygyydonrugeya',
        _id: '0f7246ce-2bb5-4f68-850e-752cc80e4867',
        sourceCid: 'baeaaadjsguycynzygyydonrugeya',
        contentCid: 'baeaaadjsguycynzygyydonrugeya',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:31.213+00:00',
        updated: '2022-06-07T00:29:31.213+00:00',
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
      requestid: '2c0eed59-dc5c-4450-ad99-5866227f27e6',
      status: 'queued',
      created: '2022-06-07T00:29:30.149+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygu3demzwga3a',
        _id: '2c0eed59-dc5c-4450-ad99-5866227f27e6',
        sourceCid: 'baeaaadjsguycynzygu3demzwga3a',
        contentCid: 'baeaaadjsguycynzygu3demzwga3a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:30.149+00:00',
        updated: '2022-06-07T00:29:30.149+00:00',
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
      requestid: 'cac1d520-a776-41bb-8087-049e64ca9fb2',
      status: 'queued',
      created: '2022-06-07T00:29:28.878+00:00',
      pin: {
        cid: 'baeaaadjsguycynzyguytemjvgazq',
        _id: 'cac1d520-a776-41bb-8087-049e64ca9fb2',
        sourceCid: 'baeaaadjsguycynzyguytemjvgazq',
        contentCid: 'baeaaadjsguycynzyguytemjvgazq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:28.878+00:00',
        updated: '2022-06-07T00:29:28.878+00:00',
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
      requestid: 'f6b07865-cf08-4208-8bca-a8b131d10412',
      status: 'queued',
      created: '2022-06-07T00:29:27.913+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygq2dgnrrhe4a',
        _id: 'f6b07865-cf08-4208-8bca-a8b131d10412',
        sourceCid: 'baeaaadjsguycynzygq2dgnrrhe4a',
        contentCid: 'baeaaadjsguycynzygq2dgnrrhe4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:27.913+00:00',
        updated: '2022-06-07T00:29:27.913+00:00',
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
      requestid: '659e58d7-1227-41a6-9a26-e7fe1e27f8c7',
      status: 'queued',
      created: '2022-06-07T00:29:26.57+00:00',
      pin: {
        cid: 'baeaaadjsguycynzygm4tkmzshe2q',
        _id: '659e58d7-1227-41a6-9a26-e7fe1e27f8c7',
        sourceCid: 'baeaaadjsguycynzygm4tkmzshe2q',
        contentCid: 'baeaaadjsguycynzygm4tkmzshe2q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T00:29:26.57+00:00',
        updated: '2022-06-07T00:29:26.57+00:00',
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
      requestid: '3a00b1e2-c697-4ca6-9d5c-139e4dd14b56',
      status: 'queued',
      created: 2022-06-07T00:29:35.701Z,
      pin: {
        cid: 'baeaaadjsguycynzyha2demrzgi2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '5a7a6782-556c-42b6-8f3f-2fa0a152f727',
      status: 'queued',
      created: 2022-06-07T00:29:34.929Z,
      pin: {
        cid: 'baeaaadjsguycynzyg44tqnrvgiza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19',
      status: 'queued',
      created: 2022-06-07T00:29:33.860Z,
      pin: {
        cid: 'baeaaadjsguycynzyg42tkmbxge4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '1224dc88-41ed-472a-abdc-ed9be526d8c2',
      status: 'queued',
      created: 2022-06-07T00:29:32.595Z,
      pin: {
        cid: 'baeaaadjsguycynzyg4ytambqge3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '0f7b44c6-c6f3-40d0-9d5b-07c855710443',
      status: 'queued',
      created: 2022-06-07T00:29:32.231Z,
      pin: {
        cid: 'baeaaadjsguycynzygy2tenrzgezq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '0f7246ce-2bb5-4f68-850e-752cc80e4867',
      status: 'queued',
      created: 2022-06-07T00:29:31.213Z,
      pin: {
        cid: 'baeaaadjsguycynzygyydonrugeya',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '2c0eed59-dc5c-4450-ad99-5866227f27e6',
      status: 'queued',
      created: 2022-06-07T00:29:30.149Z,
      pin: {
        cid: 'baeaaadjsguycynzygu3demzwga3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'cac1d520-a776-41bb-8087-049e64ca9fb2',
      status: 'queued',
      created: 2022-06-07T00:29:28.878Z,
      pin: {
        cid: 'baeaaadjsguycynzyguytemjvgazq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'f6b07865-cf08-4208-8bca-a8b131d10412',
      status: 'queued',
      created: 2022-06-07T00:29:27.913Z,
      pin: {
        cid: 'baeaaadjsguycynzygq2dgnrrhe4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '659e58d7-1227-41a6-9a26-e7fe1e27f8c7',
      status: 'queued',
      created: 2022-06-07T00:29:26.570Z,
      pin: {
        cid: 'baeaaadjsguycynzygm4tkmzshe2q',
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
  "cf-ray": "717546451cb87ff3-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:38 GMT",
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
      "requestid": "3a00b1e2-c697-4ca6-9d5c-139e4dd14b56",
      "status": "queued",
      "created": "2022-06-07T00:29:35.701+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzyha2demrzgi2q",
        "_id": "3a00b1e2-c697-4ca6-9d5c-139e4dd14b56",
        "sourceCid": "baeaaadjsguycynzyha2demrzgi2q",
        "contentCid": "baeaaadjsguycynzyha2demrzgi2q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:35.701+00:00",
        "updated": "2022-06-07T00:29:35.701+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:35.701+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5a7a6782-556c-42b6-8f3f-2fa0a152f727",
      "status": "queued",
      "created": "2022-06-07T00:29:34.929+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzyg44tqnrvgiza",
        "_id": "5a7a6782-556c-42b6-8f3f-2fa0a152f727",
        "sourceCid": "baeaaadjsguycynzyg44tqnrvgiza",
        "contentCid": "baeaaadjsguycynzyg44tqnrvgiza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:34.929+00:00",
        "updated": "2022-06-07T00:29:34.929+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:34.929+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19",
      "status": "queued",
      "created": "2022-06-07T00:29:33.86+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzyg42tkmbxge4q",
        "_id": "77b23ab7-8fd1-4d8e-b8d7-8340c5e6ef19",
        "sourceCid": "baeaaadjsguycynzyg42tkmbxge4q",
        "contentCid": "baeaaadjsguycynzyg42tkmbxge4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:33.86+00:00",
        "updated": "2022-06-07T00:29:33.86+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:33.86+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "1224dc88-41ed-472a-abdc-ed9be526d8c2",
      "status": "queued",
      "created": "2022-06-07T00:29:32.595+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzyg4ytambqge3a",
        "_id": "1224dc88-41ed-472a-abdc-ed9be526d8c2",
        "sourceCid": "baeaaadjsguycynzyg4ytambqge3a",
        "contentCid": "baeaaadjsguycynzyg4ytambqge3a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:32.595+00:00",
        "updated": "2022-06-07T00:29:32.595+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.595+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "0f7b44c6-c6f3-40d0-9d5b-07c855710443",
      "status": "queued",
      "created": "2022-06-07T00:29:32.231+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygy2tenrzgezq",
        "_id": "0f7b44c6-c6f3-40d0-9d5b-07c855710443",
        "sourceCid": "baeaaadjsguycynzygy2tenrzgezq",
        "contentCid": "baeaaadjsguycynzygy2tenrzgezq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:32.231+00:00",
        "updated": "2022-06-07T00:29:32.231+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:32.231+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "0f7246ce-2bb5-4f68-850e-752cc80e4867",
      "status": "queued",
      "created": "2022-06-07T00:29:31.213+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygyydonrugeya",
        "_id": "0f7246ce-2bb5-4f68-850e-752cc80e4867",
        "sourceCid": "baeaaadjsguycynzygyydonrugeya",
        "contentCid": "baeaaadjsguycynzygyydonrugeya",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:31.213+00:00",
        "updated": "2022-06-07T00:29:31.213+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:31.213+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "2c0eed59-dc5c-4450-ad99-5866227f27e6",
      "status": "queued",
      "created": "2022-06-07T00:29:30.149+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygu3demzwga3a",
        "_id": "2c0eed59-dc5c-4450-ad99-5866227f27e6",
        "sourceCid": "baeaaadjsguycynzygu3demzwga3a",
        "contentCid": "baeaaadjsguycynzygu3demzwga3a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:30.149+00:00",
        "updated": "2022-06-07T00:29:30.149+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:30.149+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "cac1d520-a776-41bb-8087-049e64ca9fb2",
      "status": "queued",
      "created": "2022-06-07T00:29:28.878+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzyguytemjvgazq",
        "_id": "cac1d520-a776-41bb-8087-049e64ca9fb2",
        "sourceCid": "baeaaadjsguycynzyguytemjvgazq",
        "contentCid": "baeaaadjsguycynzyguytemjvgazq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:28.878+00:00",
        "updated": "2022-06-07T00:29:28.878+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:28.878+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "f6b07865-cf08-4208-8bca-a8b131d10412",
      "status": "queued",
      "created": "2022-06-07T00:29:27.913+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygq2dgnrrhe4a",
        "_id": "f6b07865-cf08-4208-8bca-a8b131d10412",
        "sourceCid": "baeaaadjsguycynzygq2dgnrrhe4a",
        "contentCid": "baeaaadjsguycynzygq2dgnrrhe4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:27.913+00:00",
        "updated": "2022-06-07T00:29:27.913+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:27.913+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "659e58d7-1227-41a6-9a26-e7fe1e27f8c7",
      "status": "queued",
      "created": "2022-06-07T00:29:26.57+00:00",
      "pin": {
        "cid": "baeaaadjsguycynzygm4tkmzshe2q",
        "_id": "659e58d7-1227-41a6-9a26-e7fe1e27f8c7",
        "sourceCid": "baeaaadjsguycynzygm4tkmzshe2q",
        "contentCid": "baeaaadjsguycynzygm4tkmzshe2q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T00:29:26.57+00:00",
        "updated": "2022-06-07T00:29:26.57+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T00:29:26.57+00:00",
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
