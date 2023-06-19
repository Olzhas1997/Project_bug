// Вырезает все переносы и заменяет их пробелами, двойный кавычки меняет на одинарные.
export const stringFormatter = (string) => {
    return string.split('\n').join(' ').replace(/\"/gi, "'")
}
