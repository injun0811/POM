import React, { useEffect, useRef } from "react";

const AutoScrollSection = ({ children, className }) => {
    const sectionRef = useRef();

    // 자동 스크롤 애니메이션
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const duration = 10000;

        // 애니메이션 시작
        const startAnimation = () => {
            const start = el.scrollLeft;
            const end = el.scrollWidth - el.clientWidth;
            const startTime = performance.now();

            // 애니메이션 프레임
            const animateScroll = (now) => {
                const elapsed = now - startTime;
                const percent = Math.min(elapsed / duration, 1);
                el.scrollLeft = start + (end - start) * percent;
                if (percent < 1) {
                    requestAnimationFrame(animateScroll);
                } else {
                    setTimeout(() => {
                        el.scrollLeft = 0;
                        requestAnimationFrame(startAnimation);
                    }, 800);
                }
            };

            if (end > 0) {
                requestAnimationFrame(animateScroll);
            } else {
                el.scrollLeft = 0;
            }
        };
        startAnimation();
    }, [children]);

    return (
        <section ref={sectionRef} className={className}>
            {children}
        </section>
    );
};

export default AutoScrollSection;
