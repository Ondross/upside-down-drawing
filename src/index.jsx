import S from 's-js'
import * as Surplus from 'surplus'
import Images from 'upsideDownDrawing/Images'
import Splash from 'upsideDownDrawing/Splash'
import Soundtrack from 'upsideDownDrawing/Soundtrack'
import Analytics from 'upsideDownDrawing/Analytics'
require('upsideDownDrawing/css/style.css')

Analytics()

const showSplash = S.data(true)
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
    <Soundtrack />
  </div>
)


document.body.appendChild(view)
