import { useGSAP } from "@gsap/react";
import Images from "../Images";
import gsap from "gsap";

function Footer() {
    useGSAP(() => {
        gsap.set(".footer > .img-wrapper > img", {
            scale: 1.2
        });
        gsap.to(".footer > .img-wrapper > img", {
            scale: 1.2,
            rotate: 360,
            delay: 0,
            duration: 5,
            ease: "none",
            repeat: -1,
        });
    })

    return (
        <div className="footer">
            <div className="content">
                <h1>Copyright © KNSN92 All Rights Reserved.</h1>
                <p>
                    当サイトで使われている画像は全て
                    <a href="https://commons.wikimedia.org">Wikimedia Commons</a>
                    上で配布されている
                    <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0</a>
                    ライセンスが付与されたもののみを使用しています。
                </p>
            </div>
            <div className="img-wrapper">
                <img src={Images.logo.img} alt="Logo"></img>
            </div>
        </div>
    );
}

export default Footer;