import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { ReactNode, useRef } from "react";
import VSectionSpacer from "./VSectionSpacer";

function HScroll({ children, delimiter }: { children?: ReactNode, delimiter?: boolean }) {

    const hscrollRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        const sections = gsap.utils.toArray(".hscroll-section-wrapper", hscrollRef.current);

        if(hscrollRef.current) {
            hscrollRef.current.style.width = `${sections.length*100}vw`;
        }

        gsap.to(sections, {
            xPercent: -100 * (sections.length-1),
            ease: "none",
            scrollTrigger: {
                trigger: hscrollRef.current,
                pin: true,
                scrub: 1,
                end: "+="+hscrollRef.current?.scrollWidth,
                // markers: true,
            },
            onStart: () => console.log("hscroll start"),
            onComplete: () => console.log("hscroll complete"),
            onUpdate: () => console.log("hscroll update"),
        })
    });
    return (
        <div className="hscroll" ref={hscrollRef}>   
            {React.Children.map(children, (child, i) => 
                <>
                    <div className="hscroll-section-wrapper">
                        {delimiter && i !== 0 ? <VSectionSpacer width="0" delimiter /> : null}
                        {child}
                    </div>
                </>
            )}
        </div>
    );
}

export default HScroll;