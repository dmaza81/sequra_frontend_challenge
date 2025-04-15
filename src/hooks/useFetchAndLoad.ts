import { AxiosCall } from "@/models";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;
  let result = {} as AxiosResponse;

  // eslint-disable-next-line
  const callEndpoint = async (axiosCall: AxiosCall<any>) => {
    if (axiosCall.controller) controller = axiosCall.controller;

    setLoading(true);
    try {
      result = await axiosCall.call;
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }

    return result;
  };

  const cancelEndpoint = () => {
    setLoading(false);
    if (controller) {
      controller.abort();
    }
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
    // eslint-disable-next-line
  }, []);

  return { loading, callEndpoint, cancelEndpoint };
};

export default useFetchAndLoad;
