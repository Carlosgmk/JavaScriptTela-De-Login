import { Login } from "./login.js";
import {Cxmsg} from "./cxmsg.js";

const callback_ok=()=>{
}
const callback_naook=()=>{
     const config={
          cor:'#048',
          tipo:'ok',
          textos: null,
          comando_sn: null,
         }
         Cxmsg.exibir(config,'Erro', 'Login não efetuado! Usuário ou senha incorreto!')
}

Login.Login(callback_ok, callback_naook)