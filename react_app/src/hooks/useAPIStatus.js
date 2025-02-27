import { useState } from "react";

const useAPIStatus = () => {
  const [status, setStatus] = useState("loading");

  const isLoading = status === "loading";
  const isDone = status === "done";
  const isError = status === "error";

  return {
    isLoading,
    isDone,
    isError,
    setStatus,
  };
};

export default useAPIStatus;
