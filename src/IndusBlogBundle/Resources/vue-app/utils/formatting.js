/**********				PHP DATA				**********/

// import { parameterSchema, contextSchema } from '@/assets/json/contextSchema.js';
//import { deepEqual } from '@/utils';

export function phpData(data, name = "json") {
  const nf = new FormData();
  nf.append(name, JSON.stringify(data));
  return nf;
}

/**********				Compare schema				**********/

export function compareSchema(obj) {
  obj = makeSchema(obj);
  obj = simplifySchema(obj);
  return deepEqualFieldCheck(obj, contextSchema);
}

function makeSchema(x) {
  if (Array.isArray(x)) {
    x = x.map(k => makeSchema(k));
    if (!x.some(e => e !== "string")) x = ["string"];
    return x;
  } else if (typeof x === "boolean") return true;
  else if (typeof x === "number") return 1;
  else if (typeof x === "string") return "string";
  else if (typeof x === "object") {
    let obj = {};
    for (let k in x) {
      obj[k] = makeSchema(x[k]);
    }
    return obj;
  }
}

/*
if param length and param[0] === string  in simplifySchema
is because in makeSchema, array.some transform empty array too.
*/

function simplifySchema(obj) {
  if (obj.interactions) {
    obj.interactions.forEach(i => {
      let x = parameterSchema;
      if (i.parameters) {
        if (i.parameters.length === 1 && i.parameters[0] === "string") {
          i.parameters = [x];
        } else if (i.parameters.every(e => deepEqual(e, x))) {
          i.parameters = [x];
        }
      }
    });
    let x = obj.interactions[0];
    if (obj.interactions.every(i => deepEqual(i, x))) {
      obj.interactions = [x];
    }
  }
  return obj;
}
