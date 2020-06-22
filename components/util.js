function safeHash(target){
    return target.replace(/\./g,'-').replace(/\s/g,'').replace(/[\{\}\[\]\/?.,;:|*~`!^_+<>@\#$%&\\\=\(\)\'\"\· ]/g,'')
}

function deepCopy(obj) {
    if (obj === null || typeof(obj) !== 'object')
    return obj;

    else if(obj.constructor.name === 'Blob' || obj.constructor.name === 'File') return obj;
  
    var copy = obj.constructor();
  
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = deepCopy(obj[attr])
      }
    }
  
    return copy
}

export { safeHash, deepCopy }