import { useState } from "react";
import Accordion from "../Accordion/Accordion";
import './accordionParent.css';

const AccordionParent = () => {
    const accordionData = [
        {
            id: 1,
            text: "Բազային գիտելիքներ տուրիզմի մասին՝ հյուրանոցային ինդուստրիա",
            items: [
                "Նախապատմական շրջան",
                "Հյուրանոցային ինդուստրիայում ` սննդակարգերը և սենյակների տեսակները",
                "Հյուրանոցների տեսակները",
                "Հյուրանոց մուտք և ելքը (ժամային ստանդարտներ)",
                "Տուրիզմում օգտագործվող տերմիններ",
                "Երեխաների տարիքային տարբերությունները"
            ]
        },
        {
            id: 2,
            text: "Շենգենյան զոնա ` վիզայի ընթացակարգ",
            items: [
                "Շենգենյան երկրներ Վիզայի համար դիմելու ընթացակարգը",
                "Վիզայի վճարներ,դեսպանատների և վիզա կենտրոնների կայքեր՝ առանձնացված լինքեր հարցազրույցի օր վերցնելու",
                "Դիմում հարցաթերթիկների գրագետ լրացում",
                "Փաստաթղթերի հավաքագրում և կազմում"
            ]
        },
        {
            id: 3,
            text: "ԱՄՆ վիզայի ընթացակարգը",
            items: [
                "վիզայի տեսակները,պահանջվող փաստաթղթերը",
                "դիմում հարցաթերթիկի գրագետ լրացում",
                "Հարցազրույցի օրվա ամրագրում,վերագրանցում"
            ]
        }
    ];

    const [active, setActive] = useState("");

    return (
        <div className="accordionParent">
            <div className="container">
                {
                    accordionData.map((el) => {
                        return (
                            <Accordion 
                                key={el.id}
                                text={el.text}
                                items={el.items}
                                active={active}
                                setActive={setActive}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AccordionParent;