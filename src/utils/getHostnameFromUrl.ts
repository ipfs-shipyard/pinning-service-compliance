import { URL } from 'url'

const getHostnameFromUrl = (url: string) => new URL(url).hostname

export { getHostnameFromUrl }
