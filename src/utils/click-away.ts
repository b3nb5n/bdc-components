import { MutableRefObject, useEffect } from 'react';

const useClickAway = (
	ref: MutableRefObject<HTMLElement | null>,
	clickAwayHandler: (e: MouseEvent) => void
) => {
	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (!ref.current?.contains(e.target as Node)) clickAwayHandler(e);
		};

		document.addEventListener('mousedown', handleClick);
		return () => document.removeEventListener('mousedown', handleClick);
	}, [ref]);
};

export default useClickAway;
