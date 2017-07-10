import React, { Component } from 'react'
import { PropTypes } from 'prop-types'


function SelectLanguage(props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
  return(
    <ul className="languages">
      {
        languages.map((language)=>(
          <li
            key={language}
            onClick={()=>props.onSelect(language)}
            style={language === props.languageSelected ? {color:'#d0021b'}: null}>{language}</li>
        ))
      }
    </ul>
  )
}

class Popular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      languageSelected: 'All'
    }
  }

  updateLanguage = (language) => {
    this.setState(() => {
      return {
        languageSelected: language
      }
    })
  }

  render () {
    return(
      <div>
        <SelectLanguage
          languageSelected = {this.state.languageSelected}
          onSelect = {this.updateLanguage}
          />
      </div>
    )
  }
}

export default Popular;
