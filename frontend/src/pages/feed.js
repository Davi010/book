import "../css/feed.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from "../componentes/modal";

function Feed() {
    const [showOptions, setShowOptions] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div className="corpo2">
            <div className="containerfeed">
                <div className="titulofeed">
                    <h1 className="logo">BOOK4ALL</h1>
                    <div className="entrarfeed">
                        <div className="link-cadastro1">
                            <p><Link to="/">TELA INICIAL</Link></p>
                        </div>
                        <div className="link-cadastro1">
                            <p><Link to="/feed">HOME</Link></p>
                        </div>
                        <div className="link-cadastro1-menu">
                            <p className="toggle" onClick={toggleOptions}>PERFIL</p>
                            {showOptions && (
                                <ul className="opc">
                                    <li className="li"><a href="*" className="a" ><Link className="a" to="/feed">HOME</Link></a></li>
                                    <li className="li"><a href="*" className="a"><Link className="a" to="/troca">TROCA</Link></a></li>
                                    <li className="li"><a href="*" className="a"><Link className="a" to="/estante">ESTANTE</Link></a></li>
                                    <li className="li"><a href="*" className="a"><Link className="a" to="/doar">DOAÇÕES</Link></a></li>
                                    <li className="li"><a href="*" className="a"><Link className="a" to="/conf">CONFIGURAÇÕES</Link></a></li>
                                    
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="slogan">
                <div className="superior">
                    <h2>SEJA BEM-VINDO A NOSSA PLATAFORMA</h2>
                </div>
                <div className="seta">
                    <svg width="500" height="300" viewBox="0 0 604 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.87585 193.512C5.3377 192.424 2.3983 193.6 1.31052 196.138C0.222747 198.676 1.3985 201.615 3.93665 202.703L7.87585 193.512ZM39.5206 211.822L40.1814 206.866L39.5206 211.822ZM147.087 196.763L148.57 201.538L148.57 201.538L147.087 196.763ZM335.596 113.668L338.222 117.923L338.222 117.923L335.596 113.668ZM406.59 38.9096L411.489 39.9099L406.59 38.9096ZM384.808 7.44653L386.459 2.72724L384.808 7.44653ZM327.529 11.4803L329.675 15.9964L327.529 11.4803ZM344.739 225.268L342.389 229.681L342.389 229.681L344.739 225.268ZM561.485 152.123L564.967 155.711L561.485 152.123ZM603.704 130.341L546.071 126.913L571.92 178.539L603.704 130.341ZM3.93665 202.703C5.98979 203.583 13.6952 206.933 21.2243 210.097C24.9897 211.679 28.7492 213.231 31.7691 214.417C33.2751 215.008 34.6346 215.524 35.7359 215.91C36.6422 216.228 37.8831 216.648 38.8598 216.778L40.1814 206.866C40.4121 206.897 40.1737 206.869 39.0458 206.474C38.1131 206.147 36.8837 205.682 35.425 205.109C32.5153 203.966 28.8411 202.45 25.0983 200.877C17.6107 197.731 10.001 194.422 7.87585 193.512L3.93665 202.703ZM38.8598 216.778C75.2819 221.634 116.24 211.584 148.57 201.538L145.603 191.988C113.392 201.997 74.2621 211.41 40.1814 206.866L38.8598 216.778ZM148.57 201.538C207.173 183.328 285.596 150.394 338.222 117.923L332.971 109.413C281.24 141.332 203.636 173.955 145.603 191.988L148.57 201.538ZM338.222 117.923C349.38 111.038 365.78 100.302 380.275 87.0768C394.64 73.9709 407.836 57.798 411.489 39.9099L401.691 37.9093C398.689 52.608 387.465 66.98 373.535 79.6894C359.735 92.2799 343.965 102.629 332.971 109.413L338.222 117.923ZM411.489 39.9099C413.153 31.7606 409.191 23.2804 404.397 16.9623C399.528 10.5453 392.728 4.92117 386.459 2.72724L383.156 12.1658C387 13.5111 392.321 17.591 396.431 23.0069C400.615 28.5217 402.488 34.0034 401.691 37.9093L411.489 39.9099ZM386.459 2.72724C378.336 -0.115861 366.184 -0.468693 354.987 0.4536C343.754 1.37888 332.27 3.69181 325.383 6.96415L329.675 15.9964C334.929 13.4994 344.987 11.3112 355.808 10.4198C366.666 9.52547 377.083 10.0404 383.156 12.1658L386.459 2.72724ZM325.383 6.96415C280.318 28.3771 266.636 75.069 272.877 120.051C279.101 164.911 305.281 209.921 342.389 229.681L347.089 220.854C313.502 202.969 288.685 161.228 282.782 118.677C276.895 76.2486 289.955 34.8696 329.675 15.9964L325.383 6.96415ZM342.389 229.681C382.825 251.213 425.491 245.321 464.23 227.957C502.913 210.617 538.293 181.601 564.967 155.711L558.002 148.535C531.688 174.075 497.286 202.181 460.139 218.832C423.048 235.458 383.836 240.423 347.089 220.854L342.389 229.681ZM564.967 155.711C565.363 155.327 565.825 154.945 566.359 154.566L560.577 146.407C559.676 147.045 558.81 147.751 558.002 148.535L564.967 155.711Z" fill="white" />
                    </svg>
                </div>
                <div className="unir">
                    <div className="guia">
                        <h2>GUIA</h2>
                    </div>
                    <div className="info">
                        <p>ESTA É A PÁGINA DESTINADA PARA VERIFICAR OS NOVOS USUÁRIOS QUE DESEJAM FAZER PARTE DA NOSSA PLATAFORMA DE TROCA DE LIVRO E DOAÇÃO.</p>
                    </div>
                </div>
            </div>
            <div className="linha"></div>
            <div className="previa">
                <div className="recente">
                    <p>RECENTES</p>
                </div>
                <div className="btnpassa">
                    <div className="passa">
                        <button>=</button>
                    </div>
                    <div className="passa">
                        <button>=</button>
                    </div>
                </div>
            </div>
            <div className="book">
                <div className="livros">
                    <div className="categoria">
                        <h2>INFANTIL</h2>
                    </div>
                    <div className="imagem">
                        <div className="baixo"></div>
                    </div>
                    <div className="btnolhar">
                        <button className="olha" onClick={() => setOpenModal(true)}>DÊ UMA OLHADA</button>
                        <Modal open={openModal} setModalOpen={() => setOpenModal(!openModal)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed;
