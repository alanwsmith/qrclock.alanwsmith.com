import { useState, useEffect } from 'react'
import HeadTag from '../components/HeadTag'

import QRCode from 'qrcode'

export default function Home() {
  // const [theTime, setTheTime] = useState(1)

  // const renderClock = () => {
  //   console.log('here')
  // }

  const updateClock = () => {
    var canvas = document.getElementById('canvas')
    QRCode.toCanvas(
      canvas,
      new Date().toLocaleTimeString(),
      { width: 600, color: { dark: '#342353ff', light: '#000000FF' } },
      function (error) {
        if (error) console.error(error)
      }
    )
  }

  useEffect(() => {
    const intervalId = setInterval(updateClock, 1000)
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
      <div className="mx-auto max-w-prose">
        <canvas width="500" height="500" id="canvas"></canvas>
      </div>
    </div>
  )
}
