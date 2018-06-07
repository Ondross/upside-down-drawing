import S from 's-js'
import * as Surplus from 'surplus'
import SArray from 's-array'
import data from 'surplus-mixin-data'

require('upsideDownDrawing/Soundtrack/css/soundtrack.css')

export default () => {
  const songs = [
    "/static/audio/birds/cormorant.mp3",
    "/static/audio/birds/crow.mp3",
    "/static/audio/birds/eagle.mp3",
    "/static/audio/birds/egret.mp3",
    "/static/audio/birds/finch.mp3",
    "/static/audio/birds/grebe.mp3",
    "/static/audio/birds/hawk.mp3",
    "/static/audio/birds/heron.mp3",
    "/static/audio/birds/mallard.mp3",
    "/static/audio/birds/sparrow.mp3",
    "/static/audio/birds/waxwing.mp3",
  ],
  shuffle = arr => arr.sort(() => Math.random() - 0.5),
  indices = shuffle([...Array(songs.length)].map((_, i) => i)),
  songIndex = S.data(0),
  playing = S.data(false),
  audio = <audio preload="none" src={songs[indices[songIndex()]]} />,
  showCredit = S.data(null),
  creditClassName = () => {
    if (showCredit() === null) {
      return ''
    }
    if (showCredit()) {
      return 'shown'
    }
    return 'hidden'
  },
  credit = <div className={`soundtrack-credit ${creditClassName()}`}>
    Music by <a target="_blank" href="http://freemusicarchive.org/music/Chad_Crouch/">Chad Crouch</a>
  </div>,
  togglePlaying = () => {
    if (playing()) {
      audio.pause()
    } else {
      audio.play()
    }
    playing(!playing())
    showCredit(true)
    setTimeout(() => showCredit(false), 2000)
  },
  button = <img className="soundtrack-icon" src={playing() ? "/static/icons/speaker.png" : "/static/icons/mute.png"} onClick={togglePlaying} />

  audio.onended = () => {
    const next = songIndex() >= songs.length-1 ? 0 : songIndex() + 1
    songIndex(next)
    audio.play()
  }

  const root = <div className="soundtrack-container">
    {audio}
    {credit}
    {button}
  </div>

  return root
}
