import { useState } from 'react';
import './cardSlider.css';
import CardSliderItem from '../CardSliderItem/CardSliderItem';
import teacherArtavazd from '../../images/artavazdTeacher.jpeg';
import teacherMelana from '../../images/melanaTeacher.jpeg';
import teacherMariam from '../../images/mariamTeacher.jpeg';
import teacherMilena from '../../images/milenaTeacher.jpg';

const CardSlider = () => {
    const data = [
        {
            id: 1,
            fullName: "Արտավազդ Բալայան",
            description: "Ինձ համար հետաքրքրական  և արդիական է զբոսաշրջություն ոլորտը, որն էլ հիմք հանդիսացավ ուսումնասիրել  այն։ Ծանոթանալով զոսաշրջության ոլորտի շատ ընկերությունների գործունեությանը ընտրությունս կանգ առավ <<Jasmine Travel>> տուրիստական ընկերության վրա, իսկ ընկերության տնօրենը՝ Հասմիկ Պետրոսյանը, ոլորտին տվել է  Ամադեուս ծրագրի իմացությամբ 100-ից ավելի արհեստավարժ կադրեր։ Անսահման շնորհակալ լինելով ստացածս գիտելիքների համար,  մեծագույն վստահությամբ և պատասխանատվությամբ խորհուրդ կտամ ձեզ վստահել <<Jasmine Travel>>-ին:",
            image: teacherArtavazd
        },
        {
            id: 2,
            fullName: "Մելանա Ավոյան",
            description: "Եթե ցանկանում եք լիարժեք սովորել AMADEUS ծրագիրը և տուրիզմի բնագավառում դառնալ գիտակ մարդ՝ միանշանակ պետք է դիմել JASMIN TRAVEL Հասմիկի մոտ դասընթացները անցնում են շատ հագեցած և նա իր ողջ գիտելիքները առանց պահումների փոխանցում է իր ուսանողներին",
            image: teacherMelana
        },
        {
            id: 3,
            fullName: "Մարիամ Բալյան",
            description: "2022թ. ինձ մոտ ցանկություն առաջացավ ուսումնասիրել զբոսաշրջային գործը, որը շատ բազմաշերտ և հետաքրքիր ոլորտ է: Ոլորտում կան շատ պրոֆեսիոնալներ, որոնք պատրաստ են նոր սկսնակներին ծանոթացնել աշխատանքային նրբություններին, բայց իմ ընտրությունը կանգ առավ <<Jasmine Travel>> տուրիստական ընկերության վրա Մինչ օրս շնորհակալ եմ ստացածս գիտելիքների համար, ու մեծագույն ուրախությամբ և պատասխանատվությամբ խորհուրդ կտամ ձեզ վստահել <<Jasmine Travel>>-ին:",
            image: teacherMariam
        },
        {
            id: 4,
            fullName: "Միլենա Համբարձումյան",
            description: "Ամենալավ աշխատանքներից մեկը , դա մարդկանց ճանապարհորդության ուղարկելն է: Անչափ հաճելի պրոցեսս է մանրամասներն երես առ երես քննարկելը, թղթաբանական հարցերով գրագետ զբաղվելը,հաշվի առնելով բոլոր նրբություններն տուր օպերատրի աշխատանքը համարվում է անչափ պատասխանատու : Այդ բոլոր հմտությունները կարելի է ձեռք բերել Jasmine Traveli ի օգնությամբ, այստեղ Ձեզ կօգնեն հեշտությամբ սովորել մասնագիտությունն ու ինչու՞ ոչ նաև ունենալ սեփական տուրիստականը",
            image: teacherMilena
        }
    ]
    const [index, setIndex] = useState(0);

    const goNext = () => {
        setIndex(index + 1);

        if (index >= data.length - 1) {
            setIndex(0);
        }
    }

    const goPrev = () => {
        setIndex(index - 1);

        if (index <= 0) {
            setIndex(data.length - 1);
        }
    }

    return (
        <div className="cardSliderParent">
            <div className="container">
                <div className="cardSlider">
                    <CardSliderItem data={data[index]} name={data[index].fullName}/>
                    <div className="sliderBtns">
                        <i className="fa-solid fa-circle-left" onClick={goPrev}></i>
                        <i className="fa-solid fa-circle-right" onClick={goNext}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardSlider;