"use client"; 
import React, { useEffect, useState } from "react"; 
import Image from "next/image";
import Link from 'next/link';

const slides = [
  {
    image: "slide1.jpg",
    title: "PARQUE TECNOLÓGICO", 
    text: "Um ecossistema de fomento à inovação criado para reverberar soluções de impacto através da tecnologia",
    buttonText: "Conheça o PradoTech",
    link: "/pradotech",
  },
  {
    image: "slide2.jpg",
    title: "PARCEIRO DO ECOSSISTEMA", 
    text: "Anunciamos com alegria nossa parceria junto ao South Summit Brazil 2025. Nos unimos para expandir o ecossistema brasileiro de inovação! Bora fazer parte também?",
    buttonText: "Fazer inscrição",
    link: "/inscricao",
  },
  {
    image: "slide3.jpg",
    title: "Título 3",
    text: "Anunciamos com alegria nossa parceria junto ao South Summit Brazil 2025. Nos unimos para expandir o ecossistema brasileiro de inovação! Bora fazer parte também?",
    buttonText: "Fazer inscrição",
    link: "/inscricao",
  },
];
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="bg-header w-full h-auto flex flex-col md:flex-row items-center justify-between p-4">
        <div className="w-full md:w-1/2 flex items-center pl-28">
          <Image
            src="whitelogo.svg"
            alt="Logo"
            width={120}
            height={60}
            className="hover:cursor-pointer"
          />
        </div>
        <nav className="w-full md:w-1/2 flex items-center gap-4 justify-center md:justify-end pr-28">
          <a href="#" className="border-b-2 border-yellow-500">Página Inicial</a>
          <a href="#">Sobre Nós</a>
          <a href="#">Casa das Startups</a>
          <a href="#">Blog</a>
          <button className="bg-gray-500/50 w-40 h-10 rounded-xl">Acessar Plataforma</button>
        </nav>
      </header>
      <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 px-4 gap-4">
            <h3 className="text-yellow-500 text-lg md:text-xl">{slide.title}</h3>
            <h2 className="text-white text-5xl md:text-5xl my-4 text-center px-56">{slide.text}</h2>
            <Link href={slide.link} passHref>
              <button className="bg-yellow-500 text-black text-lg px-4 py-2 rounded md:px-6 md:py-3">
                {slide.buttonText}
              </button>
            </Link>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
            } transition duration-300`}
          />
        ))}
      </div>
    </div> 
      <section className="relative w-full h-auto overflow-hidden"> 
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 px-4 md:px-28">
              <h3 className="text-yellow-500 text-lg md:text-xl">{slide.title}</h3> 
              <h2 className="text-white text-2xl md:text-4xl my-4 text-center">{slide.text}</h2>
              <Link href={slide.link} passHref>
                <button className="bg-yellow-500 text-black text-lg px-4 py-2 rounded md:px-6 md:py-3">
                  {slide.buttonText}
                </button>
              </Link>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
              } transition duration-300`}
            />
          ))}
        </div>
      </section>

      {/* Nova Seção - 70% da tela */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[100vh]">
        <div className="w-full md:w-1/2 p-4 md:p-24 flex flex-col justify-center gap-12">
            <h4 className="text-sm font-semibold text-[#c5553d]">SOBRE NÓS</h4>
            <h2 className="text-3xl font-bold">O PradoTech é um ecossistema diferente</h2>
            <p className ="text-base"> Iniciamos nossa trajetória naquilo que é indispensável. Com as condições que estão sendo buscadas desde o começo, o ambiente se constitui a partir de um ecossistema propício para a inovação, tendo sinergia entre esforços privados e públicos.</p>
          <Link href="/link-desejado" passHref>
            <button className="bg-yellow-500 text-black text-lg px-4 py-2 rounded-xl font-bold">Saiba mais sobre o PradoTech</button>
          </Link>
        </div>
        <div className="w-full md:w-2/3 flex items-center justify-center relative h-full">
          <Image 
            src="/casamain.png" 
            alt="Descrição da Imagem" 
            layout="fill" 
            objectFit="contain" 
            className="absolute inset-0" 
          />
        </div>
      </div>

      {/* Seção Inferior - 30% da tela */}
      <div className="flex w-full h-[30vh] justify-center items-center bg-[#F4F7FA]">
        <div className="flex w-full justify-evenly">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold">+15</h1>
            <p className="text-sm">Startups incubadas</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold">05</h1>
            <p className="text-sm">Startups investidas</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold">04</h1>
            <p className="text-sm">Espaço de trabalho</p>
          </div>
        </div>
      </div>
      {/* Nova Seção - 60% da altura da tela */}
      <div className="flex w-full h-[75vh]">
        {/* Lado Esquerdo - Vídeo */}
        <div className="w-1/2 h-full flex items-center">
          <video className="w-full h-[75%] object-contain px-20" controls>
            <source src="video.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        
        {/* Lado Direito - Texto */}
        <div className="w-1/2 h-full flex flex-col justify-center p-4 gap-12">
          <h4 className="text-sm font-semibold text-[#c5553d]">COWORKING</h4>
          <h2 className="text-3xl font-bold">Casa das Startups</h2>
          <p className="text-base pr-24">A Casa das Startups é um espaço de trabalho colaborativo onde os indivíduos inovadores, empresas e entidades governamentais se reúnem para melhorar a comunidade local ao ampliar soluções tecnológicas. <br /><br />Oferecemos espaços de trabalho flexíveis, tecnologia de ponta e acesso a uma comunidade vibrante de profissionais de mentalidade semelhante.</p>
        </div>
      </div>

      {/* Seção Inferior - 40% da altura da tela com imagem */}
      <div className="flex flex-col w-full h-[40vh] items-center bg-white gap-5 mb-24">
        <h2 className="text-2xl font-bold text-center text-black">Empresas do Ecossistema</h2>
        <div className="relative w-full h-full">
          <Image 
            src="/Startups.svg" 
            alt="Imagem em Destaque" 
            layout="fill" 
            objectFit="contain" 
            className="absolute inset-0 px-20" 
          />
        </div>
        <Link href="/link-desejado" passHref>
          <button className="bg-yellow-500 text-black text-lg px-4 py-2 rounded-xl font-bold mt-4">Conheça as Empresas</button>
        </Link>
    </div>
    <div className="relative w-full h-auto">
      {/* Área Azul (80%) */}
      <div className="bg-[#F4F7FA] h-[70vh] p-8 flex flex-col justify-start">
        <div className="flex flex-col items-center gap-8 mt-20">
          <h2 className="text-sm font-bold text-center text-[#c5553d]">NOSSOS ESPAÇOS</h2>
          <h1 className="text-4xl font-bold text-center">
            Compartilhe experiências com
            <br /> empreendedores apaixonados
          </h1>
        </div>
        {/* Cards na divisa */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-20 min-h-fit h-60">
          <div className="grid grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center rounded-xl shadow-md bg-white w-80">
              <img src="/EspacoComum.png" alt="Espaços Comuns" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="flex items-center gap-20 pt-0 pb-2"><h3 className="text-md font-bold text-blue-500 mt-2">Espaços Comuns</h3>
              <a href="#" className="text-3xl text-black font-extrabold py-2 px-4 rounded">
                →
              </a></div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center rounded-xl shadow-md bg-white w-80">
              <img src="/EspacoComum.png" alt="Espaços Comuns" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="flex items-center gap-20 pt-0 pb-2"><h3 className="text-md font-bold text-blue-500 mt-2">Salas de Reunião</h3>
              <a href="#" className="text-3xl text-black font-extrabold py-2 px-4 rounded">
                →
              </a></div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center rounded-xl shadow-md bg-white w-80">
              <img src="/EspacoComum.png" alt="Espaços Comuns" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="flex items-center gap-20 pt-0 pb-2"><h3 className="text-md font-bold text-blue-500 mt-2">Escritórios</h3>
              <a href="#" className="text-3xl text-black font-extrabold py-2 px-4 rounded">
                →
              </a></div>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center rounded-xl shadow-md bg-white w-80">
              <img src="/EspacoComum.png" alt="Espaços Comuns" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="flex items-center gap-40 pt-0 pb-2"><h3 className="text-md font-bold text-blue-500 mt-2">Eventos</h3>
              <a href="#" className="text-3xl text-black font-extrabold py-2 px-4 rounded">
                →
              </a></div>
            </div>
          </div>
        </div>
      </div>

      {/* Área Branca (20%) */}
      <div className="bg-white h-[20vh] p-8"></div>
    </div>
    <div className="flex justify-between p-8 bg-gray-100 h-screen items-center">
      {/* Parte esquerda */}
      <div className="w-1/2">
        <h6 className="text-sm font-bold text-[#c5553d]">BENEFÍCIOS</h6>
        <h2 className="text-2xl font-bold text-gray-800">Aproveite as vantagens de estar em um ecossistema</h2>
        <p className="mt-4 text-gray-700">
          Trabalhe no nosso coworking e aumente sua produtividade e networking, aproveitando todo o conforto da nossa estrutura. <br /><br />Desfrute de nossas áreas comuns, cozinha compartilhada com café e água, sanitários, rede elétrica, Wi-Fi liberado e estacionamento gratuito.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Clique Aqui
        </button>
      </div>

      {/* Parte direita */}
      <div className="w-1/2 flex">
        {/* Coluna esquerda */}
        <div className="w-1/2 p-4">
          <div className="flex items-center mb-4">
            
            <span>Tópico 1</span>
          </div>
          <div className="flex items-center mb-4">
            
            <span>Tópico 2</span>
          </div>
          <div className="flex items-center mb-4">
            
            <span>Tópico 3</span>
          </div>
        </div>

        {/* Coluna direita */}
        <div className="w-1/2 p-4">
          <div className="flex items-center mb-4">
            
            <span>Tópico 4</span>
          </div>
          <div className="flex items-center mb-4">
            
            <span>Tópico 5</span>
          </div>
          <div className="flex items-center mb-4">
            
            <span>Tópico 6</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}