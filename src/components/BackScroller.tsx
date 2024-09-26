
import { useGSAP } from "@gsap/react";
import * as CSS from "csstype";
import gsap from "gsap";
import { useRef } from "react";

export type BackScrollerItem = {
    img: string,
    mask?: string,
    objectFit?: CSS.Property.ObjectFit,
    objectPosition?: CSS.Property.ObjectPosition,
    transform?: CSS.Property.Transform,
}

function BackScroller({ items }: { items: BackScrollerItem[] }) {

    const BackScrollerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        const body = document.querySelector("html")!;
        gsap.to(BackScrollerRef.current, {
            y: -(items.length-1)*window.innerWidth,
            ease: "none",
            scrollTrigger: {
                trigger: body,
                start: 0,
                end: "max",
                scrub: true,
            }
        })
    })

    return (
        <div className="back-scroller" ref={BackScrollerRef}>
            {
                items.map((item, i) => (
                    <div className="back-scroller-item-wrapper" style={{
                        left: ((i % 2 - 0.5) * 2 * 25)+"vw"
                    }} key={i}>
                        <img src={item.img} alt="Back Img" style={{
                            zIndex: 2,
                            objectFit: item.objectFit || "cover",
                            objectPosition: item.objectPosition || "center",
                            transform: item.transform || undefined,
                        }} />
                        { item.mask ? <img src={item.mask} alt="Back Img Mask" style={{
                            zIndex: 4,
                            objectFit: item.objectFit || "cover",
                            objectPosition: item.objectPosition || "center",
                            transform: item.transform || undefined,
                        }} /> : null}
                    </div>
                ))
            }
        </div>
    )
}

export default BackScroller;