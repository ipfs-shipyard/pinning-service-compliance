/**
 * Create a markdown link to a heading on the same page (hash link)
 *
 * This function attempts to create a link that matches the generated links occurring automatically when github renders a markdown document.
 *
 * @example
 *   https://github.com/ipfs-shipyard/pinning-service-compliance/blob/f19db8c708b9a9ef72437db2510eaa45840d382c/nft.storage.md#can-create-and-then-delete-a-new-pin----success
 *
 * @param text - The text to use for the link
 * @param headerText - The text of the header we want to link to
 *
 * @returns {string} A Markdown link to the header in the form of [text](converted_headerText)
 */
const linkToHeading = (text: string, headerText = text) => {
  const link = headerText
    .replace(/['=()/\\:,]/g, '') // remove invalid characters first
    .replace(/[🟢]/gu, '') // remove invalid characters first
    .replace(/[❌]/gu, '') // remove invalid characters first
    .replace(/[^a-zA-Z0-9]/g, '-') // replace any remaining non-alphanumeric characters with hyphens
    .toLowerCase()

  return `[${text}](#${link})`
}

export { linkToHeading }
