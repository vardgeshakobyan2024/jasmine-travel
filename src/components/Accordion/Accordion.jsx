import './accordion.css';

const Accordion = ({ text, items, active, setActive }) => {
    return (
        <div className="accordion">
            <div className="accordionHeading">
                <div className="container">
                    <p>{text}</p>
                    <span onClick={() => {
                        if (active) {
                            setActive("");
                        } else {
                            setActive(text)
                        }
                    }}>{active === text ? "X" : "|||"}</span>
                </div>
            </div>
            <div className={(active === text ? "showaccordionContent" : "accordionContent")}>
                <div className="container">
                    <ul>
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
        </div>
    )
}

export default Accordion;