import { ReactNode, useRef } from "react";

import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

function Section({ image, content, children }: {image: string, content?: "right"|"left", children?: ReactNode}) {

    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.from(sectionRef.current, {
            y: "10vh",
            opacity: 0,
            duration: 0.75,
                scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
            }
        });
    });

    if(content === undefined || content === "right") {
        return (
            <section className="section" ref={sectionRef}>
                <div className="section-img">
                    <img src={image} alt="Section Img"/>
                </div>
                <div className="section-content">
                    {children}
                </div>
            </section>
        );
    }else {
        return (
            <section className="section" ref={sectionRef}>
                <div className="section-content">
                    {children}
                </div>
                <div className="section-img">
                    <img src={image} alt="Section Img" style={{marginLeft:"auto"}}/>
                </div>
            </section>
        );
    }
}

export default Section;