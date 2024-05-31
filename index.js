require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData = {
    "login": "hiteshchaudhari",
    "id": 35369345,
    "node_id": "MDQ6VXNlcjM1MzY5MzQ1",
    "avatar_url": "https://avatars.githubusercontent.com/u/35369345?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hiteshchaudhari",
    "html_url": "https://github.com/hiteshchaudhari",
    "followers_url": "https://api.github.com/users/hiteshchaudhari/followers",
    "following_url": "https://api.github.com/users/hiteshchaudhari/following{/other_user}",
    "gists_url": "https://api.github.com/users/hiteshchaudhari/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hiteshchaudhari/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hiteshchaudhari/subscriptions",
    "organizations_url": "https://api.github.com/users/hiteshchaudhari/orgs",
    "repos_url": "https://api.github.com/users/hiteshchaudhari/repos",
    "events_url": "https://api.github.com/users/hiteshchaudhari/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hiteshchaudhari/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2018-01-12T11:19:13Z",
    "updated_at": "2019-01-07T11:01:05Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('ishadotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login to get inside</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})