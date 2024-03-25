"use strict";
const mediaQuery = window.matchMedia("(max-width: 1060px)");
function updateImagesClasses() {
    const images = document.querySelectorAll("#carouselExample .image-container img");
    images.forEach(image => {
        if (mediaQuery.matches) {
            image.classList.remove("w-25");
            image.classList.add("w-50");
        }
        else {
            image.classList.remove("w-50");
            image.classList.add("w-25");
        }
    });
}
function mediaQueryChange(mediaquery) {
    updateImagesClasses();
}
mediaQuery.addEventListener("change", () => {
    mediaQueryChange(mediaQuery);
});
const body = document.querySelector("body");
const en_Button = document.querySelector("#en-us");
const pt_Button = document.querySelector("#pt-br");
function switchToEnglish() {
    body.innerHTML = `
            <header id="menu">
            <nav class="navbar navbar-expand-lg" id="menu-navbar">
                <div class="container-fluid" id="name">
                    <a class="navbar-brand" id="title-page" href="#">GOTO <span>ANTARCTIC.</span></a>
                </div>
                <div class="container-fluid" id="options">
                    <button class="navbar-toggler" id="nav-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" id="navbar-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0 flex-row" id="navbar-navigation">
                            <li class="nav-item">
                                <a class="nav-link white-color-open-sans" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white-color-open-sans" href="#">Explore</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white-color-open-sans" href="#">Articles</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white-color-open-sans" href="#">Galeries</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white-color-open-sans" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <section id="site-body">
            <div id="text-title-and-language">
                <div id="title">
                    <h2>THE ANCIENT WORLD</h2>
                    <h1>Discover the awe-inspiring <br> Pyramids of Giza and ancient ANTARCTIC</h1>
                </div>
                <div id="language-buttons">
                    <button id="en-us">En</button>
                    <button id="pt-br">Pt</button>
                </div>
            </div>
            <div id="ice">
                <div class="ice-content">
                    <p id="name" class="texts">About<span id="color-name" style="color: rgb(255, 208, 0)" class="texts"> Ice</span></p>

                    <p id="description-ice">Antarctica is the continent located at the South Pole of the Earth. It is mostly covered by thick Ice sheets and is known as the coldest and driest place on Earth. The ice sheet of Antarctica covers an area of approximately 14 million square kilometers and can reach thicknesses of up to 4 kilometers in some places. These ice sheets hold about 61% of the world's fresh water. Additionally, the ice in Antarctica plays a significant role in determining global sea levels. However, due to global climate change, the ice in Antarctica has begun to melt, leading to rising sea levels and environmental changes.</p>

                    <div id="video-ice">
                        <iframe src="https://www.youtube.com/embed/Y2Ned8hjRiE?controls=0" frameborder="0" width="400" height="250"></iframe>
                    </div>
                </div>

                <div class="ice-content">
                    <p id="name" class="texts">About<span id="color-name" style="color: rgb(255, 208, 0)" class="texts"> Polar Bears</span></p>

                    <p id="description-ice">Polar bears are the largest land carnivores, thriving in the Arctic's icy habitat. With their iconic white fur and massive size, they primarily hunt seal on sea ice. Howewe, climate change threatens their existence by melting their hunting grounds. Conservations efforts aim to protect these magnificent creatures, but urgent action is needed to safeguard their future.</p>

                    <div id="video-ice">
                        <iframe src="https://www.youtube.com/embed/zNO0kxTClYo?controls=0" frameborder="0" width="400" height="250"></iframe>
                    </div>
                </div>

                <div class="ice-content">
                    <p id="name" class="texts">About<span id="color-name" style="color: rgb(255, 208, 0)" class="texts"> Penguin</span></p>

                    <p id="description-ice">Penguins are iconic birds found in the Southern Hemisphere, known for their black and white plumage and adept swimming abilities. They thrive in cold ocean waters, primarily feeding on fish and krill. Living in large colonies, they exhibit social behaviors and have evolved unique adaptations to survive in icy environmentsm such as insulating feathers and flipper-like wings. Despite their resilience, penguins face threats like climate change and habitat loss, making conservation efforts crucial for their survival.</p>

                    <div id="video-ice">
                        <iframe src="https://www.youtube.com/embed/N4uylG_qrcU?controls=0" frameborder="0" width="400" height="250"></iframe>
                    </div>
                </div>

                <div class="ice-content">
                    <p id="name" class="texts">About<span id="color-name" style="color: rgb(255, 208, 0)" class="texts"> Plant</span></p>

                    <p id="description-ice">Antarctica has extremely limited vegetation due to its harsh climate and extensive ice cover. Coastal areas and islands may host some simple plants like lichens, mosses, and fungi, primarily in areas receiving more sunlight. However, overall, vegetations in Antarctica is minimal, with much of the continent covered in ice.</p>

                    <div id="video-ice">
                        <iframe src="https://www.youtube.com/embed/zNO0kxTClYo?controls=0" frameborder="0" width="400" height="250"></iframe>
                    </div>
                </div>
            </div>

            <div id="contact">
                <div id="contact-title">
                    <p id="name" class="texts">GOTO<span id="color-name" style="color: rgb(255, 208, 0)" class="texts"> ANTARCTIC.</span></p>
                </div>
                <div id="centralizer-form-info">
                    <div id="form">
                        <div id="form-body">
                            <div id="centralizer">
                                <h1>CONTACT FORM</h1>
                                <form>
                                    <div class="mb-3 spacing">
                                        <input type="text" class="form-control form-size" id="name" placeholder="Your name">
                                    </div>
                                    <div class="mb-3 spacing">
                                        <input type="text" class="form-control form-size" id="phone" placeholder="Your phone">
                                    </div>
                                    <div class="mb-3 spacing">
                                        <input type="email" class="form-control form-size" id="email" placeholder="Your e-mail">
                                    </div>
                                    <div class="mb-3 spacing">
                                        <textarea class="form-control form-size" id="message" rows="1" placeholder="Message"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary" id="button">SEND MESSAGE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="informations">
                        <div id="centralizer-info">
                            <div id="centralizer-2">
                                <div id="div-info-1" class="div-info">
                                    <h1>CONTACT</h1>
                                    <p>I am HARUN, you can contact me for design and project construction, I am ready to do the best job for you.</p>
                                </div>
                                <div id="div-info-2" class="div-info">
                                    <h2>Address</h2>
                                    <p>Hatay/iSKENDERUN</p>
                                </div>
                                <div id="div-info-3" class="div-info">
                                    <h2>E-mail</h2>
                                    <p>harunerdogan@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact-title-gallerie">
                <p id="name" class="texts">GOTO<span id="color-name" style="color: rgb(255, 208, 0)" class="texts"> GALLERY</span></p>
            </div>
            <div id="carouselExample" class="carousel slide height">
                <div class="carousel-inner height">
                <div class="carousel-item image-container active">
                    <img id="image-cont" src="/img/geleira.jpg" class="d-block w-25 m-auto shadow-custom" alt="...">
                </div>
                <div class="carousel-item image-container">
                    <img id="image-cont" src="/img/urso.jpg" class="d-block w-25 m-auto shadow-custom" alt="...">
                </div>
                <div class="carousel-item image-container">
                    <img id="image-cont" src="/img/navio.jpg" class="d-block w-25 m-auto shadow-custom" alt="...">
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>

        <footer id="footer">
            <div id="centralizer">
                <div id="button">
                    <button class="btn btn-secondary button"><span>BOOK NOW </span></button>
                </div>
                <hr>
                <div id="text">
                    <div id="rights"><p>All rights reserved</p></div>
                    <div id="title">GOTO <span>ANTARCTIC.</span></div>
                    <div id="pages-min">
                        <div><button>Privacy</button></div>
                        <div><button>Disclaimer</button></div>
                        <div><button>Contact</button></div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    updateImagesClasses();
}
function switchToPortuguese() {
    body.innerHTML = `
            <header id="menu">
            <nav class="navbar navbar-expand-lg" id="menu-navbar">
                <div class="container-fluid" id="name">
                    <a class="navbar-brand" id="title-page" href="#">VÁ PARA A <span>ANTÁRTIDA.</span></a>
                </div>
                <div class="container-fluid" id="options">
                    <button class="navbar-toggler" id="nav-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" id="navbar-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0 flex-row" id="navbar-navigation">
                            <li class="nav-item">
                                <a class="nav-link white-color-open-sans" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white-color-open-sans" href="#">Explorar</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white-color-open-sans" href="#">Artigos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white-color-open-sans" href="#">Galerias</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white-color-open-sans" href="#">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <section id="site-body">
            <div id="text-title-and-language">
                <div id="title">
                    <h2>O MUNDO ANTIGO</h2>
                    <h1>Descubra as inspiradoras <br> Pirâmides de Gizé e a antiga ANTÁRTIDA</h1>
                </div>
                <div id="language-buttons">
                    <button id="en-us">En</button>
                    <button id="pt-br">Pt</button>
                </div>
            </div>
            <div id="ice">
                <div class="ice-content">
                    <p id="name" class="texts">Sobre<span id="color-name" style="color: rgb(255, 208, 0)" class="texts"> Gelo</span></p>

                    <p id="description-ice">A Antártida é o continente localizado no Pólo Sul da Terra. É principalmente coberto por espessas camadas de gelo e é conhecido como o lugar mais frio e seco da Terra. A camada de gelo da Antártida cobre uma área de aproximadamente 14 milhões de quilómetros quadrados e pode atingir espessuras de até 4 quilómetros em alguns locais. Essas camadas de gelo contêm cerca de 61% da água doce do mundo. Além disso, o gelo na Antártida desempenha um papel significativo na determinação dos níveis globais do mar. No entanto, devido às alterações climáticas globais, o gelo na Antártida começou a derreter, levando ao aumento do nível do mar e a alterações ambientais.</p>

                    <div id="video-ice">
                        <iframe src="https://www.youtube.com/embed/Y2Ned8hjRiE?controls=0" frameborder="0" width="400" height="250"></iframe>
                    </div>
                </div>

                <div class="ice-content">
                    <p id="name" class="texts">Sobre<span id="color-name" style="color: rgb(255, 208, 0)" class="texts"> Ursos Polares</span></p>

                    <p id="description-ice">Os ursos polares são os maiores carnívoros terrestres, prosperando no habitat gelado do Ártico. Com seu icônico pelo branco e tamanho enorme, eles caçam focas principalmente no gelo marinho. No entanto, as alterações climáticas ameaçam a sua existência ao derreter as suas áreas de caça. Os esforços de conservação visam proteger estas magníficas criaturas, mas são necessárias medidas urgentes para salvaguardar o seu futuro.</p>

                    <div id="video-ice">
                        <iframe src="https://www.youtube.com/embed/zNO0kxTClYo?controls=0" frameborder="0" width="400" height="250"></iframe>
                    </div>
                </div>

                <div class="ice-content">
                    <p id="name" class="texts">Sobre<span id="color-name" style="color: rgb(255, 208, 0)" class="texts"> Pinguins</span></p>

                    <p id="description-ice">Os pinguins são pássaros icônicos encontrados no Hemisfério Sul, conhecidos por sua plumagem preta e branca e excelentes habilidades de natação. Eles prosperam nas águas frias do oceano, alimentando-se principalmente de peixes e krill. Vivendo em grandes colônias, exibem comportamentos sociais e desenvolveram adaptações únicas para sobreviver em ambientes gelados, como penas isolantes e asas em forma de nadadeira. Apesar da sua resiliência, os pinguins enfrentam ameaças como as alterações climáticas e a perda de habitat, tornando os esforços de conservação cruciais para a sua sobrevivência.</p>

                    <div id="video-ice">
                        <iframe src="https://www.youtube.com/embed/N4uylG_qrcU?controls=0" frameborder="0" width="400" height="250"></iframe>
                    </div>
                </div>

                <div class="ice-content">
                    <p id="name" class="texts">Sobre<span id="color-name" style="color: rgb(255, 208, 0)" class="texts"> Plantas</span></p>

                    <p id="description-ice">A Antártica tem vegetação extremamente limitada devido ao seu clima rigoroso e extensa cobertura de gelo. As áreas costeiras e ilhas podem hospedar algumas plantas simples como líquenes, musgos e fungos, principalmente em áreas que recebem mais luz solar. No entanto, em geral, a vegetação na Antártida é mínima, com grande parte do continente coberto de gelo.</p>

                    <div id="video-ice">
                        <iframe src="https://www.youtube.com/embed/zNO0kxTClYo?controls=0" frameborder="0" width="400" height="250"></iframe>
                    </div>
                </div>
            </div>

            <div id="contact">
                <div id="contact-title">
                    <p id="name" class="texts">VÁ PARA A<span id="color-name" style="color: rgb(255, 208, 0)" class="texts"> ANTÁRTIDA.</span></p>
                </div>
                <div id="centralizer-form-info">
                    <div id="form">
                        <div id="form-body">
                            <div id="centralizer">
                                <h1>FORMULÁRIO DE CONTATO</h1>
                                <form>
                                    <div class="mb-3 spacing">
                                        <input type="text" class="form-control form-size" id="name" placeholder="Seu nome">
                                    </div>
                                    <div class="mb-3 spacing">
                                        <input type="text" class="form-control form-size" id="phone" placeholder="Seu celular">
                                    </div>
                                    <div class="mb-3 spacing">
                                        <input type="email" class="form-control form-size" id="email" placeholder="Seu e-mail">
                                    </div>
                                    <div class="mb-3 spacing">
                                        <textarea class="form-control form-size" id="message" rows="1" placeholder="Mensagem"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary" id="button">ENVIAR MENSAGEM</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="informations">
                        <div id="centralizer-info">
                            <div id="centralizer-2">
                                <div id="div-info-1" class="div-info">
                                    <h1>CONTATO</h1>
                                    <p>Eu sou HARUN, você pode entrar em contato comigo para concepção e construção de projetos, estou pronto para fazer o melhor trabalho para você.</p>
                                </div>
                                <div id="div-info-2" class="div-info">
                                    <h2>Endereço</h2>
                                    <p>Hatay/iSKENDERUN</p>
                                </div>
                                <div id="div-info-3" class="div-info">
                                    <h2>E-mail</h2>
                                    <p>harunerdogan@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact-title-gallerie">
                <p id="name" class="texts">VÁ PARA A<span id="color-name" style="color: rgb(255, 208, 0)" class="texts"> GALERIA</span></p>
            </div>
            <div id="carouselExample" class="carousel slide height">
                <div class="carousel-inner height">
                <div class="carousel-item image-container active">
                    <img id="image-cont" src="/img/geleira.jpg" class="d-block w-25 m-auto shadow-custom" alt="...">
                </div>
                <div class="carousel-item image-container">
                    <img id="image-cont" src="/img/urso.jpg" class="d-block w-25 m-auto shadow-custom" alt="...">
                </div>
                <div class="carousel-item image-container">
                    <img id="image-cont" src="/img/navio.jpg" class="d-block w-25 m-auto shadow-custom" alt="...">
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>

        <footer id="footer">
            <div id="centralizer">
                <div id="button">
                    <button class="btn btn-secondary button"><span>AGENDE AGORA </span></button>
                </div>
                <hr>
                <div id="text">
                    <div id="rights"><p>Todos os direitos reservado</p></div>
                    <div id="title">VÁ PARA A <span>ANTÁRTIDA.</span></div>
                    <div id="pages-min">
                        <div><button>Privacidade</button></div>
                        <div><button>Aviso Legal</button></div>
                        <div><button>Contato</button></div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    updateImagesClasses();
}
body.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches("#en-us")) {
        switchToEnglish();
    }
    else if (target.matches("#pt-br")) {
        switchToPortuguese();
    }
});
mediaQueryChange(mediaQuery);
