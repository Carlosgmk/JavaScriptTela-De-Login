class Login {
     static logado = false
     static matlogado = null
     static nomelogado = null
     static acessologado = null
     static estilocss = null
     static callback_ok = null
     static callback_naook = null
     static config = {
          cor: '#048',
          img: 'src/logo.png'
     }
     static endpoint = 'https://3d95e0a6-d008-44ef-b5aa-9a5d6153ef6b-00-3pnglt8y8ug5i.spock.replit.dev/';

     static Login=(callback_ok, callback_naook, config=null)=>{
          if(config!=null){
               this.config = config;
          }
          this.callback_ok =()=>{callback_ok()}
          this.callback_naook =()=>{callback_naook()}
          this.estilocss = `
           *{
     margin: 0;
     padding: 0;
     border: none;
     box-sizing: border-box;
}

/* Formatação tela Login */

.fundoLogin{
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
     height: 100vh;
     position: absolute;
     top: 0;
     left: 0;
     background-color: rgba(0, 0, 0, 0.75);
}
.baselogin{
     display: flex;
     justify-content: center;
     align-items: stretch;
     width: 50%;
     height: 50%;
}
.elementosLogin{
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     width: 50%;
     background-color: rgba(255, 255, 255, 0.719);
     padding: 10px 0px 0px 0px;
     border-radius: 10px 0px 0px 10px;
}

.logoLogin{
     display: flex;
     justify-content: center;
     align-items: center;
     width: 50%;
     background-color: rgba(179, 238, 238, 0.767);
     padding: 10px;
     border-radius: 0px 10px 10px 0px;
}
.logoLogin img{
     width:  90%;
     box-sizing: inherit;
}

.campoLogin {
     display: flex;
     justify-content: flex-start;
     align-items: flex-start;
     flex-direction: column;
     box-sizing: inherit;
     margin-bottom: 40px;
     margin-left: 10px;

}
.campoLogin label {
     font-size: 18px;
}

.campoLogin input{
     font-size: 22px;
     padding: 5px;
     background-color: #fff;
     border-radius: 5px;
     
}
.botoesLogin {
     display: flex;
     justify-content: space-around;
     align-items: center;
     width: 100%;
     box-sizing: inherit;
}
.botoesLogin button{
     cursor: pointer;
     background-color: ${this.config.cor};
     color: #fff4f4;
     border-radius: 5px;
     padding: 10px 20px;
     width: 100px;
}
          `
          const StyleEstilo = document.createElement('style')
          StyleEstilo.setAttribute('id','id_estiloLogin')
          StyleEstilo.setAttribute('rel','stylesheet')
          StyleEstilo.setAttribute('type','text/css')
          StyleEstilo.innerHTML= this.estilocss
          document.head.appendChild(StyleEstilo)

          const fundoLogin = document.createElement('div')
          fundoLogin.id = 'fundoLogin'
          fundoLogin.classList.add('fundoLogin')
          document.body.prepend(fundoLogin)

          const baselogin = document.createElement('div')
          baselogin.id = 'baselogin'
          baselogin.classList.add('baselogin')
          fundoLogin.appendChild(baselogin)

          const elementosLogin = document.createElement('div')
          elementosLogin.id = 'elementosLogin'
          elementosLogin.classList.add('elementosLogin')
          baselogin.appendChild(elementosLogin)

          const campoLoginUserName = document.createElement('div')
          campoLoginUserName.id = 'campoLoginUserName'
          campoLoginUserName.classList.add('campoLogin')
          elementosLogin.appendChild(campoLoginUserName)

          const labelUserName = document.createElement('label')
          labelUserName.innerHTML='Nome'
          campoLoginUserName.appendChild(labelUserName)

          
          const inputUserName = document.createElement('input')
          inputUserName.id = 'f_username'
          inputUserName.setAttribute('type', 'text')
          inputUserName.setAttribute('name', 'f_username')
          campoLoginUserName.appendChild(inputUserName)

          const campoLoginSenha = document.createElement('div')
          campoLoginSenha.id = 'campoLoginSenha'
          campoLoginSenha.classList.add('campoLogin')
          elementosLogin.appendChild(campoLoginSenha)

          const labelSenha = document.createElement('label')
           labelSenha.innerHTML='Senha'
          campoLoginSenha.appendChild(labelSenha)

          
          const inputSenha = document.createElement('input')
          inputSenha.id = 'f_senha'
          inputSenha.setAttribute('type', 'password')
          inputSenha.setAttribute('name', 'f_senha')
          campoLoginSenha.appendChild(inputSenha)


          const botoesLogin = document.createElement('div')
          botoesLogin.classList.add('botoesLogin')
          elementosLogin.appendChild(botoesLogin)


          const btnLogin = document.createElement('button')
          btnLogin.id = 'btn_login'
          btnLogin.innerHTML = 'Login'
          btnLogin.addEventListener('click',(evt)=>{
               this.validLogin()
          })
          botoesLogin.appendChild(btnLogin)


          const btnCancel = document.createElement('button')
          btnCancel.id = 'btn_cancelar'
          btnCancel.innerHTML = 'Cancelar'
          btnCancel.addEventListener('click',(evt)=>{
               this.fechar();
          })
          botoesLogin.appendChild(btnCancel)


          const logoLogin =  document.createElement('div')
          logoLogin.id = 'logoLogin'
          logoLogin.classList.add('logoLogin')
          baselogin.appendChild(logoLogin)

          const imgLogoLogin =  document.createElement('img')
          imgLogoLogin.setAttribute('src', this.config.img)
          imgLogoLogin.setAttribute('title', 'Logo')
          logoLogin.appendChild(imgLogoLogin)

     }

     static validLogin =()=>{
          const mat = document.getElementById('f_username').value
          let pas = document.getElementById('f_senha').value

          const endpoint= `https://3d95e0a6-d008-44ef-b5aa-9a5d6153ef6b-00-3pnglt8y8ug5i.spock.replit.dev/?matricula=${mat}&senha=${pas}`
           fetch(endpoint)
          .then(res=>res.json())
          .then(res=>{
              if(res){
                 this.logado = true
                 this.matlogado = mat
                 this.nomelogado = res.nome
                 this.acessologado = res.acesso
                 this.callback_ok()
                 this.fechar();
               }else{
                   this.logado = false
                   this.matlogado = null
                   this.nomelogado = null
                   this.acessologado = null
                   this.callback_naook()
                   return false
              }
          })

          // if(mat=='123' && pas == '321'){
          //      return true;
          // } else{
          //      return false;
          // }
          // return true
     }

     static fechar=()=>{
         const fundoLogin = document.getElementById('fundoLogin')
         fundoLogin.remove()
         const id_estiloLogin = document.getElementById('id_estiloLogin')
         id_estiloLogin.remove()
         
     }
}
// export {Login}
