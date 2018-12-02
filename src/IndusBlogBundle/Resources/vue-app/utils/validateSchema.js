import { contextSchema } from '@/assets/json/schema/contextSchema.js';
import Ajv from 'ajv';

export function compareSchema(obj = {}, schema = contextSchema) {
  let ajv = new Ajv({
    allErrors: true,
    useDefaults: true
  });
  let validate = ajv.compile(schema);
  let valid = validate(obj);
  if (valid) return false;
  else {
    let ret = 'Invalid ' + ajv.errorsText(validate.errors);
    return ret;
  }
}

//currified version which take a schema and can then apply it to an object?
export function properSchemaBeforeSave(obj = {}, schema = contextSchema) {
  let ajv = new Ajv({
    allErrors: true,
    useDefaults: true,
    removeAdditional: 'all'
  });
  let validate = ajv.compile(schema);
  let valid = validate(obj);
  if (valid) return false;
  else {
    let ret = `Invalid ${ajv.errorsText(validate.errors)}`;
    return ret;
  }
}
