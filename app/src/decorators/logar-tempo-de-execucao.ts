export function logarTempoDeExecucao(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        
        return descriptor;
    }

}