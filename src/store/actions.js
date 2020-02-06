const changeLanguage = ({ commit, state }, lang) => {
  if (state.lang !== lang) {
    commit('CHANGELANG', lang)
    localStorage.setItem('x-language', lang)
  }
}

export {
  changeLanguage
}
