import chalk from 'chalk'
import { marked } from 'marked'
import { markedTerminal } from 'marked-terminal'
import type { TerminalRendererOptions } from 'marked-terminal'

const getFormatter = (options: TerminalRendererOptions) => async (markdown: string) => {
  // @ts-expect-error types do not overlap
  marked.use(markedTerminal(options))

  return marked.parse(markdown)
}

const red = getFormatter({ paragraph: chalk.red })
const regular = getFormatter({ paragraph: chalk.reset })
const bold = getFormatter({ paragraph: chalk.bold })

export { getFormatter, red, regular, bold }
