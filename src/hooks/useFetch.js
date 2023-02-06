import { useEffect, useState } from 'react';

const useFetch = (url, options = {}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorText, setErrorText] = useState('');
    // const [abort, setAbort] = useState(() => { });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const abortController = new AbortController();
                const signal = abortController.signal;
                // setAbort(abortController.abort);
                console.log(signal)

                const res = await fetch(url, { ...options, signal });
                const data = await res.json();
                setData(data);
            } catch (e) {
                setErrorText(e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
        // return () => {
            // abort();
        // }

    }, [url])

    return [data, isLoading, errorText]
}

export default useFetch;
