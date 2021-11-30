let dobro =  a => a * 2;

console.log(dobro(2))

let bemVindo = () => 'Ola Mundo!';

console.log(bemVindo());

let soma = (a,b) => a+b;

console.log(soma(5,6));

let horaAtual = () => {
  let data = new Date();
  return data.getHours() + ':' +data.getMinutes();
  }
  
  // console.log(horaAtual());

  // setTimeout( function(){

  //   console.log('Olá Mundo!')
    
  //   }, 20)

    // setInterval( function(){

    //   console.log('Olá Mundo!')
      

    //   }, 1000)

    function nomeCompleto(nome,sobrenome){

      return nome+' '+sobrenome;
    }

    function bomdia(nome,sobrenome,callback){

      return 'Ola '+callback(nome,sobrenome);
    }

    console.log(bomdia("Mateus", "Praxedes", nomeCompleto))


    function acaoCarro(callback){
     return callback();

    }


    console.log(acaoCarro(function(){

    return 'olá'
      
    }));


    