import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="text-center">
      <div className="text-4xl">Oops!!</div>
      <div className="text-3xl">Something went wrong</div>
      <div className="text-3xl">
        {err.status}:{err.statusText}
      </div>
    </div>
  );
};
export default Error;
