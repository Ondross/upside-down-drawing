import S from 's-js'
import * as Surplus from 'surplus'
import SArray from 's-array'
import data from 'surplus-mixin-data'
import {imageList} from 'upsideDownDrawing/Images/imageList'

require('upsideDownDrawing/Images/css/images.css')

export default () => {
  const shuffle = arr => arr.sort(() => Math.random() - 0.5),
  indices = shuffle([...Array(imageList.length)].map((_, i) => i)),
  imageIndex = S.data(0),
  flipped = S.data(false),
  showAllMode = S.data(false),
  searchTerm = S.data(''),
  decrement = () => {
    let next = imageIndex() - 1
    flipped(false)
    if (next < 0) {
      next = indices[indices.length - 1]
    }
    imageIndex(next)
    searchTerm('')
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
    searchTerm('')
  },
  enableShowAll = () => {
    searchTerm('')
    showAllMode(true)
  },
  setImage = (idx) => {
    const shuffledIndex = indices.indexOf(idx)
    imageIndex(shuffledIndex)
    showAllMode(false)
  },
  searchInput = <input type="text" fn={data(searchTerm)} className="search-input" placeholder="Search" />,
  ImageControls = () =>
    <div className="controls-container">
      <div className="button controls-button" onClick={decrement}>
        <
      </div>
      <div className="button controls-button" onClick={flip}>
        <img className={`${flipped() ? "" : "flipped"}`} src="/static/icons/flip.svg" />
      </div>
      <div className="button controls-button" onClick={increment}>
        >
      </div>
      {searchInput}
      <div className="button controls-button" onClick={enableShowAll}>
        All
      </div>
    </div>,
  TopBar = () => {
    if (showAllMode()) {
      return <div></div>
    } else {
      return <ImageControls />
    }
  },
  ShuffledImage = () =>
    <div className="image-wrapper">
      <div className="image-container">
        <img className={`drawing ${flipped() ? "" : "upside-down"}`} src={imageList[indices[imageIndex()]].src} />
        <div className="attribution">
          <a target="blank" href={imageList[indices[imageIndex()]].attribution}>Attribution</a>
        </div>
      </div>
    </div>,
  AllImages = () =>
    <div>
      {imageList.map((image, idx) =>
        <img onClick={() => {setImage(idx)}} className="thumbnail" src={image.src} />
      )}
    </div>,
  SearchIFrame = () =>
  // Scrolling set to no because there is a big when you click in image in the iframe after scrolling. We force you to click images and cycle through.
  <iframe scrolling="no" className={`search-frame ${flipped() ? "" : "upside-down"}`} src={`https://www.bing.com/images/search?q=${searchTerm()}&go=Search&qs=ds&form=QBILPG`}></iframe>,
  ImageDisplay = () => {
    if (searchTerm()) {
      return <SearchIFrame />
    } else if (showAllMode()) {
      return <AllImages />
    } else {
      return <ShuffledImage />
    }
  }, keyCodeFunctions = {
    38: flip,
    40: flip,
    37: decrement,
    39: increment,
  }

  document.body.addEventListener('keydown', ({keyCode}) => {
    if (document.activeElement === searchInput) {
      return
    }
    if (keyCodeFunctions[keyCode]) {
      keyCodeFunctions[keyCode]()
      return
    }
    searchInput.focus()
  })

  const root =
    <div className="drawing-container">
      <TopBar />
      <ImageDisplay />
    </div>

  return root
}

