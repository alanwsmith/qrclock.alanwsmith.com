export default function Page(data) {
  return (
    <div id="theGif">
      <div>
        You scanned the time on
        <br />
        {new Date(data.theTime).toString()}
        <br />
        You also scanned a QR Code
        <br />
        so you get a rick roll
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      theTime: parseInt(params['time']),
    },
  }
}

function getEpochTime() {
  const initialTime = Math.round(new Date().getTime())
  // remove miliseconds if necessary
  if (initialTime > 100000000000) {
    return initialTime / 1000
  } else {
    return initialTime
  }
}
