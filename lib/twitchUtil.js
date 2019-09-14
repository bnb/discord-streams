const request = require('request')

const twitchOptions = {
  headers: {
    'Client-ID': 'sx1hppsoggmv73b7cyqp7jh65pk2mw'
  }
}

function getTwitchStatus (userLogin, callback) {
  // useful data
  const username = userLogin

  request(`https://api.twitch.tv/helix/streams?user_login=${username}`, twitchOptions, (error, response, body) => {
    if (error) throw error
    const JSONPayload = JSON.parse(body)

    if (JSONPayload.data[0].type === 'live') {
      const streamData = {
        streamer: username,
        link: `https://twitch.tv/${username}`,
        title: JSONPayload.data[0].title
      }

      callback(streamData)
    }
  })
}

module.exports = getTwitchStatus
