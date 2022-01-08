export function logarTempoDeExecucao(emSegundos : boolean = false){ //se nao passar parametro, é false
    //se nao tivesse o =false, seria obrigatorio sempre passar parametro, assim se nao passar é false o valor padrao
    return function(
        target: any,
        propertyKey: string, //nome do método original
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value; //descriptor é o método original decorado
        descriptor.value = function(...args:any[]){ //this será no contexto a partir dessa chaves{
            let divisor = 1;
            let unidade = "milissegundos";
            if(emSegundos){
                divisor = 1000;
                unidade = "segundos"
            }
            
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/1000 } segundos`) //divide p/1000 para obter valor em segundos
                        //nome do método
            retorno //se a funcao original n retornar nada, dará undefined mas nao tem problema pq eh um codigo generico e precisa ter retorno caso a funcao q for decorada tenha retorno
        };
    
        return descriptor; //retorna o retorno do métodoOriginal
    }

}