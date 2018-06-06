import S from 's-js'
import * as Surplus from 'surplus'
import Images from 'upsideDownDrawing/Images'
import Splash from 'upsideDownDrawing/Splash'

require('upsideDownDrawing/css/style.css')

const showSplash = S.data(false)

const next = () => {
  showSplash(false)
}

const view = S.root(() =>
  <div className="app-container">
    {() => {
      if (showSplash()) {
        return <Splash {...next} />
      } else {
        return <Images />
      }
    }}
  </div>
)


document.body.appendChild(view)
