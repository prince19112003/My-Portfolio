import React, { useRef, useState, useEffect } from "react";

const useOnScreen = (ref, rootMargin = "0px") => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            { rootMargin }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref, rootMargin]);

    return isIntersecting;
};

const Reveal = ({ children, className = "" }) => {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref, "-50px");

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                } ${className}`}
        >
            {children}
        </div>
    );
};

export default Reveal;
