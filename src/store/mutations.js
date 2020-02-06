import data from './data'

const CHANGELANG = (state, lang) => {
  state.lang = lang
  state.data = data[lang]
}

export {
  CHANGELANG
}
