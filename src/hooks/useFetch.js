import { useEffect, useState, useCallback } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorText, setErrorText] = useState('');

    const f = useCallback(async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
            } catch (e) {
                setErrorText(e);
            } finally {
                setIsLoading(false);
            }


    }, [])

    return [data,f, isLoading, errorText]
}

export default useFetch;
