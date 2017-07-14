import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import api from './utils/api'
import Loader from './utils/loader'

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

function RepoGrid(props) {
  return(
    <ul className='popular-list'>
      {props.repos.map((repo,index)=>(
        <li key={repo.name} className='popular-item'>
          <div className='popular-rank'>#{index + 1}</div>
          <ul className='space-list-items'>
            <li>
              <img
                className='avatar'
                src={repo.owner.avatar_url}
                alt={'Avatar for ' + repo.owner.login}
                />
            </li>
            <li><a href={repo.html_url}>{repo.name}</a></li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count} stars</li>
          </ul>
        </li>
      ))}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

class Popular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      languageSelected: 'All',
      repos: null
    }
  }

  updateLanguage = (language) => {
    this.setState(() => {
      return {
        languageSelected: language,
        repos:null
      }
    })

    api.fetchPopularRepos(language).then (function(repos) {
      this.setState(() => {
        return {
          repos: repos
        }
      })
    }.bind(this))
  }

  componentDidMount() {
    this.updateLanguage(this.state.languageSelected)
  }

  render () {
    return(
      <div>
        <SelectLanguage
          languageSelected = {this.state.languageSelected}
          onSelect = {this.updateLanguage}
          />
          {!this.state.repos?
            <Loader/>:
            <RepoGrid repos = {this.state.repos}/>}
      </div>
    )
  }
}

export default Popular;
