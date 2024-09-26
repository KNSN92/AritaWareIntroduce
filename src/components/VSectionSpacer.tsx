
import { useGSAP } from "@gsap/react";
import * as CSS from "csstype";
import gsap from "gsap";
import { useRef } from "react";

function VSectionSpacer({ width, delimiter }: {width: CSS.Property.MarginTop, delimiter?: boolean}) {
    const VSpacerDelimiter = useRef(null);
    if(delimiter) {
        useGSAP(() => {
            gsap.from(VSpacerDelimiter.current, {
                scaleY: 0,
                opacity: 0,
                duration: 0.75,
                scrollTrigger: {
                    trigger: VSpacerDelimiter.current,
                    start: "top bottom",
                }
            });
        });
    }
    return <div style={{
        display: "block",
        margin: "auto 0",
        position: "relative",
        width: width,
        height: delimiter ? "80vh" : "100vh",
    }}>
        {delimiter ? <div style={{
            width: 0,
            height: "100%",
            position: "absolute",
            left: "50%",
            borderLeft: "2px solid var(--main-color)",
        }} ref={VSpacerDelimiter} />
    : null}
    </div>
}

export default VSectionSpacer;