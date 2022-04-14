import Joi from '@hapi/joi'

import { SetSchema } from './SetSchema'

const CustomJoi = Joi.extend(SetSchema)

CustomJoi.
export { CustomJoi }
