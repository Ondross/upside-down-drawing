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
    if (next >= indices.length) {
      next = 0
    }
    imageIndex(next)
  },
  enableShowAll = () => {
    showAllMode(true)
  },
  setImage = (idx) => {
    const shuffledIndex = indices.indexOf(idx)
    S.freeze(() => {
      imageIndex(shuffledIndex)
      showAllMode(false)
    })
  },
  searchInput = <input type="text" fn={data(searchTerm)} className="search-input" placeholder="Search..." />,
  ImageControls = () =>
    <div className="controls-container">
      <div className="button controls-button" onClick={decrement} title="Previous Image">
        <
      </div>
      <div className="button controls-button" onClick={flip} title="Flip Image">
        <img className={flipped() ? "" : "flipped"} src="/static/icons/flip.svg" />
      </div>
      <div className="button controls-button" onClick={increment} title="Next Image">
        >
      </div>
      {searchInput}
      <div className="button controls-button view-all" onClick={enableShowAll} title="View all">
        All
      </div>
    </div>,
  TopBar = () => {
    if (showAllMode()) {
      return <div className="controls-container controls-header">
        Upside Down Drawing
      </div>
    } else {
      return <ImageControls />
    }
  },
  ShuffledImage = () =>
    <div className="image-wrapper">
      <div className="image-container">
        <img className={`drawing ${flipped() ? "" : "upside-down"}`} src={imageList[indices[imageIndex()]].src} />
        <div className="attribution">
          <a target="_blank" href={imageList[indices[imageIndex()]].attribution}>Image Source</a>
        </div>
      </div>
    </div>,
  AllImages = () =>
    <div className="thumbnails">
      {imageList.map((image, idx) =>
        <img onClick={() => {setImage(idx)}} className="thumbnail" src={image.src} />
      )}
    </div>,
  SearchIFrame = () =>
  // Scrolling set to no because there is a big when you click in image in the iframe after scrolling. We force you to click images and cycle through.
  <iframe scrolling="no" fn={(el) => {el.className = flipped() ? "search-frame" : "search-frame upside-down"}} src={`https://www.bing.com/images/search?q=${searchTerm()}&go=Search&qs=ds&form=QBILPG`}>
  </iframe>,
  ImageDisplay = () => {
    if (searchTerm()) {
      return <SearchIFrame />
    } else if (showAllMode()) {
      return <AllImages />
    } else {
      return <ShuffledImage />
    }
  }, keyCodeFunctions = {
    ArrowUp: flip,
    ArrowDown: flip,
    ArrowLeft: decrement,
    ArrowRight: increment,
  },
  reset = () => {
    S.freeze(() => {
      searchTerm('')
      flipped(false)
    })
  }
  S.on(imageIndex, reset)
  S.on(showAllMode, reset)

  document.body.addEventListener('keydown', ({key}) => {
    if (document.activeElement === searchInput) {
      return
    }
    if (keyCodeFunctions[key]) {
      keyCodeFunctions[key]()
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

