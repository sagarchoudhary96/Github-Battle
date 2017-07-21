var axios  =  require('axios')

var id = 'YOUR_GITHUB_CLIENT_ID'
var secret = 'YOUR_GITHUB_SECRET_ID'

var params = '?client_id=' + id + '&client_secret=' + secret


function get_user_profile (username) {
  return axios.get('https://api.github.com/users/' + username + params)
  .then(function(user){
    return user.data
  })
}


function get_repos_info(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
}


function get_star_count(repos) {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count
  },0)
}

function get_watchers_count(repos) {
  return repos.data.reduce((count, repo) => {
    return count + repo.watchers_count
  },0)
}

function get_forks_count(repos) {
  return repos.data.reduce((count, repo) => {
    return count + repo.forks_count
  },0)
}

function calculate_score(profile, repos) {
  var followers = profile.followers
  var totalStars = get_star_count(repos)
  var totalWatchers = get_watchers_count(repos)
  var totalForks = get_forks_count(repos)
  return (followers*3) + totalStars + totalForks + totalWatchers
}


function handle_error(error) {
  console.warn(error)
  return null
}


function get_user_data(player) {
  return axios.all([
    get_user_profile(player),
    get_repos_info(player)
  ]).then((data)=>{
    var profile = data[0]
    var repos = data[1]
    return {
      profile: profile,
      score: calculate_score(profile, repos)
    }
  })
}


function sort_players(players) {
  return players.sort((a,b)=> (
    b.score-a.score
  ))
}


module.exports = {
  battle: function (players) {
    return axios.all(players.map(get_user_data))
    .then(sort_players)
    .catch(handle_error)
  },
  fetchPopularRepos: function(language) {
    var URI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories')

    return axios.get(URI).then(function(response) {
      return response.data.items
    })
  }
}
