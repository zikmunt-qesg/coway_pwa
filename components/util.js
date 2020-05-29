function safeHash(target){
    return target.replace(/\./g,'-').replace(/\s/g,'')
}

function deepCopy(obj) {
    if (obj === null || typeof(obj) !== 'object')
    return obj;
  
    var copy = obj.constructor();
  
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = deepCopy(obj[attr])
      }
    }
  
    return copy
}

export { safeHash, deepCopy }