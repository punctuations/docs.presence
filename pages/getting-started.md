# Getting started

## Endpoint

The endpoint for presence will always follow this structure: `presence.im/api/:platform/:type/:param`.
With that being said the endpoint will only except a `GET` request to it.

## Examples

`GET https://presence.im/api/twitter/user/atmattt?type=base64`

```json
{ "data": "data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR..." }
```

![](https://presence.im/api/twitter/user/atmattt)

----

`GET https://presence.im/api/github/user/punctuations?bg=282e33&text=fff&stats_text=c9c9c9`

![](https://presence.im/api/github/user/punctuations?bg=282e33&text=fff&stats_text=c9c9c9)

----

`GET https://presence.im/api/spotify/track/3dhjNA0jGA8vHBQ1VdD6vV?index=1&type=base64`

```json
{ "data": "data:image/svg+xml;base64,CiAgICA8c3ZnCiAgICAgIHhtbG5zPSJodHR..." }
```

base64 string used as a src:

![](https://presence.im/api/spotify/track/3dhjNA0jGA8vHBQ1VdD6vV?index=1)