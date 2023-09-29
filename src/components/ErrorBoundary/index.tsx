import { FallbackProps } from "react-error-boundary";

const ErrorBoundary = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button
        onClick={(e) => {
          e.preventDefault();
          resetErrorBoundary();
        }}
      >
        go back
      </button>
    </div>
  );
};

export default ErrorBoundary;
