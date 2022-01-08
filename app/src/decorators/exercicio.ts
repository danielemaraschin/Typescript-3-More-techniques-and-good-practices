/*
Rafaela deseja criar um decorator que,
 ao ser aplicado em um método, 
 exibe no console a data na qual o método foi chamado. 
 Contudo, se o decorator receber como parâmetro dd/MM/yyyy, deve exibir a data neste formato.
*/

function logData(formato: string = '') {

    return function(target: any, key: string, descriptor: PropertyDescriptor) {
         const metodoOriginal = descriptor.value;
                 // aqui vem a lógica do decorator
         return descriptor;
    }
}