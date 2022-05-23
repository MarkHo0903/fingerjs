async function getGeoLg(onLg: (lg: any) => void) {
  if ('geolocation' in navigator) {
    /* 地理位置服务可用 */
    navigator.geolocation.getCurrentPosition(function (positon) {
      const {
        accuracy,
        altitude,
        altitudeAccuracy,
        heading,
        latitude,
        longitude,
        speed,
      } = positon.coords;
      onLg({
        accuracy,
        altitude,
        altitudeAccuracy,
        heading,
        latitude,
        longitude,
        speed,
      });
    });
  }
}

export default getGeoLg;
