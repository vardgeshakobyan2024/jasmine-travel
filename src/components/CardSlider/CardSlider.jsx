import { useState } from 'react';
import './cardSlider.css';
import CardSliderItem from '../CardSliderItem/CardSliderItem';
import teacherArtavazd from '../../images/artavazdTeacher.jpeg';

const CardSlider = () => {
    const data = [
        {
            id: 1,
            fullName: "Արտավազդ Բալայան",
            decription: "Եթե ցանկանում եք լիարժեք սովորել AMADEUS ծրագիրը և տուրիզմի բնագավառում դառնալ գիտակ մարդ՝ միանշանակ պետք է դիմել JASMIN TRAVEL Հասմիկի մոտ դասընթացները անցնում են շատ հագեցած և նա իր ողջ գիտելիքները առանց պահումների փոխանցում է իր ուսանողներին",
            image: teacherArtavazd
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
                </div>
            </div>
        </div>
    );
}

export default CardSlider;