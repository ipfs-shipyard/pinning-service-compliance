/* eslint-disable no-console */
import { marked } from 'marked'
import TerminalRenderer from 'marked-terminal'
import chalk from 'chalk'

// default terminalRenderer options
// const defaultOptions = {
//   // Colors
//   code: chalk.yellow,
//   blockquote: chalk.gray.italic,
//   html: chalk.redBright,
//   heading: chalk.green.bold,
//   firstHeading: chalk.magenta.underline.bold,
//   hr: chalk.reset,
//   listitem: chalk.reset,
//   table: chalk.reset,
//   paragraph: chalk.blue, // regular text...
//   strong: chalk.bold,
//   em: chalk.italic,
//   codespan: chalk.yellow,
//   del: chalk.dim.gray.strikethrough,
//   link: chalk.blue,
//   href: chalk.blue.underline

//   // Formats the bulletpoints and numbers for lists
//   // list: function (body, ordered) {/* ... */},

//   // Reflow and print-out width
//   // width: 80, // only applicable when reflow is true
//   // reflowText: false,

//   // Should it prefix headers?
//   // showSectionPrefix: true,

//   // Whether or not to undo marked escaping
//   // of enitities (" -> &quot; etc)
//   // unescape: true,

//   // Whether or not to show emojis
//   // emoji: true,

//   // Options passed to cli-table3
//   // tableOptions: {},

//   // The size of tabs in number of spaces or as tab characters
//   // tab: 3 // examples: 4, 2, \t, \t\t

//   // image: function (href, title, text) {} // function for overriding the default image handling.
// }

const getFormatter = (options: TerminalRenderer.TerminalRendererOptions) => (markdown: string) =>
  marked(markdown, { renderer: new TerminalRenderer(options) })

const red = getFormatter({ paragraph: chalk.red })
const regular = getFormatter({ paragraph: chalk.reset })
const bold = getFormatter({ paragraph: chalk.bold })

export { getFormatter, red, regular, bold }
