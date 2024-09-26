import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, useRef } from "react";

function SimpleSection({ children }: { children?: ReactNode }) {

    const simpleSectionRef = useRef(null);

    useGSAP(() => {
        gsap.from(simpleSectionRef.current, {
            y: "10vh",
            opacity: 0,
            duration: 0.75,
                scrollTrigger: {
                trigger: simpleSectionRef.current,
                start: "top bottom",
            }
        });
    });

    return (
        <section className="simple-section" ref={simpleSectionRef}>
            <div className="simple-section-content">
                {children}
            </div>
        </section>
    );
}

export default SimpleSection;