'use strict'

import dayjs from 'dayjs'

const fromNow = (time) => {
  return dayjs(time).fromNow()
}

const hash = (sha) => {
  return sha.substring(sha.length - 6)
}

const branch = (ref) => {
  return ref.replace('refs/heads/', '')
}

export {
  fromNow,
  hash,
  branch,
}
