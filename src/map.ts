let map: google.maps.Map;
let marker: google.maps.marker.AdvancedMarkerElement;
async function initMap(): Promise<void> {
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 50.320, lng: 28.753 },
    zoom: 13,
    mapId: "DEMO_MAP_ID",
    mapTypeId: 'terrain',
    streetViewControl: false,
    fullscreenControl: true,
    disableDefaultUI: false,
    zoomControl: false,
    backgroundColor: '#6d927a',
    gestureHandling: 'greedy',
        styles: [
      {
        featureType: 'all',
        elementType: 'labels',
        stylers: [{ visibility: 'on' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#ffffff' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#c0e4f3' }]
      }
    ],
  });

  const marker = new AdvancedMarkerElement({
    position: { lat: 50.32074, lng: 28.75360 },
    map,
    title: "Вереси, Житомирська область, Ресторан-готель Губернія",
  });
}

initMap();
export {};