/**
 * @example
 * var foo = '[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.pinata.cloud.md)'
 * var bar = markdownLinkToTextLabel(foo)
 * // bar = 'Report History: https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.pinata.cloud.md'
 */
const markdownLinkToTextLabel = (markdownLink: string) => markdownLink.replace(/\[([^\]]+)\]\((.+)\)/, '$1: $2')

export { markdownLinkToTextLabel }
