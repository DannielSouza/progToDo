import React from 'react'
import style from '../Styles/Tasks.module.css'
import listIcon from '../assets/list.png'
import gridIcon from '../assets/grid.png'

const Footer = ({position, setPosition}) => {
  function handleFlex(){
    setPosition("flex")
  }

  function handleGrid(){
    setPosition("grid")
  }

  return (
    <footer className={style.footerContainer}>
      <img src={listIcon} className={style.buttonPosition} onClick={handleFlex} />
      <img src={gridIcon} className={style.buttonPosition} onClick={handleGrid} />

      <p className={style.credits}>Feito por: <a href='https://github.com/DannielSouza'>Daniel Souza</a></p>
    </footer>
  )
}

export default Footer