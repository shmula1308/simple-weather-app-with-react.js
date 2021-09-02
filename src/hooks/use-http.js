import { useCallback, useContext } from "react";
import WeatherContext from "../store/weather-context";

const useHttp = () => {
  const ctx = useContext(WeatherContext);
  const { setIsLoading, hasError } = ctx;

  const sendRequest = useCallback(
    async (requestConfig, applyData) => {
      setIsLoading(true);
      hasError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });
        if (!response.ok) {
          throw new Error("Request failed! " + response.status);
        }

        const data = await response.json();
        applyData(data);
      } catch (error) {
        hasError(error);
      }
      setIsLoading(false);
    },
    [hasError, setIsLoading]
  );

  return {
    errorMessage: ctx.errorMessage,
    isLoading: ctx.isLoading,
    sendRequest,
  };
};

export default useHttp;
