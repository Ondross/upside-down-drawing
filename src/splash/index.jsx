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
      <div className="app-sub-header">
        See in shapes, not symbols
      </div>
      <div className="paragraph">
        Upside down drawing is a trick for perceiving objects more accurately. By using an unfamiliar perspective, we disengage our logical left-brains in favor of our more observant, open-minded right-brains. When we forget labels, we see shapes and forms, and it becomes much easier to draw.
      </div>
      <div className="paragraph">
        This site is a collection of fun upside images for drawing. To get started, tape some paper to your desk, get a pencil, and make sure you're not disturbed for 30 minutes.
      </div>
      <div className="paragraph">
        As you draw, pay attention to the shape of each line, rather than what it represents. Don't flip anything over until you're finished, and you'll be surprised at the quality of your results!
      </div>
      <div className="button" onClick={next}>
        Start Drawing
      </div>
      <div className="footer">
        Read more about upside down drawing in Chapter 4 of <a target="_blank" href="http://drawright.com/theory/">Drawing on the Right Side of the Brain</a> by Dr. Betty Edwards.
      </div>
      <div className="footer">
        <a target="_blank" href="http://drewheine.com">Contact Me</a>
      </div>
    </div>

  return root
}
