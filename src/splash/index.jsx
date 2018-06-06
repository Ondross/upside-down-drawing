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
      <div className="button" onClick={next}>
        Start Drawing
      </div>
      <div className="paragraph">
        Our goal is to see the world in shapes, rather than symbols. Upside down drawing helps trigger that mental shift.
      </div>
      <div className="paragraph">
        This is inspired by Chapter 4 of <a href="http://drawright.com/">Drawing on the Right Side of the Brain</a> by Betty Edwards.
      </div>
    </div>

  return root
}

