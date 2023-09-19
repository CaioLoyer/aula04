'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/react-toastify.css';

export default function Login() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
    const userAuth = await handlerAcessUser(user);
    if(userAuth.token === undefined){
      toast.error("Erro no email ou senha!")
    }
      push('/pages/dashboard');
    } catch {
      toast.error ('A aplicação deu erro')
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>
      <input
          placeholder='Nome'
          type="name"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button>Entrar</button>
        <ToastContainer/>
      </form>
    </div>
  )
}
