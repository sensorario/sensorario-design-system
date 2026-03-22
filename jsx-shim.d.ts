declare module "react/jsx-runtime" {
    export const Fragment: any;
    export function jsx(type: any, props: any, key?: any): any;
    export function jsxs(type: any, props: any, key?: any): any;
}

declare namespace JSX {
    interface IntrinsicElements {
        button: any;
        input: any;
    }
}
