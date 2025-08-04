import { createSonolusServer } from 'sonolus-express'
import { EngineData } from './engine'
import { levels } from './levels'

export default createSonolusServer({
  engine: EngineData,
  levels,
})
