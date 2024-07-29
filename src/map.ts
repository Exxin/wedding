let map: google.maps.Map;
let marker: google.maps.marker.AdvancedMarkerElement;
async function initMap(): Promise<void> {
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 50.320, lng: 28.753 },
    zoom: 13,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    position: { lat: 50.32074, lng: 28.75360 },
    map,
    title: "Hello World!",
  });
  //   new google.maps.Marker({
  //   position: { lat: 50.32074, lng: 28.75360 },
  //   map,
  //   title: "Hello World!",
  // });
}

initMap();
export {};