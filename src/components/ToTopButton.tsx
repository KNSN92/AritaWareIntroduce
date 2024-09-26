import { useEffect } from "react";

function ToTopButton() {

    const handleScroll = () => {
        const toTopButton = document.querySelector(".to-top-btn");
        if(document.documentElement.scrollTop <= document.documentElement.clientHeight/4) {
            toTopButton?.classList.add("invisible");
        }else {
            toTopButton?.classList.remove("invisible");
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <a className="to-top-btn invisible" href="#">
            <div />
        </a>
    );
}

export default ToTopButton;