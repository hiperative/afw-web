interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

interface GeoError extends Error {
  code?: number;
}

export default (): Promise<GeoCoordinates | GeoError> => {
  const promise = new Promise(function(resolve, reject) {
    if (navigator.geolocation) {
      console.log("Geolocation true");
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          console.log("Geolocation success", position);
          const { latitude, longitude } = position.coords;

          return resolve({
            latitude,
            longitude
          });
        },
        (error: PositionError) => {
          console.log("Geolocation error", error);
          const err: GeoError = new Error(error.message);
          err.code = error.code;

          return reject(err);
        }
      );
    } else {
      console.log("Geolocation false");
      return reject(new Error("Device doesn't support geolocation"));
    }
  });

  return promise as Promise<GeoCoordinates | GeoError>;
};
