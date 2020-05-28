function safeHash(target){
    return target.replace(/\./g,'-').replace(/\s/g,'')
}

export { safeHash }