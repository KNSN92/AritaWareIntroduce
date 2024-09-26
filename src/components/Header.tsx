import { ReactNode } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Header({ image, children }: { image: string; children?: ReactNode }) {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to("#header-mask", {
            opacity: 0,
            duration: 4
        });
        tl.from(".header-content > *", {
            y: "5vh",
            opacity: 0,
            duration: 3,
            ease: "back.out"
        }, "<1");
    });
    return (
        <div
            className="header"
            style={{
                backgroundImage: `url(${image}`,
            }}
        >
            <div id="header-mask" />
            <div className="header-content">
                {children}
            </div>
        </div>
    );
}

export default Header;
