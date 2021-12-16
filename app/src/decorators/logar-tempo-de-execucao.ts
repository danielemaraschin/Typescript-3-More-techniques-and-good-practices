export function logarTempoDeExecucao(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        const t1 = performance.now();
        const retorno = metodoOriginal();
        const t2 = performance.now();
        
        return descriptor;
    }

}