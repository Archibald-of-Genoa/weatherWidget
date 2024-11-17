export default function Position() {
  function showPosition() {
    "geolocation" in navigator &&
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        console.log(coords.latitude, coords.longitude);
      });
  }

  return <button onClick={showPosition}>Show position</button>;
}
