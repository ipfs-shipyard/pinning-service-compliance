import { URL } from 'url'

const getHostnameFromUrl = (url: string): string => new URL(url).hostname

export { getHostnameFromUrl }
