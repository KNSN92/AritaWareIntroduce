
import { useGSAP } from "@gsap/react";
import * as CSS from "csstype";
import gsap from "gsap";
import { useRef } from "react";

function SectionSpacer({ height, delimiter, animate, delimiterColorOverride }: {height: CSS.Property.MarginTop, delimiter?: boolean, animate?: boolean, delimiterColorOverride?: CSS.Property.Color}) {
    const SpacerDelimiter = useRef(null);
    if(delimiter && animate) {
        useGSAP(() => {
            gsap.from(SpacerDelimiter.current, {
                scaleX: 0,
                opacity: 0,
                duration: 0.75,
                scrollTrigger: {
                    trigger: SpacerDelimiter.current,
                    start: "top bottom",
                }
            });
        });
    }
    return <div style={{
        display: "block",
        margin: "0 auto",
        position: "relative",
        width: delimiter ? "80vw" : "100vw",
        height: height,
    }}>
        {delimiter ? <div style={{
            width: "100%",
            height: 0,
            position: "absolute",
            top: "50%",
            borderTop: `2px solid ${delimiterColorOverride ? delimiterColorOverride : "var(--main-color)"}`,
        }} ref={SpacerDelimiter} />
    : null}
    </div>
}

export default SectionSpacer;