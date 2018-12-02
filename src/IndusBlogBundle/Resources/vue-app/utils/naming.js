export function nameUnique(name, arr) {
  let reg, res, nb;

  name = name.trim().replace(/\s+/g, ' ');
  if (arr.indexOf(name) > -1) {
    reg = new RegExp('^' + name + ' \\((\\d+)\\)$');
    nb = arr.reduce(function(nb, str) {
      res = reg.exec(str);
      return res ? Math.max(nb, +res[1]) : nb;
    }, 1);
    return `${name} (${nb + 1})`;
  }
  return name;
}

export function generateUuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
