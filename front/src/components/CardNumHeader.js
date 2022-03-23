

const CardNumHeader = ({setCardNum}) => {


    return (
        <p>
            Select number of meal per page: <label onClick={() => setCardNum(1)}>1</label>, <label onClick={() => setCardNum(4)}>4</label>, <label onClick={() => setCardNum(6)}>6</label>, <label onClick={() => setCardNum(8)}>8</label>.
        </p>
    )
}

export default CardNumHeader;