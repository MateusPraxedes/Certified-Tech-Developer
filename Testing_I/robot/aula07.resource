*** variables ***

${SITE}                 https://www.saucedemo.com
${NAVEGADOR}            Chrome
${CAMPO_USARIO}         user-name
${USARIO}               standard_user
${CAMPO_SENHA}          password     
${SENHA}                secret_sauce
${BOTAO_LOGIN}          login-button 


*** Keywords ***
abrir o site Sauce demo
   open Browser  ${SITE}      ${NAVEGADOR}  
   Maximize Browser Window

Fazer login
   input text       ${CAMPO_USARIO}  ${USARIO}  
   input text       ${CAMPO_SENHA}   ${SENHA} 
   Click Element    ${BOTAO_LOGIN} 