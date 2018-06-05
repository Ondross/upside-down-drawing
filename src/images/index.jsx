import S from 's-js'
import * as Surplus from 'surplus'
import SArray from 's-array'
import data from 'surplus-mixin-data'

require('upsideDownDrawing/Images/css/images.css')

export default () => {
  const images = [
    "/static/images/stravinsky.png",
    "/static/images/ballroom-dancer.png",
  ],
  shuffle = arr => arr.sort(() => Math.random() - 0.5),
  indices = shuffle([...Array(images.length)].map((_, i) => i)),
  imageIndex = S.data(0),
  flipped = S.data(false),
  decrement = () => {
    let next = imageIndex() - 1
    flipped(false)
    if (next < 0) {
      next = indices[indices.length - 1]
    }
    imageIndex(next)
  },
  flip = () => {
    flipped(!flipped())
  },
  increment = () => {
    let next = imageIndex() + 1
    flipped(false)
    if (next >= indices.length) {
      next = 0
    }
    imageIndex(next)
  },
  ImageControls = () =>
    <div className="controls-container">
      <div className="controls-button" onClick={decrement}>
        <
      </div>
      <div className="controls-button" onClick={flip}>
        <img className={`${flipped() ? "" : "flipped"}`} src="/static/icons/flip.svg" />
      </div>
      <div className="controls-button" onClick={increment}>
        >
      </div>
    </div>


  const root =
    <div className="drawing-container">
      <ImageControls />
      <div className="image-wrapper">
        <div className="image-container">
          <img className={`drawing ${flipped() ? "" : "upside-down"}`} src={images[indices[imageIndex()]]} />
        </div>
      </div>
    </div>

  return root
}

