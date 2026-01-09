export {};

declare module "vue" {
    interface ComponentCustomProperties {
        route: (
            name?: string,
            params?: any,
            absolute?: boolean,
            config?: any
        ) => string;
    }
}

declare global {
    function route(
        name?: string,
        params?: any,
        absolute?: boolean,
        config?: any
    ): string;
}
