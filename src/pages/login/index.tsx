import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import FacebookButton from "../../components/FacebookButton";
import GoogleButton from "../../components/GoogleButton";
import InputText from "../../components/InputText";
import { UserModel } from "../../models/UserModel";
import { RootState } from "../../store";
import { login } from "../../store/dashboardSlice";
import { auth, app } from "../../config/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

interface LoginResponse {
  access_data?: string;
  email: string;
  name: string;
  photoUrl?: string;
  role: string;
}
export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const nome = useSelector((state: RootState) => state.dashboard.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogin = async () => {
    try {
      navigate("/dashboard");
      //toast("Usuário ou senha errados!", { type: "error" });
    } catch (error: any) {
      toast(error.response.data.message, { type: "error" });
    }
  };

  const loginGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider).then(() => {});
      
        .signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      navigate("/dashboard");
      //toast("Usuário ou senha errados!", { type: "error" });
    } catch (error: any) {
      toast(error.response.data.message, { type: "error" });
    }
  };

  return (
    <div className="min-w-[20rem] h-screen w-full flex justify-center items-center bg-bgLogin">
      <div className="min-w-[20rem] w-[20rem] sm:w-[50rem] rounded-lg shadow-xl flex flex-row relative">
        <div className="sm:w-[20rem] sm:rounded-l-lg sm:relative hidden sm:flex sm:flex-col">
          <div className="w-[20rem] rounded-l-lg bg-loginSideColorLight h-[100px] absolute z-50"></div>
          <div className="w-[23rem] rounded-b-[80%] rounded-t-lg bg-loginSideColorLight h-[180px] rotate-6 absolute top-5 z-50"></div>
          <div className="w-full h-full rounded-l-lg bg-loginSideColor absolute z-49"></div>
          <div
            className="w-[20rem] h-full flex flex-col items-center left-0 top-0 p-10 justify-between"
            style={{ zIndex: 150 }}
          >
            <p className="text-white text-3xl font-semibold">
              Sua sorte com inteligência!
            </p>
            <p className="text-center text-white text-xl font-bold">
              Não possui acesso?
              <Link className="text-gray-600 text-lg" to="/auth/register">
                Cadastre-se aqui!
              </Link>
            </p>
          </div>
        </div>
        <div className="sm:w-[30rem] w-[20rem] bg-white p-10 rounded-lg sm:rounded-r-lg z-50 flex flex-col">
          <h2 className="text-gray-500">Seja bem vindo</h2>
          <InputText
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputText
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link
            className="self-end text-teal-600 -mt-2 font-semibold"
            to="/auth/forgotpassword"
          >
            Esqueci a senha
          </Link>
          <Button type="button" onClick={handleLogin} cssclass="my-4">
            ENTRAR
          </Button>
          <p className="text-center text-gray-500 mb-4">
            <span className="tracking-[-5px] mx-2">----------------------</span>
            ou use um serviço
            <span className="tracking-[-5px] mx-2">----------------------</span>
          </p>
          <div className="flex justify-between">
            <GoogleButton onClick={loginGoogle} />
            <FacebookButton />
          </div>
        </div>
      </div>
    </div>
  );
}
