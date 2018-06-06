import S from 's-js'
import * as Surplus from 'surplus'
import SArray from 's-array'
import data from 'surplus-mixin-data'

require('upsideDownDrawing/Splash/css/splash.css')

export default (next) => {

  const root =
    <div className='splash-container'>
      <div className="app-header">
        Upside Down Drawing
      </div>
      <div className="paragraph">
        Upside down drawing is a trick for seeing the world as shapes rather than symbols. Normally when you draw, your left brain insists that everything is a symbol, so you draw what things <i>ought</i> to look like. By putting images in an unfamiliar perspective, you silence that voice and observe what things truly look like.
      </div>
      <div className="paragraph">
        Finding good source images isn't super easy, so this site provides some fun ones to start with.
      </div>
      <div className="paragraph">
        All you need is pencil and some paper taped to your desk. Make sure you're undisturbed for 30 minutes.
      </div>
      <div className="paragraph">
        As you draw, pay close attention to the shape of each line, not what it represents. Don't flip the drawings over until you're finished—I promise, you'll be surprised at the quality of your results!
      </div>
      <div className="button" onClick={next}>
        Start Drawing
      </div>
      <div className="footer">
        Read more about upside down drawing in Chapter 4 of <a href="http://drawright.com/">Drawing on the Right Side of the Brain</a> by Betty Edwards.
      </div>
    </div>

  return root
}
