/*instrumentation.ts*/
import * as opentelemetry from "@opentelemetry/sdk-node";
import { Resource } from "@opentelemetry/resources";
import {
  SEMRESATTRS_SERVICE_NAME,
  SEMRESATTRS_SERVICE_VERSION,
} from "@opentelemetry/semantic-conventions";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-proto";
import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { ExpressInstrumentation } from "@opentelemetry/instrumentation-express";

// OTLPトレースエクスポーターの設定
const otlpTraceExporter = new OTLPTraceExporter({
  url: "http://localhost:4318/v1/traces",
  headers: {},
});

const resource = Resource.default().merge(
  new Resource({
    [SEMRESATTRS_SERVICE_NAME]: "example-express-api-server",
    [SEMRESATTRS_SERVICE_VERSION]: "0.1.0",
  })
);

const sdk = new opentelemetry.NodeSDK({
  resource: resource,
  traceExporter: otlpTraceExporter,
  instrumentations: [
    getNodeAutoInstrumentations(),
    new HttpInstrumentation({
      requestHook: (span, request) => {
        console.log(`HTTP request started`);
      },
    }),
    new ExpressInstrumentation({
      requestHook: (span, request) => {
        console.log(`Express request started`);
      },
    }),
  ],
});

sdk.start();
