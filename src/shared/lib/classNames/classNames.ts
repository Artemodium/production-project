export type Mods = Record<string, boolean | string | undefined>

export function classNames(
    cls: string,
    additional: Array<string | undefined>,
    mods: Mods = {},
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, val]) => Boolean(val))
            .map(([className]) => className),
    ].join(' ')
}
