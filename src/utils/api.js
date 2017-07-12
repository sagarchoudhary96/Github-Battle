var axios  =  require('axios')

module.exports = {
  fetchPopularRepos: function(language) {
    var URI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories')

    return axios.get(URI).then(function(response) {
      return response.data.items
    })
  }
}
