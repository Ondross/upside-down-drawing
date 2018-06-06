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
        Upside down drawing is a trick for seeing the world as shapes rather than symbols. The part of your brain that categorizes everything is hard to ignore and not useful for drawing. Viewing images from an unfamiliar perspective disengages that part of your brain and allows you to observe what things actually <i>look like</i>.
      </div>
      <div className="paragraph">
        This site is a collection of fun upside images for drawing. To get started, tape some paper to your desk, get a pencil, and and make sure you're undisturbed for 30 minutes.
      </div>
      <div className="paragraph">
        As you draw, pay attention to the shape of each line, not what it represents. Don't flip anything over until you're finished, and you'll be surprised at the quality of your results!
      </div>
      <div className="button" onClick={next}>
        Start Drawing
      </div>
      <div className="footer">
        Read more about upside down drawing in Chapter 4 of <a target="_blank" href="http://drawright.com/theory/">Drawing on the Right Side of the Brain</a> by Betty Edwards.
      </div>
    </div>

  return root
}
