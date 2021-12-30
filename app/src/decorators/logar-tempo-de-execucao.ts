export function logarTempoDeExecucao(){
    return function(
        target: any,
        propertyKey: string, //nome do método original
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value; //descriptor é o método original decorado
        descriptor.value = function(...args:any){
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/1000 } segundos`) //divide p/1000 para obter valor em segundos
                        //nome do método
        };
    
        return descriptor;
    }

}