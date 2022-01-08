export function inspect() {
    return function (
        target: any, //pode ser constructor(static method) ou prototype (metodo de instancia);
        propertyKey: string, //nome do method
        descriptor: PropertyDescriptor //referencia ao method
    ) {
        const metodoOriginal = descriptor.value;
    }


}