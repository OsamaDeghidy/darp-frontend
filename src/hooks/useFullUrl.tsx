import { useRouter } from 'next/router';

export const useFullUrl = () => {
    const router = useRouter();

    const { protocol, host } = window.location;
    const pathname = router.pathname;
    const query = router.query;
    const queryString = new URLSearchParams(
        query as Record<string, string>,
    ).toString();

    return `${protocol}//${host}${pathname}${queryString ? `?${queryString}` : ''}`;
};
