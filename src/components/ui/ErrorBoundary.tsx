import { ReactNode } from "react";
import {
  FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
} from "react-error-boundary";

// Fallback UI Component
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong: 😢</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function ErrorBoundary(props: { children: ReactNode }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error: Error, info: React.ErrorInfo) => {
        console.error("Error caught by ErrorBoundary:", error, info);
        // Log the error to an error reporting service
        // Example: Sentry.captureException(error, { extra: info });
      }}
      onReset={() => {
        console.log("Error boundary reset");
        // Perform any reset logic here
      }}
    >
      {props.children}
    </ReactErrorBoundary>
  );
}
