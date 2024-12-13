"use client"
import { Button } from "@/components/button";
import { MobileNav } from "@/components/mobileNav";
import { useState } from "react";

export default function Home() {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const handleMenuMobileClick = () => {
    setIsMobileNav(!isMobileNav)
  }

  return (
    <div className="text-white">
      <main>
        <header className="flex justify-center items-center gap-14 px-6 w-full text-white fixed top-0 left-0 bg-transparent ">
          <img src="/barber/barbershop-logo-removebg.png" alt="logo barbearia"
            className="w-16 h-16 md:w-24 md:h-24" />
          <ul className="gap-7 hidden md:flex">
            <li><a href=""
              className="linksHeader">Home</a></li>
            <li><a href=""
              className="linksHeader">About</a></li>
            <li><a href=""
              className="linksHeader">Services</a></li>
          </ul>
          <span className="header-span p-3 md:p-6">Classic Barber</span>
          <ul className="gap-7 hidden md:flex">
            <li><a href=""
              className="linksHeader">Barbers</a></li>
            <li><a href=""
              className="linksHeader">Blog</a></li>
            <li><a href=""
              className="linksHeader">Contact Us</a></li>
          </ul>
          <div className="md:w-8 md:h-8"></div>
          <div className="flex flex-col gap-1 md:hidden"
            onClick={handleMenuMobileClick}>
            <span className="w-8 h-1 bg-white block"></span>
            <span className="w-8 h-1 bg-white block"></span>
            <span className="w-8 h-1 bg-white block"></span>
          </div>
        </header>
        <MobileNav isMobileNav={isMobileNav} />
        <section className="bg-hero p-10 flex flex-col justify-center items-center text-center">
          <p className="local-hero flex justify-center items-center gap-1 md:gap-5">São Paulo - Brasil</p>
          <h1 className="text-4xl font-bold md:text-7xl">Seja seu própio estilo</h1>
          <h2 className="mt-3 mb-7">Barbearia estilo clássico feito para você ter a melhor experiência e estilo.
            <br />
            Entre em contato conosco para agendar um horário.</h2>
          <Button label="AGENDAR" />
        </section>
        <section className="about-section">
          <div className="about-section-top">
            <div className="about-section-txt">
              <h2 className="about-section-h2">
                Nós temos <span className="yearsExp">15 anos</span> de <span className="experience">Experiência</span>
              </h2>
              <p className="about-txt">Barbeiros especializados em cortes de cabelo, barba, hidratação. Apaixonados em transformar o visual dos clientes ampliando a auto-estima do homem.</p>
              <p className="about-txt">A Classic Barber é o melhor lugar para um corte de cabelo em estilo. A atenção aos detalhes e o serviço de primeira classe fazem toda a diferença.</p>
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
      </main>
    </div>
  );
}
