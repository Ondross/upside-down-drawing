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
        Upside down drawing is a method of tricking our brain into seeing the world as shapes rather than symbols. By looking at objects in an unfamiliar perspective, we trick our left-brain into ignoring what things <i>should</i> look like. This mental shift hels us focus on shapes, angles, and relationships.
      </div>
      <div className="paragraph">
        Read more in Chapter 4 of <a href="http://drawright.com/">Drawing on the Right Side of the Brain</a> by Betty Edwards.
      </div>
      <div className="paragraph">
        Before you start, turn on some instrumental music and make sure you won't be disturbed for at least 30 minutes. Try not to look at the drawings right side up until you're finished. I promise, you'll be surprised at the quality of your results!
      </div>
      <div className="button" onClick={next}>
        Go Upside Down
      </div>
    </div>

  return root
}
