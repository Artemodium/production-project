declare module '*.sass' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames
    export = classNames;
}

declare module '*.svg'
declare module '*.png'
declare module '*.scss'
declare module '*.ttf'
declare module '*.woff'
declare module '*.woff2'

declare module '*.svg' {
    import React from 'react'

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
    export default SVG
}

declare const __IS_DEV__: boolean
declare const __API__: string

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T
