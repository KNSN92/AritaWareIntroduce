import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Images from "../Images";

function NavBar() {

    const NavBarRef = useRef(null);

    useGSAP(() => {
        const showAnim = gsap.from(NavBarRef.current, {
            yPercent: -100,
            paused: true,
            duration: 0.2,
        });

        ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: (self) => {
                self.direction === -1 && self.progress > 0 ? showAnim.play() : showAnim.reverse();
            },
        });

        const navElements = gsap.utils.toArray(".nav-element", NavBarRef.current);
        navElements.forEach(element => {
            const lineEle = (element as HTMLElement).querySelector("div");
            gsap.set(lineEle, {
                scaleX: 0,
                xPercent: -50,
            });
            const tl = gsap.timeline({ paused: true, defaults: {duration: 0.5} });
            tl.to(
                lineEle, {
                    scaleX: 1,
                    xPercent: 0,
                }
            );
            tl.addPause("exit");
            const exitTime = tl.duration();
            tl.to(
                lineEle, {
                    scaleX: 0,
                    xPercent: 50,
                }
            );
            (element as HTMLElement).addEventListener("mouseenter", () => {
                if(tl.time() < exitTime) {
                    tl.play();
                }else {
                    tl.restart();
                }
            });
            (element as HTMLElement).addEventListener("mouseleave", () => {
                if(tl.time() < exitTime) {
                    tl.reverse();
                }else {
                    tl.play();
                }
            });
        });
    })

    return (
        <nav className="navbar" ref={NavBarRef}>
            <a href="#" className="nav-icon">
                <img src={Images.logo.img} alt="Logo"></img>
                有田焼
            </a>
            <div className="nav-elements">
                <a href="#about" className="nav-element">
                    有田焼とは
                    <div/>
                </a>
                <a href="#features" className="nav-element">
                    有田焼の特徴
                    <div/>
                </a>
                <a href="#styles" className="nav-element">
                    有田焼の様式
                    <div/>
                </a>
                <a href="#history" className="nav-element">
                    有田焼の歴史
                    <div/>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;