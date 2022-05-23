async function getGeoLg(onLg: (lg: any) => void) {
  if ('geolocation' in navigator) {
    /* 地理位置服务可用 */
    navigator.geolocation.getCurrentPosition(function (positon) {
      onLg(positon.coords);
    });
  }
}

export default getGeoLg;
