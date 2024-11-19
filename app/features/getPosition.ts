export default async function getPosition(): Promise<{
  latitude: number;
  longitude: number;
}> {
  if ("geolocation" in navigator) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          if (!coords) {
            reject(new Error("Invalid position data received"));
            return;
          }
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        (error) => {
          let errorMessage;
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "User denied the request for Geolocation.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              errorMessage = "The request to get user location timed out.";
              break;
            default:
              errorMessage = "An unknown error occurred.";
          }
          reject(new Error(errorMessage));
        },
      );
    });
  } else {
    throw new Error("Geolocation is not supported");
  }
}
