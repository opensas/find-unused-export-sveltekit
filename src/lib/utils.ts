const toTitleCase = (value: string): string =>
`${value.substring(0, 1).toUpperCase()}${value.substring(1)}`;

export const usedFromMarkup = toTitleCase

export const usedFromScript = toTitleCase

export const unused = toTitleCase
