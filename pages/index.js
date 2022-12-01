import { useState, useEffect } from 'react'
import HeadTag from '../components/HeadTag'

import QRCode from 'qrcode'

export default function Home() {
  // const [theTime, setTheTime] = useState(1)

  // const renderClock = () => {
  //   console.log('here')
  // }
  //

  const updateClock = () => {
    var canvas = document.getElementById('canvas')
    QRCode.toCanvas(
      canvas,
      `https://qrclock.alanwsmith.com/the-time-is/${Date.now()}`,
      { width: 400, color: { dark: '#9b1aebff', light: '#00000000' } },
      function (error) {
        if (error) console.error(error)
      }
    )
  }

  useEffect(() => {
    const intervalId = setInterval(updateClock, 2300)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <HeadTag
        description="A clock, but it's a QR Code. Just to see what it looks like"
        image="https://qrclock.alanwsmith.com/og-images/main.png"
        title="QR Clock - An Experiment By Alan W. Smith"
        type="website"
        url="https://qrclock.alanwsmith.com"
      />
      <div id="wrapper">
        <div id="theClock">
          <canvas id="canvas"></canvas>
        </div>
        <footer>
          from alan w. smith
          <br />
          <a href="https://www.alanwsmith.com">main site</a> ~{'  '}
          <a href="https://links.alanwsmith.com">other sites</a> ~{' '}
          <a href="https://github.com/alanwsmith/qrclock.alanwsmith.com">
            repo
          </a>{' '}
          ~{'  '}
          <a href="https://podcast.alanwsmith.com">podcast</a> ~{' '}
          <a href="https://twitter.com/TheIdOfAlan">twitter</a> ~{' '}
          <a href="https://hachyderm.io/@TheIdOfAlan">mastodon</a>
        </footer>
      </div>
    </div>
  )
}
