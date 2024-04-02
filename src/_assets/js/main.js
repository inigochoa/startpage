const init = () => {
  searchHook()
  updateMessageHook()
}

const searchHook = () => {
  const searchBar = document.getElementById('search-bar')

  searchBar.addEventListener('keypress', (event) => {
    if ('Enter' !== event.key) {
      return
    }

    const query = searchBar.value.replace(/ /g, '+')
    if ('' === query) {
      return
    }

    document.location = `${searchBar.dataset.url}${query}`
  })
}

const updateMessage = () => {
  const message = document.getElementById('message')

  const date = new Date().toLocaleString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: message.dataset.timezone,
  })
  const hour = parseInt(date.substring(0, 2))

  let text = ''
  if (hour >= 0 && hour < 5) {
    text = 'it\'s too late, take some sleep'
  } else if (hour >= 5 && hour < 7) {
    text = 'you\'re up early'
  } else if (hour >= 7 && hour < 14) {
    text = 'have a good day ahead'
  } else if (hour >= 14 && hour < 20) {
    text = 'good afternoon'
  } else if (hour >= 20 && hour < 23) {
    text = 'good evening'
  } else {
    text = 'it\'s time to wrap up for the day'
  }

  message.textContent = `Hey ${message.dataset.username}, ${text}!`
}

const updateMessageHook = () => {
  updateMessage()
  setInterval(() => updateMessage(), 5 * 60 * 1000)
}

init()
