import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";

export function ErrorElement() {
  const error = useRouteError();
  const navigate = useNavigate();

  // Determine the error type
  let errorMessage = "An unexpected error occurred.";
  let errorTitle = "Oops!";
  let statusCode = 500;

  if (isRouteErrorResponse(error)) {
    // If the error is from a loader/action, use its response
    statusCode = error.status;
    errorTitle = error.statusText || "Error";
    errorMessage = error.data || "Something went wrong!";
  } else if (error instanceof Error) {
    // General JavaScript error
    errorMessage = error.message;
  }

  return (
    // TODO : i wall create good component for this, this component for test
    <div>
      <h1>{errorTitle}</h1>
      <p>
        Error {statusCode}: {errorMessage}
      </p>

      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    </div>
  );
}
