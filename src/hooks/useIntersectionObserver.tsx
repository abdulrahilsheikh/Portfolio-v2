import { useCallback, useEffect, useRef, useState } from "react";

export function useIntersection<T extends HTMLElement = any>(
	options?: ConstructorParameters<typeof IntersectionObserver>[1]
) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [visibleItem, setVisibleItem] = useState("");
	const scrollHandler = useCallback(() => {
		if (!ref.current) return;
		for (const item of ref.current.children) {
			const { bottom, top } = item.getBoundingClientRect();
			if (
				top < window.innerHeight / 2 &&
				bottom > window.innerHeight / 2
			) {
				console.log(item.id, item.getBoundingClientRect());
				if (visibleItem != item.id) {
					setVisibleItem(item.id);
				}
			}
		}
	}, [ref.current]);

	return { ref, visibleItem, scrollHandler };
}
