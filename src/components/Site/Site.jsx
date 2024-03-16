import ClassTable from '../ClassTable/ClassTable';
import HeaderSite from '../HeaderSite/HeaderSite';
import MainSite from '../MainSite/MainSite';
import './site.css';

const Site = () => {
    return (
        <div className="site">
            <HeaderSite />
            <MainSite />
            <ClassTable />
        </div>
    )
}

export default Site;