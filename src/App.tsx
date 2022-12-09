import React from "react";
import "./App.css";
import { IoMdMail } from "react-icons/io";
import { RiLinkedinFill, RiLockPasswordFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaInstagram, FaUser } from "react-icons/fa";

function App() {
  return (
    <>
      <header className="header">
        <a href="/">
          <img
            src={require("./assets/dio.png")}
            alt="Lotgo da DIO"
            className="header_logo"
          />
        </a>
        <nav className="header_navegacao">
          <ul className="header_paginas">
            <li className="header_pagina">
              <a href="https://www.dio.me/" className="header_link">
                Home
              </a>
            </li>
            <li className="header_pagina">
              <a href="https://www.dio.me/catalog" className="header_link">
                Catálogo
              </a>
            </li>
            <li className="header_pagina">
              <a
                href="https://web.dio.me/pricing"
                className="header_link"
                target={"_blank"}
                rel="noreferrer"
              >
                Planos
              </a>
            </li>
            <li className="header_pagina">
              <a href="https://www.dio.me/enterprise" className="header_link">
                Para Empresas
              </a>
            </li>
          </ul>
          <div className="header_botoes">
            <button className="header_botao">Entrar</button>
            <button className="header_botao">Cadastrar</button>
          </div>
          <div className="header_idiomas">
            <button className="header_idioma portugues idioma-ativo"></button>
            <button className="header_idioma ingles"></button>
            <button className="header_idioma espanhol"></button>
          </div>
        </nav>
      </header>
      <main className="main">
        <div className="main_conteudo">
          <div className="efeito-gradiente"></div>
          <h1 className="main_titulo">
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </h1>
          <a href="https://www.dio.me/sign-in" className="main_link-principal">
            Voltar para Login
          </a>
        </div>
        <div className="main_cadastro">
          <div className="efeito-gradiente"></div>
          <h1 className="main_titulo">Comece agora grátis</h1>
          <p className="main_texto">Crie sua conta e make the change._</p>
          <form className="main_formulario">
            <input
              type="text"
              placeholder="Nome completo"
              className="main_input"
            />
            <input
              type="email"
              placeholder="Seu melhor @e-mail"
              className="main_input"
            />
            <input
              type="text"
              placeholder="Celular ex: (11) 96123-4567"
              className="main_input"
            />
            <input type="password" placeholder="Senha" className="main_input" />
            <div className="icone-usuario">
              <FaUser color="#8647ad" />
            </div>
            <div className="icone-email">
              <IoMdMail color="#8647ad" />
            </div>
            <div className="icone-telefone">
              <img
                src={require("./assets/brasil.png")}
                alt="Bandeira do Brasil"
                className="bandeira"
              />
            </div>
            <div className="icone-senha">
              <RiLockPasswordFill color="#8647ad" />
            </div>
            <button className="main_botao">Criar minha conta grátis</button>
          </form>
          <p className="main_contrato">
            {" "}
            Ao clicar em "criar minha conta grátis", declaro que aceito as{" "}
            <a
              href="https://www.dio.me/terms-and-policies#polices"
              className="main_link-secundario"
            >
              Políticas de Privacidade
            </a>{" "}
            e os{" "}
            <a
              href="https://www.dio.me/terms-and-policies#terms"
              className="main_link-secundario"
            >
              Termos de Uso
            </a>{" "}
            da DIO.
          </p>
          <p>
            Já tenho conta.{" "}
            <a href="https://www.dio.me/sign-in" className="main_link-verde">
              Fazer login.
            </a>
          </p>
        </div>
      </main>
      <footer className="footer">
        <nav className="footer_navegacao">
          <div className="footer_informacoes">
            <div>
              <h3>make the change</h3>
              <a href="https://www.dio.me/enterprise">Para Empresas</a>
            </div>
            <div>
              <h3>Informações</h3>
              <a
                href="https://help.dio.me/pt-BR/"
                target={"_blank"}
                rel="noreferrer"
              >
                Central de Ajuda
              </a>
              <a href="https://www.dio.me/terms-and-policies">
                Termos e Políticas
              </a>
            </div>
          </div>
          <div className="footer_apps">
            <h2>Download Grátis</h2>
            <div>
              <a href="https://play.google.com/store/apps/details?id=one.digitalinnovation.app">
                <img
                  src={require("./assets/google_play.png")}
                  alt="Baixar pela loga da Google"
                />
              </a>
              <a href="https://apps.apple.com/us/app/digital-innovation-one/id1439709522">
                <img
                  src={require("./assets/app_store.png")}
                  alt="Baixar pela loja da Apple"
                />
              </a>
            </div>
          </div>
        </nav>
        <div className="footer_redes-sociais">
          <img
            src={require("./assets/dio_make.png")}
            alt="Logo da DIO"
            className="footer_logo"
          />
          <ul>
            <li>
              <a href="#">
                <RiLinkedinFill />
              </a>
            </li>
            <li>
              <a href="https://pt-br.facebook.com/diomakethechange/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/dio_me_">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dio_makethechange/">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
