## Request with no authentication token - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response object matches api spec schema (success)
  ✘ Returns a 403 (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins

##### Headers
```json
{}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins
*via util.inspect*
```
{
  error: {
    reason: 'INTERNAL_SERVER_ERROR',
    details: 'An unexpected error occurred.'
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
*via util.inspect*
```
null
```
#### Response - Unauthorized (401)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "6ff0a60098693a1a-SEA",
  "connection": "close",
  "content-length": "86",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 20 Apr 2022 20:32:18 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"error":{"reason":"INTERNAL_SERVER_ERROR","details":"An unexpected error occurred."}}
```## Request with invalid token - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response object matches api spec schema (success)
  ✘ Returns a 403 (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins
*via util.inspect*
```
{
  error: {
    reason: 'INTERNAL_SERVER_ERROR',
    details: 'An unexpected error occurred.'
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
*via util.inspect*
```
null
```
#### Response - Unauthorized (401)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "6ff0a605df6760dd-SEA",
  "connection": "close",
  "content-length": "86",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 20 Apr 2022 20:32:19 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"error":{"reason":"INTERNAL_SERVER_ERROR","details":"An unexpected error occurred."}}
```