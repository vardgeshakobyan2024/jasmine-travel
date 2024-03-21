import './accordion.css';

const Accordion = ({ text, items, active, setActive }) => {
    return (
        <div className="accordion">
            <div className="accordionHeading">
                <div className="container">
                    <div className="icon">
                        <i className="fa-solid fa-book"></i>
                    </div>
                    <div className="text">{text}</div>
                    <div className="select">
                        <i className="fa-solid fa-up-down" onClick={()=> {
                            if (active) {
                                setActive("");
                            } else {
                                setActive(text);
                            }
                        }}></i>
                    </div>
                </div>
            </div>
            <div className={(active === text ? "showAccordionBody" : "accordionBody")}>
                <ul type="square">
                    {
                        items.map((el, idx) => {
                            return (
                                <li key={idx}>{el}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Accordion;