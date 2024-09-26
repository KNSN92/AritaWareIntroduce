import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode } from "react";

function PinnedContent({ contents }: { contents: {right: ReactNode, left: ReactNode}[] }) {

    useGSAP(() => {
        const contents = gsap.utils.toArray(".pinned-content-element");
        contents.forEach((content, i) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: content as any,
                    start: () => "top bottom",
                    end: () => "bottom top",
                    pin: true,
                    pinSpacing: i === contents.length - 1,
                    scrub: true,
                    toggleActions: "play none reverse none",
                    invalidateOnRefresh: true,
    
                    markers: true,
                }
            })
            
            tl
            .to(content as any, { duration: 0.33, opacity: 1, y:"50%" })  
            .to(content as any, { duration: 0.33, opacity: 0, y:"0%" }, 0.66);
            
        });
    });

    return (
        <section className="pinned-content-section">
            {
                contents.map((content, i) => (
                    <div className="pinned-content-element" key={i}>
                        <div className="pinned-content-element-right">
                            {content.right}
                        </div>
                        <div className="pinned-content-element-left">
                            {content.left}
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

export default PinnedContent;