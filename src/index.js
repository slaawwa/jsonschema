import validate from './validate'
// import { validate } from 'jsonschema'
// import data from './data'
// import schema from './schema'

// const checkData = (data = data) => validate(data, schema).valid

// console.log('Validate:', checkData(null))
console.log('Validate:', validate(4, '/schema.json'))
w
