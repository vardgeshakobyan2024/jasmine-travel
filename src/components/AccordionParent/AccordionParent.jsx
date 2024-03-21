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
            ],
            price: " 30.000 Դրամ"
        },
        {
            id: 2,
            text: "Շենգենյան զոնա ` վիզայի ընթացակարգ",
            items: [
                "Շենգենյան երկրներ Վիզայի համար դիմելու ընթացակարգը",
                "Վիզայի վճարներ,դեսպանատների և վիզա կենտրոնների կայքեր՝ առանձնացված լինքեր հարցազրույցի օր վերցնելու",
                "Դիմում հարցաթերթիկների գրագետ լրացում",
                "Փաստաթղթերի հավաքագրում և կազմում"
            ],
            price: " 45.000 Դրամ"
        },
        {
            id: 3,
            text: "ԱՄՆ վիզայի ընթացակարգը",
            items: [
                "վիզայի տեսակները,պահանջվող փաստաթղթերը",
                "դիմում հարցաթերթիկի գրագետ լրացում",
                "Հարցազրույցի օրվա ամրագրում,վերագրանցում"
            ],
            price: " 50.000 Դրամ"
        }
    ];

    const [active, setActive] = useState("");

    return (
        <div className="accordionParent">
            <div className="container">
                <h6>առաջարկվող <br /> փաթեթներ</h6>
                {
                    accordionData.map((el) => {
                        return (
                            <Accordion 
                                key={el.id}
                                text={el.text}
                                items={el.items}
                                active={active}
                                setActive={setActive}
                                price={el.price}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AccordionParent;