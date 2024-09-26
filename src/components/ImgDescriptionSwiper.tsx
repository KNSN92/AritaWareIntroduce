import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { ReactNode, useRef } from 'react';

import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

export type ImgDesc = {
    image: string,
    title: string,
    content: ReactNode | string,
}

function ImgDescSwiper({img_descs}: {img_descs: ImgDesc[]}) {

    const swiperRef = useRef(null);

    useGSAP(() => {
        gsap.from(swiperRef.current, {
            y: "10vh",
            opacity: 0,
            duration: 0.75,
                scrollTrigger: {
                trigger: swiperRef.current,
                start: "top bottom",
            }
        });
    });

    return (
        <Swiper
            className="img-desc-swiper"
            ref = {swiperRef}
            spaceBetween={200}
            centeredSlides={true}
            slidesPerView={1.25}
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{
                clickable: true,
                type: "bullets",
            }}
            speed={600}
        >
            {
                img_descs.map((v, i) => (
                    <SwiperSlide key={i}>
                        <div className="img-desc-slide">
                            <img src={v.image} />
                            <div className="content">
                                <h1>{v.title}</h1>
                                <div>{v.content}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                )
            }
        </Swiper>
    );
}

export default ImgDescSwiper;