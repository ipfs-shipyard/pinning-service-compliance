import { marked } from 'marked'
import TerminalRenderer from 'marked-terminal'
import chalk from 'chalk'

const getFormatter = (options: TerminalRenderer.TerminalRendererOptions) => (markdown: string) =>
  marked(markdown, { renderer: new TerminalRenderer(options) })

const red = getFormatter({ paragraph: chalk.red })
const regular = getFormatter({ paragraph: chalk.reset })
const bold = getFormatter({ paragraph: chalk.bold })

export { getFormatter, red, regular, bold }
