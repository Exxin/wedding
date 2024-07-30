let map: google.maps.Map;
let marker: google.maps.marker.AdvancedMarkerElement;
async function initMap(): Promise<void> {
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 50.32067, lng: 28.75377 },
    zoom: 10.5,
    mapId: "DEMO_MAP_ID",
    mapTypeId: 'terrain',
    streetViewControl: false,
    fullscreenControl: true,
    disableDefaultUI: false,
    zoomControl: true,
    backgroundColor: '#6d927a',
    draggable: true,
    // gestureHandling: 'greedy',
  });

  const marker = new AdvancedMarkerElement({
    position: { lat: 50.32067, lng: 28.75377 },
    map,
    title: "Вереси, Житомирська область, Ресторан-готель Губернія",
    zoom: 10.5,
    label: {
      text: "Губернія",
      color: "black",
      fontSize: "14px",
      fontWeight: "bold",
    },
    icon: {
      url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      scaledSize: new google.maps.Size(32, 32), // Зміна розміру іконки
      origin: new google.maps.Point(0, 0), // Початкова точка іконки
      anchor: new google.maps.Point(16, 32), // Якірна точка іконки
    },
      animation: google.maps.Animation.BOUNCE, // Анімація появи маркера
      optimized: true, // Оптимізація для високопродуктивного рендерингу
  });
}

initMap();
export {};