import { useMemo } from 'react';

const useId = () => useMemo(() => Math.random().toString(36).substring(2, 8), []);

export default useId;
