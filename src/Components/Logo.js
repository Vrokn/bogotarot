import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated as a, interpolate } from 'react-spring'
import './logo.css'

export default function Logo() {
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
  const interpEye = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30 + 30},${xy[1] / 30 + 15 + o / 2}) scale(1)`)
  const interpIris = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30},${xy[1] / 30 + -10 + o / 8})`)
  const interpPupil = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30},${xy[1] / 25 + -10 + o / 8})`)
  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
  return (
    <div class="container" onMouseMove={onMove} >
      <a.svg id="eye" transform={interpEye}>
        <path d="M53.8437 15.0099C28.0574 -11.8227 9.02866 3.32396 0.372149 15.0498C-0.14593 15.7516 -0.116902 16.7288 0.420612 17.4156C19.9236 42.3372 43.8152 30.4013 54.0012 17.5602C54.6006 16.8044 54.5118 15.7051 53.8437 15.0099Z" fill="#F8DD74" />
        <a.g transform={interpIris}>
          <circle fill="#333031" cx="27" cy="25" r="8" />
        </a.g>
        <a.g transform={interpPupil} fill="#FFFFFF">
          <circle fill="#FFFFFF" cx="20" cy="20" r="4" />
        </a.g>
      </a.svg>
    </div>
  )
}

ReactDOM.render(<Logo />, document.getElementById('root'))
