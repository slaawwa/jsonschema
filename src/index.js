import validate from './validate'
import data from './data'

const valid = validate(data, '/schema.json')

console.log('Validate:', valid)
