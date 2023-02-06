import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url);
                const data = res.json();
                setData(await data);
            } catch (e) {
                setErrorText(await e);
            } finally {
                setIsLoading(false);
            }
        })();

    }, [url])

    return [data, isLoading, errorText]
}

export default useFetch;
