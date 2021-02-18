export function genId() {
  return Math.random().toString(16).slice(-4)
}
console.log(genId());

export function randomUniqueString(prefix: any) {
  return (prefix || '').concat([
    genId(),
    genId(),
    genId(),
    genId(),
    genId(),
    genId(),
    genId(),
    genId()
  ].join(''))
}


export default {
  randomUniqueString
}



//
  // let current = 0;
  //
  // export function randomUniqueString (prefix: number) {
  //   return `${prefix || 'id'}-${current++}`
  // }
  // export function resetIdCounter () { current = 0 }