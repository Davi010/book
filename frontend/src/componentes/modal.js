function Modal({ open, setModalOpen }) {
    if (open) {
        return (
            <div className="popup">
                <div className="livros1">
                    <div className="ft">
                        <div className="categoria1">
                            <h2>INFANTIL</h2>
                        </div>
                        <div className="imagem1">

                        </div>
                    </div>
                    <div className="nome">
                        <div className="tudo2">
                            <div className="tudo3">
                                <div className="nomesub">
                                    <h2>NOME DO LIVRO</h2>
                                    <h3>SUBTITULO DO LIVRO</h3>

                                </div>
                                <div className="listar">
                                    <p className="cat1">CATEGORIA</p>
                                    <p className="cat">CATEGORIA</p>
                                    <p className="cat">CATEGORIA</p>
                                    <p className="cat">CATEGORIA</p>
                                </div>
                            </div>



                        </div>


                        <div className="tudo">
                            <div className="intro">
                                <div className="description">
                                    <h2>DESCRIÇÃO</h2>
                                </div>

                                <div className="frase">
                                    <p>"Escândalo em Boêmia" é uma das histórias mais conhecidas de Sherlock Holmes, escrita por Sir Arthur Conan Doyle. Nesta trama cativante, Holmes é contratado pela realeza europeia para recuperar uma fotografia comprometedora que está em posse de uma mulher inteligente e misteriosa, Irene Adler. O enredo se desenrola com reviravoltas emocionantes enquanto Holmes e seu fiel companheiro, Dr. Watson, se envolvem em uma trama de intriga, disfarces e astúcia. A habilidade dedutiva de Holmes é testada ao máximo enquanto ele tenta superar a sagacidade de Adler, resultando em um dos confrontos mais memoráveis da literatura. "Escândalo em Boêmia" é uma história de suspense e inteligência, que captura a essência do gênio dedutivo de Sherlock Holmes.</p>
                                </div>
                            </div>

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


            </div>
        )
    }
    return null

}
export default Modal;