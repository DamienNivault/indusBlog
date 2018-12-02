function prettyObject(value) {
  let x = Object.keys(value);
  x.forEach(k => {
    if (Array.isArray(value[k])) {
      console.log(
        `%c${k}:`,
        'color: cyan',
        value[k].length > 0 ? value[k] : 'empty array'
      );
    } else {
      console.log(
        `%c${k}:`,
        'color: rgb(78, 155, 242)',
        JSON.stringify(value[k], null, 2)
      );
    }
  });
}

export function debug(value, name = '', warn = false) {
  // return; for prod mode
  let x = warn ? console.warn : console.info;
  console.group(name || 'Debugging');
  if (Array.isArray(value)) {
    console.table(value);
  } else if (typeof value === 'object') {
    prettyObject(value);
    // x(`%c${JSON.stringify(value, null, 2)}`, 'color: green');
  } else {
    x(value);
  }
  console.groupEnd(name || 'Debugging');
}
