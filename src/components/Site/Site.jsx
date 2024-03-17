import Card from '../Card/Card';
import ClassTable from '../ClassTable/ClassTable';
import HeaderSite from '../HeaderSite/HeaderSite';
import MainSite from '../MainSite/MainSite';
import callIcon from '../../images/call.png';
import './site.css';
import ImagesSlider from '../ImagesSlider/ImagesSlider';
import Timer from '../Timer/Timer';

const Site = () => {
    return (
        <div className="site">
            <HeaderSite />
            <MainSite />
            <ClassTable />
            <Card />
            <Timer />
            <ImagesSlider />

            <a href="tel:+37499888021" className="call">
                <img src={callIcon} alt="call"/>
            </a>
        </div>
    )
}

export default Site;