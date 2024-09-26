import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';

function Title({ title, sub_title }: {title: string, sub_title?: string}) {

    const titleRef = useRef(null);
    const titleLeftBarRef = useRef(null);
    const titleRightBarRef = useRef(null);

    useGSAP(() => {
        gsap.from(titleRef.current, {
            y: "10vh",
            opacity: 0,
            duration: 0.75,
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top bottom",
            }
        });
        gsap.to(titleLeftBarRef.current, {
            width: "100%",
            marginRight: "0",
            delay: 0.25,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top bottom",
            }
        });
        gsap.to(titleRightBarRef.current, {
            width: "100%",
            marginLeft: "0",
            delay: 0.25,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top bottom",
            }
        });
    });

    return (
        <div className="title" ref={titleRef}>
            <div>
                <div className="title-bar title-bar-left" ref={titleLeftBarRef} />
                <h1 className="title-main-text"
                    style={{
                        "textWrap": "nowrap"
                    }}
                >
                    {title}
                </h1>
                <div className="title-bar title-bar-right" ref={titleRightBarRef} />
            </div>
            <h2 className="sub-title-text"
                style={{
                    "textWrap": "nowrap"
            }}>
                {sub_title}
            </h2>
        </div>
    );
}

export default Title;