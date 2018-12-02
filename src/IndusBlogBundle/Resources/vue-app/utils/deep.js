/**********				DEEP COPY				**********/

/*
 taken from :
 https://github.com/vuejs/vuex/blob/dev/src/util.js
 */

export function deepCopy(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj);
  if (hit) {
    return hit.copy;
  }

  const copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({ original: obj, copy });

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy;
}

/**********				DEEP EQUAL				**********/

export function deepEqual(obj1, obj2) {
  /* [
    return true if 2 obj are equal.
    equal here means deep compare enumerable properties of object

    http://xahlee.info/js/js_comparison_equality_test_objects.html
    version 2017-09-24
 ] */

  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();

  if (keys1.length !== keys2.length) {
    return false;
  }

  // first make sure have same keys. may save time
  if (!keys1.every((k, i) => k === keys2[i])) {
    return false;
  }

  // check if any value is not equal
  return keys1.every(kk => {
    const v1 = obj1[kk];
    const v2 = obj2[kk];
    if (Array.isArray(v1)) {
      return array_equal(v1, v2);
    } else if (typeof v1 === 'object' && v1 !== null) {
      return deepEqual(v1, v2);
    } else {
      return v1 === v2;
    }
  });
}

/*________ 			Helper to deep equal			 ________ */

export function array_equal(array1, array2) {
  /* [
    return true if 2 array are equal
    allow array-like object
    allow nested array

    http://xahlee.info/js/js_comparison_equality_test_objects.html
    version 2017-09-24
 ] */

  // allow array-like object
  if (Array.isArray(array1) !== Array.isArray(array2)) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }

  return Array.prototype.every.call(array1, (x, i) => {
    const y = array2[i];
    if (Array.isArray(x)) {
      if (!Array.isArray(y)) {
        return false;
      } else {
        return array_equal(x, y);
      }
    } else if (typeof x === 'object' && typeof x !== null) {
      if (!(typeof y === 'object' && typeof y !== null)) {
        return false;
      } else {
        return deepEqual(x, y);
      }
    } else {
      return x === y;
    }
  });
}

/**********		deepEqualFieldCheck						**********/
export function deepEqualFieldCheck(obj1, obj2) {
  /* [
    return true if 2 obj are equal.
    equal here means deep compare enumerable properties of object

    http://xahlee.info/js/js_comparison_equality_test_objects.html
    version 2017-09-24
 ] */

  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();
  if (keys1.length !== keys2.length) {
    return 'missing key';
  }

  // first make sure have same keys. may save time
  keys1.forEach((k, i) => {
    if (k !== keys2[i]) {
      return 'invalid key: ' + k;
    }
  });
  // if (!keys1.every((k, i) => k === keys2[i])) {
  //   return false;
  // }

  // check if any value is not equal
  return keys1.every(kk => {
    const v1 = obj1[kk];
    const v2 = obj2[kk];
    if (Array.isArray(v1)) {
      return array_equalFields(v1, v2);
    } else if (typeof v1 === 'object' && v1 !== null) {
      return deepEqual(v1, v2);
    } else {
      return v1 === v2;
    }
  });
}

export function array_equalFields(array1, array2) {
  /* [
    return true if 2 array are equal
    allow array-like object
    allow nested array

    http://xahlee.info/js/js_comparison_equality_test_objects.html
    version 2017-09-24
 ] */

  // allow array-like object
  if (Array.isArray(array1) !== Array.isArray(array2)) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }

  return Array.prototype.every.call(array1, (x, i) => {
    const y = array2[i];
    if (Array.isArray(x)) {
      if (!Array.isArray(y)) {
        return false;
      } else {
        return array_equalFields(x, y);
      }
    } else if (typeof x === 'object' && typeof x !== null) {
      if (!(typeof y === 'object' && typeof y !== null)) {
        return 'here';
      } else {
        return deepEqualFieldCheck(x, y);
      }
    } else {
      return x === y;
    }
  });
}
