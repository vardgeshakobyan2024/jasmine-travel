import ClassTableItem from './ClassTableItem/ClassTableItem';
import './classTable.css';

const ClassTable = () => {
    const tableItem = [
        "Սկսնակների համար,ովքեր ցանկանում են մասնագիտանալ արտագնա տուր ոլորտում",
        "Ձեռնարկատերերի համար,ովքեր ցանկանում են հիմնել իրենց սեփական տուր ընկերությունը",
        "Տուրիզմի ոլորտի ներկայացուցիչների համար,ովքեր ցանկանում են բարելավել իրենց գիտելիքները արտագնա տուրիզմի մեջ",
        "Ճանապարհորդասեր մարդկանց համար,որոնց հետաքրքրում է վիզաների ընթացակարգը,ինչպես օր ամրագրել դեսպանատներում կամ վիզա կենտրոններում,ինչպես ճիշտ հավաքել փաստաթղթերը դիմելու համար և այլն"
    ];

    return (
        <section>
            <div className="container">
                <div className="section">
                    <div className="sectTable">
                        <h4>դասընթացը նախատեսված է</h4>

                        <div className="tableItemParent">
                            {tableItem && tableItem.map((el, idx) => {
                                    return (
                                        <ClassTableItem 
                                            key = {idx}
                                            number = {idx + 1}
                                            text = {el}
                                        />
                                    )
                                })
                            }
                        </div>

                        <a href="#table">միանալ</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClassTable;