"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
};

const ErrorPage = ({ error, reset }: ErrorProps) => {
  console.error("페이지 오류 발생:", error);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚨 에러가 발생했습니다!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()} style={{
        background: "#0070f3",
        color: "white",
        padding: "8px 12px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
      }}>재시도</button>
    </div>
  )
}

export default ErrorPage;
