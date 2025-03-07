const breakpoints = {
    mobile: { min: "320px", max: "479px" },
    tablet: { min: "480px", max: "767px" },
    laptop: { min: "768px", max: "1023px" },
    desktop: { min: "1024px", max: "1919px" },
    largeDesktop: { min: "1920px" },
};

export const mediaQueries = (key) => {
    if (key === "largeDesktop") {
        return `@media (min-width: ${breakpoints[key].min})`;
    }
    return `@media (min-width: ${breakpoints[key].min}) and (max-width: ${breakpoints[key].max})`;
};
