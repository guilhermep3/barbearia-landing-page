"use client"
import { Button } from "@/components/button";
import { MobileNav } from "@/components/mobileNav";
import { FormEvent, useState } from "react";
import { TbCut } from "react-icons/tb";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { GiBeard } from "react-icons/gi";
import { FaSoap } from "react-icons/fa";
import { slideData } from "@/data/slideData";
import { Slider } from "@/components/slider";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { EmailModal } from "@/components/EmailModal";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Home() {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(2);
  const [email, setEmail] = useState('');
  const [modalProps, setModalProps] = useState<{ isValid: boolean } | null>(null);

  const handleMenuMobileClick = () => {
    setIsMobileNav(!isMobileNav)
  }

  const handleSlidePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? slideData.length - 1 : prev - 1))
  }
  const handleSlideNext = () => {
    setCurrentSlide(prev => (prev === slideData.length - 1 ? 0 : prev + 1))
  }

  const handleSubmitEmail = (evt: FormEvent) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    evt.preventDefault();
    if (email.trim() === '') {
      { setModalProps({ isValid: false }) }
    } else if (!emailRegex.test(email)) {
      alert('erro na validação do email')
    } else {
      { setModalProps({ isValid: true }) }
    }
  };

  const handleCloseModal = () => {
    setModalProps(null);
    setEmail('');
  }

  return (
    <div className="text-white">
      <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"></link>
      <main>
        <header className={`header`}>
          <img src="/barber/barbershop-logo-removebg.png" alt="logo da classic barber"
            className="logo" />
          <nav className="header-nav">
            <ul className="header-list">
              <li><a href="#home"
                className="linksHeader">Home</a></li>
              <li><a href="#about"
                className="linksHeader">About</a></li>
              <li><a href="#services"
                className="linksHeader">Services</a></li>
            </ul>
            <div className="header-middle">
              <svg xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 24 24"><path fill="#b18d50" d="M21 12c-2 0-3-3-6-3s-3 2-3 2s0-2-3-2s-4 3-6 3c-1 0-2-1-2-1s1 5 5 5c5 0 6-3 6-3s1 3 6 3c4 0 5-5 5-5s-1 1-2 1" /></svg>
              <span className="header-middle-span">Classic Barber</span>
            </div>
            <ul className="header-list">
              <li><a href="#kids"
                className="linksHeader">Kids</a></li>
              <li><a href="#barbers"
                className="linksHeader">Barbers</a></li>
              <li><a href="#contact"
                className="linksHeader">Contact</a></li>
            </ul>
          </nav>
          <div className={`mobile-burger ${isMobileNav ? 'burger-active' : ''}`}
            onClick={handleMenuMobileClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>
        <MobileNav isMobileNav={isMobileNav} handleMenuMobileClick={handleMenuMobileClick} />
        <section className="hero-section" id="home">
          <p className="local-hero">São Paulo - Brasil</p>
          <h1 className="hero-h1">Seja seu própio estilo</h1>
          <h2 className="hero-h2">Barbearia estilo clássico feito para você ter a melhor experiência e estilo.
            <br />
            Entre em contato conosco para agendar um horário.</h2>
          <Button label="AGENDAR" scrollTo="contact" />
        </section>
        <section className="about-section" id="about">
          <div className="about-section-top">
            <div className="about-section-text">
              <h2 className="about-section-h2">
                Nós temos <span className="yearsExp">15 anos</span> de <span className="experience">Experiência</span>
              </h2>
              <p className="about-text">Barbeiros especializados em cortes de cabelo, barba, hidratação. Apaixonados em transformar o visual dos clientes ampliando a auto-estima do homem.</p>
              <p className="about-text">A Classic Barber é o melhor lugar para um corte de cabelo em estilo. A atenção aos detalhes e o serviço de primeira classe fazem toda a diferença.</p>
              <span className="line"></span>
              <div className="hours-container">
                <span>Horários</span>
                <div className="hours-area">
                  <div>
                    <p className="hours-week">Seg a Sex</p>
                    <p>09:00 - 22:00</p>
                  </div>
                  <div>
                    <p className="hours-week">Sáb</p>
                    <p>10:00 - 21:00</p>
                  </div>
                  <div>
                    <p className="hours-week">Dom</p>
                    <p>13:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
            <img src="/barber/barber-smiling.jpg" alt="imagem section 1" />
          </div>
        </section>
        <section className="services-section" id="services">
          <div className="services-title">
            <h2 >O que fornecemos aos</h2>
            <h3>nossos clientes</h3>
          </div>
          <div className="skill-area">
            <div className="skill">
              <GiBeard className="skill-icon" />
              <p className="skill-title">Corte de Barba</p>
              <p className="skill-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate pariatur quod magni.</p>
              <p className="skill-price">R$<span>30</span>,00</p>
            </div>
            <div className="skill">
              <TbCut className="skill-icon" />
              <p className="skill-title">Corte de cabelo</p>
              <p className="skill-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate pariatur quod magni.</p>
              <p className="skill-price">R$<span>40</span>,00</p>
            </div>
            <div className="skill">
              <FaSoap className="skill-icon" />
              <p className="skill-title">Hidratação Capilar</p>
              <p className="skill-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate pariatur quod magni.</p>
              <p className="skill-price">R$<span>50</span>,00</p>
            </div>
            <div className="skill">
              <MdFaceRetouchingNatural className="skill-icon" />
              <p className="skill-title">Skin Care</p>
              <p className="skill-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate pariatur quod magni.</p>
              <p className="skill-price">R$<span>35</span>,00</p>
            </div>
          </div>
        </section>
        <section className="kids-section" id="kids">
          <div className="kids-section-aside">
            <div className="kids-price-area">
              <p className="kids-price-title">Corte de cabelo</p>
              <p className="kids-price">R$<span>20</span>,00</p>
            </div>
            <div className="kids-price-area">
              <p className="kids-price-title">Hidratação Capilar</p>
              <p className="kids-price">R$<span>25</span>,00</p>
            </div>
            <div className="kids-price-area">
              <p className="kids-price-title">Skin Care</p>
              <p className="kids-price">R$<span>20</span>,00</p>
            </div>
            <div className="kids-price-area">
              <p className="kids-price-title">Kit Brinquedos</p>
              <p className="kids-price">R$<span>30</span>,00</p>
            </div>
          </div>
          <div className="kids-area">
            <div className="kids-text-area">
              <div className="kids-title">
                <h2>Espaço infantil</h2>
                <span>especializado</span>
              </div>
              <p className="kids-text">Na nossa barbearia, pensamos em toda a família, e é por isso que possuímos uma área infantil especialmente projetada
                para tornar a experiência dos pequenos mais agradável e divertida. Enquanto aguardam pelo atendimento, as crianças podem se divertir em um espaço seguro e acolhedor,
                repleto de brinquedos e atividades que estimulam a criatividade e o entretenimento.
              </p>
              <p className="kids-text">Estamos comprometidos em proporcionar um serviço de alta qualidade para todos os nossos clientes, independentemente da idade.
                Nossa dedicação aos detalhes e ao conforto de cada cliente faz da nossa barbearia o lugar ideal para toda a família.
              </p>
            </div>
            <div className="kids-image-area">
              <img src="/barber/kids-section.jpg" alt="criança cortando cabelo" />
              <div className="bg-img">
                <img src="/barber/barbershop-logo-removebg.png" alt="" />Classic barber</div>
            </div>
          </div>
        </section>
        <section className="barbers-section" id="barbers">
          <h2 className="barbers-title">Nossos <span>barbeiros</span></h2>
          <div className="slider-container">
            <Slider currentSlide={currentSlide} />
          </div>
          <div className="slide-btn-area">
            <button onClick={handleSlidePrev}><GrFormPrevious className="slide-btn" /></button>
            <button onClick={handleSlideNext}><GrFormNext className="slide-btn" /></button>
          </div>
        </section>
        <section className="subscribe-section" id="contact">
          <img src="/barber/barbershop-logo-removebg.png" alt="logo da classic barber" />
          <div className="subscribe-area">
            <h2>Inscreva-se na nossa Newsletter</h2>
            <h3>Tenha <span>10%</span> de desconto</h3>
            <p>Assine nossa newsletter para receber as principais notícias do mundo da moda masculina e as últimas tendências de cortes de cabelo. Mantenha-se sempre atualizado!</p>
            <form className="subscribe-input" onSubmit={handleSubmitEmail}>
              <input type="text" placeholder="Digite seu email"
                data-rules="email"
                value={email}
                onChange={e => setEmail(e.target.value)} />
              <button type="submit">ENVIAR</button>
              {modalProps && <EmailModal isValid={modalProps.isValid} onClose={handleCloseModal} />}
            </form>
          </div>
        </section>
        <footer>
          <div className="footer-div">
            <h2>Links</h2>
            <ul className="link-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#kids">Kids</a></li>
              <li><a href="#barbers">Barbers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-div">
            <h2>Horários</h2>
            <div className="horary-footer-area">
              <div className="horary-footer">
                <p>Seg a Sex</p>
                <span>09:00 - 22:00</span>
              </div>
              <div className="horary-footer">
                <p>Sáb</p>
                <span>10:00 - 21:00</span>
              </div>
              <div className="horary-footer">
                <p>Dom</p>
                <span>13:00 - 20:00</span>
              </div>
            </div>
          </div>
          <div className="footer-div">
            <h2>Redes Sociais</h2>
            <div className="social-media">
              <FaFacebookF className="footer-icon"/>
              <p>@classicbarber</p>
            </div>
            <div className="social-media">
              <FaInstagram className="footer-icon"/>
              <p>@classicbarber</p>
            </div>
            <div className="social-media">
              <FaTwitter className="footer-icon"/>
              <p>@classicbarber</p>
            </div>
            <div className="social-media">
              <FaTiktok className="footer-icon"/>
              <p>@classicbarber</p>
            </div>
          </div>
          <div className="footer-div">
            <h2>Contatos</h2>
            <div className="contact">
              <BsFillTelephoneFill className="footer-icon" />
              <p>+ 55 987 654 321</p>
            </div>
            <div className="contact">
              <MdEmail className="footer-icon" />
              <p>companyemail@gmail.com</p>
            </div>
            <div className="contact">
              <FaHouse className="footer-icon" />
              <p>123 Vila Mariana,<br /> São Paulo, Brasil</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}