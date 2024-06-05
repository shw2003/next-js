"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      Error in review Id:::: {error.message}
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
