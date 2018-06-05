import S from 's-js'
import * as Surplus from 'surplus'
import data from 'surplus-mixin-data'

const images = SArray([
  "/static/images/stravinsky.png",
  "/static/images/ballroom-dancer.png",
])

const indices = shuffle([...Array(images().length)].map((_, i) => i))

const imageIndex = S.data(0)

const decrement = () => {
  imageIndex(imageIndex() - 1)
}

const ImageControls = () =>
  <div onClick={decrement}>
    Foo
  </div>

export {imageIndex, ImageControls}
