export function logarTempoDeExecucao(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        const t1 = performance.now();
        const retorno = metodoOriginal();
        
        return descriptor;
    }

}