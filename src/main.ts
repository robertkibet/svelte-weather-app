import "./styles/app.css";
import App from "./App.svelte";
import * as Sentry from "@sentry/svelte";
import {BrowserTracing} from "@sentry/tracing";

// Initialize the Sentry SDK here
Sentry.init({
  dsn: "https://07b45a3be7784100967fdee0a756514c@o536116.ingest.sentry.io/4504045855768576",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const app = new App({
  target: document.getElementById("app"),
});

export default app;
