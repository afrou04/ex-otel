
# OpenTelemetry Node.js Example

```shell

curl "http://localhost:8080/rolldice?rolls=2"

npx ts-node --require ./instrumentation.ts app.ts
Listening for requests on http://localhost:8080

{
  resource: {
    attributes: {
      'service.name': 'service-name-here',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.25.1',
      'service.version': '0.1.0'
    }
  },
  traceId: '0781d6a5a39e7db228d75319a01cfc56',
  parentId: '2848c3fa7d7e8004',
  traceState: undefined,
  name: 'rollOnce:0',
  id: '28f20940564ddfbd',
  kind: 0,
  timestamp: 1720675503789000,
  duration: 348.304,
  attributes: {},
  status: { code: 0 },
  events: [],
  links: []
}
{
  resource: {
    attributes: {
      'service.name': 'service-name-here',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.25.1',
      'service.version': '0.1.0'
    }
  },
  traceId: '0781d6a5a39e7db228d75319a01cfc56',
  parentId: '2848c3fa7d7e8004',
  traceState: undefined,
  name: 'rollOnce:1',
  id: '1f32ed6f9ed556fe',
  kind: 0,
  timestamp: 1720675503790000,
  duration: 28.143,
  attributes: {},
  status: { code: 0 },
  events: [],
  links: []
}
{
  resource: {
    attributes: {
      'service.name': 'service-name-here',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.25.1',
      'service.version': '0.1.0'
    }
  },
  traceId: '0781d6a5a39e7db228d75319a01cfc56',
  parentId: undefined,
  traceState: undefined,
  name: 'rollTheDice',
  id: '2848c3fa7d7e8004',
  kind: 0,
  timestamp: 1720675503788000,
  duration: 1498.849,
  attributes: {},
  status: { code: 0 },
  events: [],
  links: []
}
```
