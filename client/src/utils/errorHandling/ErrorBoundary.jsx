import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import FallBackErrorComponent from "./FallBackErrorComponent";

const myErrorHandler = (error, errorInfo) => {
  console.log("logging", error, errorInfo);
  // Do something with the error
  // E.g. reporting error using sentry ( see part 3)
};

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <FallBackErrorComponent
      errorProps={error}
      onClickSubmit={() => resetErrorBoundary}
    />
  );
};

const ErrorHandlerComponent = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorHandlerComponent;
