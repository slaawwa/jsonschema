import fs from 'fs'
import { validate } from 'jsonschema'

export default (data, schema) => {
  let res = false
  try {
    if (typeof schema === 'string') {
      const content = fs.readFileSync(__dirname + schema, 'utf8');
      schema = JSON.parse(content)
    }
    res = validate(data, schema).valid
  } catch (err) {
    console.log('Error:', err);
  }
  return res
}
