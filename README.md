# OpenTelemetry Node.js Example

This project demonstrates how to use Node.js, TypeScript, Jaeger, Docker Compose, and OpenTelemetry Collector to collect trace data and export it to Jaeger.

## Setup

- Node.js
- TypeScript
- Express
- Docker Compose
- OpenTelemetry
- OpenTelemetry Collector
- Jaeger

### Installation and Execution

Prerequisites
Node.js (recommended version: 18.x or higher)
Docker and Docker Compose

## Steps

```shell
npm install
```

```shell
docker compose up -d
```

```shell
npm run dev
```

```shell
curl "http://localhost:8080/rolldice?rolls=5"
```

open browser jaeger 
`http://localhost:16686/`
