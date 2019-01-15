export interface Insertion {
  at: number,
  text: string,
}

export default function insert(input: string, insertions: Insertion[]) {
  insertions = insertions
    .map(ins => ({ ...ins, at: ins.at < 0 ? input.length + ins.at : ins.at }))
    .sort((a, b) => a.at - b.at)

  let offsetCorrection = 0

  return insertions.reduce((acc: string, current: Insertion) => {
    const left = acc.substring(0, current.at + offsetCorrection)
    const right = acc.substring(current.at + offsetCorrection)
    const retVal = `${left}${current.text}${right}`

    offsetCorrection = offsetCorrection + current.text.length
    return retVal
  }, input)

}
