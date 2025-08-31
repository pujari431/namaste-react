import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS!!!</h1>
      <h2>{err?.error?.message || err?.message || "Unknown Error"}</h2>
      <h3>Something went wrong</h3>
    </div>
  );
};

export default ErrorElement;
