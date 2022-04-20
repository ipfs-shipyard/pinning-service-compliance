## Request with no authentication token - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response object matches api spec schema (success)
  ✘ Returns a 403 (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins

##### Headers
```json
{}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins
*via util.inspect*
```
{
  error: {
    reason: 'KEYS_MUST_BE_STRINGS',
    details: 'pinata_api_key and pinata_secret_api_key must both be strings'
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
*via util.inspect*
```
null
```
#### Response - Bad Request (400)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "117",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 20 Apr 2022 20:32:18 GMT",
  "etag": "W/\"75-8hWiVluTmqi8Bp2+E+MmsFL38tY\"",
  "server": "nginx/1.16.1",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "180",
  "x-ratelimit-remaining": "179",
  "x-ratelimit-reset": "1650486795"
}
```
##### Body
```json
{"error":{"reason":"KEYS_MUST_BE_STRINGS","details":"pinata_api_key and pinata_secret_api_key must both be strings"}}
```## Request with invalid token - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response object matches api spec schema (success)
  ✘ Returns a 403 (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins
*via util.inspect*
```
{
  error: {
    reason: 'INVALID_CREDENTIALS',
    details: 'Invalid/expired credentials'
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "82",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 20 Apr 2022 20:32:23 GMT",
  "etag": "W/\"52-hDmJB39hiWxMgXnl95p1Dk5Zk6Q\"",
  "server": "nginx/1.16.1",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "180",
  "x-ratelimit-remaining": "178",
  "x-ratelimit-reset": "1650486795"
}
```
##### Body
```json
{"error":{"reason":"INVALID_CREDENTIALS","details":"Invalid/expired credentials"}}
```