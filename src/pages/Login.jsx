import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
//------------------------- CSS -------------------------//

import "../styles.css";
import "./styles/login.css";
//-------------------------------------------------------//

function Login() {
  return (
    <div className="login-header">
      <div className="left-header">
          <a className="links" id="paracadastro"></a>
          <a className="links" id="paralogin"></a>

          <div className="content">
            <div id="login">
              <form method="post" action="">
                <h1>Login</h1>
                <p>
                  <label htmlFor="nome_login">Seu nome</label>
                  <input
                    id="nome_login"
                    name="nome_login"
                    required="required"
                    type="text"
                    placeholder="ex. contato@htmlecsspro.com"
                  />
                </p>

                <p>
                  <label htmlFor="email_login">Seu e-mail</label>
                  <input
                    id="email_login"
                    name="email_login"
                    required="required"
                    type="password"
                    placeholder="ex. senha"
                  />
                </p>

                <p>
                  <input
                    type="checkbox"
                    name="manterlogado"
                    id="manterlogado"
                    value=""
                  />
                  <label htmlFor="manterlogado">Manter-me logado</label>
                </p>

                <p>
                  <input type="submit" value="Logar" />
                </p>

                <p className="link">
                  Ainda não tem conta?
                  <a href="#paracadastro">Cadastre-se</a>
                </p>
              </form>
            </div>

            <div id="cadastro">
              <form method="post" action="">
                <h1>Cadastro</h1>

                <p>
                  <label htmlFor="nome_cad">Seu nome</label>
                  <input
                    id="nome_cad"
                    name="nome_cad"
                    required="required"
                    type="text"
                    placeholder="nome"
                  />
                </p>

                <p>
                  <label htmlFor="email_cad">Seu e-mail</label>
                  <input
                    id="email_cad"
                    name="email_cad"
                    required="required"
                    type="email"
                    placeholder="contato@htmlecsspro.com"
                  />
                </p>

                <p>
                  <label htmlFor="senha_cad">Sua senha</label>
                  <input
                    id="senha_cad"
                    name="senha_cad"
                    required="required"
                    type="password"
                    placeholder="ex. 1234"
                  />
                </p>

                <p>
                  <input type="submit" value="Cadastrar" />
                </p>

                <p className="link">
                  Já tem conta?
                  <a href="#paralogin"> Ir para Login </a>
                </p>
              </form>
            </div>
          </div>
      </div>
      <div className="right-header"></div>
      <Link
        to="/home"
        style={{ position: "absolute", zIndex: "2", margin: "10px" }}
      >
        {" "}
        <BsFillArrowLeftSquareFill
          style={{ fontSize: "30px", color: "#d1c1e0" }}
        />
      </Link>
    </div>
  );
}

export default Login;
