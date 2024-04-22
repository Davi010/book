function Modalt({ open, setModalOpen }) {
    if (open) {
        return (
            <div className="popup">
                <div className="livros1-t">
                    <div className="ft">
                        <div className="categoria1">
                            <h2>INFANTIL</h2>
                        </div>
                        <div className="imagem1">

                        </div>
                    </div>
                    <div className="ft">
                        <div className="categoria1">
                            <h2>INFANTIL</h2>
                        </div>
                        <div className="imagem1">

                        </div>
                    </div>
                    <div className="nome">
                            <div className="btns">
                                <div className="xis">
                                    <button onClick={setModalOpen} className="btnfecha">X</button>
                                </div>
                                <div className="butroca">
                                    <button className="btntrocar">TROCA</button>
                                </div>
                                <div className="butguarda">
                                    <button className="btnguarda">ESTANTE</button>
                                </div>

                            </div>

                        </div>



                    </div>

                </div>


           
        )
    }
    return null

}
export default Modalt;