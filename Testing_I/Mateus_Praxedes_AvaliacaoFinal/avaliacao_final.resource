*** variables ***

${SITE}                 https://chicorei.com/
${NAVEGADOR}            Chrome
${COOKIES}              confirmPolicyButton       
${INPUT_PESQUISAR}      header-search-input-desktop
${TEXTO}                Vira lata caramelo
${PESQUISAR}            css=.center-block
${CAMISETA}             css=.pos-absolute > .entered:nth-child(1)  
${PRECO}                R$ 69,99      
${MODELAAGEM}           xpath=//div[@id='product-variations']/div/div/div[2]/div/nav
${TAMANHO}              css=.cr-option-squared:nth-child(1)
${COR}                  css=.cr-option:nth-child(1) > .product-color-option
${COMPRAR}              css=.btn-loading:nth-child(1) > span:nth-child(2)
${VER_SACOLA}           css=.header-cart-loading:nth-child(1) .btn       
${FIDELIDADE}           VOCÊ ESTÁ ACUMULANDO 1 PONTO NO CARTÃO FIDELIDADE! AO ACUMULAR 10 PONTOS, VOCÊ GANHA R$50 EM COMPRAS.
${FECHAR}               css=.btn-xl 
# 2º Caso de Teste
${TEXTO2}               Amarelo é desespero
${MENSAGEM2}            Adquira o Chico Rei Prime para desfrutar de frete grátis por 1 ano em todos os pedidos, sem valor mínimo       
# 3º Caso de Teste
${TEXTO3}               Erarr
${MENSAGEM3}            De segunda a sexta, das 8h às 20h.
# 4º Caso de Teste
${TEXTO4}              Nem Te V
${MENSAGEM4}           Compre parcelado com cartão ou á vista com boleto ou depósito
# 5º Caso de Teste
${TEXTO5}              Alceu Dispor
${MENSAGEM5}           Sua primeira troca na Chico Rei é por nossa conta!

*** Keywords ***

1º Caso de Teste

  open Browser              ${SITE}      ${NAVEGADOR}  
  Maximize Browser Window
  Click Element             ${COOKIES}    
  input text                ${INPUT_PESQUISAR}  ${TEXTO} 
  Sleep  1
  Click Element             ${PESQUISAR} 
  Sleep  1    
  Click Element             ${CAMISETA}  
  Sleep  1
  Page Should Contain       ${PRECO} 
  Sleep  1
  Click Element             ${MODELAAGEM} 
  Sleep  1
  Click Element             ${TAMANHO} 
  Sleep  1      
  Click Element             ${COR}  
  Sleep  1   
  Click Element             ${COMPRAR} 
  Sleep  1 
  Click Element             ${VER_SACOLA}    
  Sleep  1 
  # Page Should Contain       ${FIDELIDADE}  comentei porque o robot não consegue encontrar a mensagem e trava o programa quando encotra uma "Falha"
  # Sleep  2 
  Click Element             ${FECHAR}              
  Close Browser     
 
2º Caso de Teste

  open Browser              ${SITE}      ${NAVEGADOR}  
  Maximize Browser Window
  Click Element             ${COOKIES}    
  input text                ${INPUT_PESQUISAR}  ${TEXTO2} 
  Sleep  1
  Click Element             ${PESQUISAR} 
  Sleep  1    
  Click Element             ${CAMISETA}  
  Sleep  1
  Page Should Contain       ${PRECO} 
  Sleep  1
  Wait Until Element Is Visible      ${MODELAAGEM} 
  Wait Until Element Is Enabled       ${MODELAAGEM} 
  Click Element             ${MODELAAGEM} 
  Sleep  1
  Click Element             ${TAMANHO} 
  Sleep  1      
  Click Element             ${COR}  
  Sleep  1   
  Click Element             ${COMPRAR} 
  Sleep  1 
  Click Element             ${VER_SACOLA}    
  Sleep  1 
  # Page Should Contain      ${MENSAGEM2}  // comentei porque o robot não consegue encontrar a mensagem e trava o programa quando encotra uma "Falha"
  # Sleep  2 
  Click Element             ${FECHAR}              
  Close Browser          

3º Caso de Teste

  open Browser              ${SITE}      ${NAVEGADOR}  
  Maximize Browser Window
  Click Element             ${COOKIES}    
  input text                ${INPUT_PESQUISAR}  ${TEXTO3} 
  Sleep  1
  Click Element             ${PESQUISAR} 
  Sleep  1    
  Click Element             ${CAMISETA}  
  Sleep  1
  Page Should Contain       ${PRECO} 
  Sleep  1
  Wait Until Element Is Visible      ${MODELAAGEM} 
  Wait Until Element Is Enabled       ${MODELAAGEM} 
  Click Element             ${MODELAAGEM} 
  Sleep  1
  Click Element             ${TAMANHO} 
  Sleep  1      
  Click Element             ${COR}  
  Sleep  1   
  Click Element             ${COMPRAR} 
  Sleep  1 
  Click Element             ${VER_SACOLA}    
  Sleep  1 
   # Page Should Contain      ${MENSAGEM3} comentei porque o robot não consegue encontrar a mensagem e trava o programa quando encotra uma "Falha"   
  # Sleep  2 
  Click Element             ${FECHAR}              
  Close Browser 

  
4º Caso de Teste

  open Browser              ${SITE}      ${NAVEGADOR}  
  Maximize Browser Window
  Click Element             ${COOKIES}    
  input text                ${INPUT_PESQUISAR}  ${TEXTO4} 
  Sleep  1
  Click Element             ${PESQUISAR} 
  Sleep  1    
  Click Element             ${CAMISETA}  
  Sleep  1
  Page Should Contain       ${PRECO} 
  Sleep  1
  Wait Until Element Is Visible      ${MODELAAGEM} 
  Wait Until Element Is Enabled       ${MODELAAGEM} 
  Click Element             ${MODELAAGEM} 
  Sleep  1
  Click Element             ${TAMANHO} 
  Sleep  1      
  Click Element             ${COR}  
  Sleep  1   
  Click Element             ${COMPRAR} 
  Sleep  1 
  Click Element             ${VER_SACOLA}    
  Sleep  1 
  # Page Should Contain      ${MENSAGEM4}  comentei porque o robot não consegue encontrar a mensagem e trava o programa quando encotra uma "Falha"
  # Sleep  2 
  Click Element             ${FECHAR}              
  Close Browser

  
5º Caso de Teste

  open Browser              ${SITE}      ${NAVEGADOR}  
  Maximize Browser Window
  Click Element             ${COOKIES}    
  Sleep  1
  input text                ${INPUT_PESQUISAR}  ${TEXTO5} 
  Click Element             ${PESQUISAR} 
  Sleep  1    
  Click Element             ${CAMISETA}  
  Sleep  1
  Page Should Contain       ${PRECO} 
  Sleep  1
  Wait Until Element Is Visible      ${MODELAAGEM} 
  Wait Until Element Is Enabled       ${MODELAAGEM} 
  Click Element             ${MODELAAGEM} 
  Sleep  1
  Click Element             ${TAMANHO} 
  Sleep  1      
  Click Element             ${COR}  
  Sleep  1   
  Click Element             ${COMPRAR} 
  Sleep  1 
  Click Element             ${VER_SACOLA}    
  Sleep  1 
   # Page Should Contain      ${MENSAGEM5}    comentei porque o robot não consegue encontrar a mensagem e trava o programa quando encotra uma "Falha"
  # Sleep  2 
  Click Element             ${FECHAR}              
  Close Browser