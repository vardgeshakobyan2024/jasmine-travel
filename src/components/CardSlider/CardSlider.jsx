import './cardSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './cardSlider.css';
import teacherMilena from '../../images/milenaTeacher.jpeg';
import { EffectCards } from 'swiper/modules';


const CardSlider = () => {
    const usersData = [
        {
            id: 1,
            images: teacherMilena,
            fullName: "Միլենա Համբարձումյան",
            decription: "Ամենալավ աշխատանքներից մեկը , դա մարդկանց ճանապարհորդության ուղարկելն է: Անչափ հաճելի պրոցեսս է մանրամասներն երես առ երես քննարկելը, թղթաբանական հարցերով գրագետ զբաղվելը,հաշվի առնելով բոլոր նրբություններն տուր օպերատրի աշխատանքը համարվում է անչափ պատասխանատու : Այդ բոլոր հմտությունները կարելի է ձեռք բերել Jasmine Traveli ի օգնությամբ, այստեղ Ձեզ կօգնեն հեշտությամբ սովորել մասնագիտությունն ու ինչու՞ ոչ նաև ունենալ սեփական տուրիստականը"
        }
    ]

    return (
        <div className="cardSliderParent">
            <div className="container">
                <h6>կարծիքներ</h6>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper cardSwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default CardSlider;