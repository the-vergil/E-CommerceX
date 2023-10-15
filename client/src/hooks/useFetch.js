import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState();

    // add async in useEffect if error arises
    useEffect(() => {
      makeApiCall();
    }, [endpoint])
    
    const makeApiCall = async () => {
        const res = await fetchDataFromApi(endpoint);
        setData(res);
    }

    return {data};
};

export default useFetch;