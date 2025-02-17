'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 export default function formAlt = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handlerLogin = async (e) => {
    e.preventDefault();

    toast.error('Erro na Aplicação');
  };

  return (
    <div className="login">
      <div className="card-header">
        <h1>Alterar Dados</h1>
      </div>
      <div className="b">
        <form className="card" onSubmit={handlerLogin}>
        <div className="card-content">
        <div className="card-content-area">
            <input
                placeholder="Nome"
                type="name"
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}>
            </input>
            </div>

            <div className="card-content-area">
            <input
                placeholder="E-mail"
                type="email"
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}>
            </input>
            </div>

            <div className="card-content-area">
            <input
                placeholder="Senha"
                type="password"
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}>
            </input>
            </div>
          </div>
          <button>Alterar</button>
          <ToastContainer />
        </form>
        <p>
          <Link href="/pages/dashboard">Dashboard</Link>
        </p>
      </div>
    </div>
  );
};

