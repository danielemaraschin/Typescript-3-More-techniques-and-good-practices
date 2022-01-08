function logData(formato = '') {
    return function (target, key, descriptor) {
        const metodoOriginal = descriptor.value;
        return descriptor;
    };
}
