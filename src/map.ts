let map: google.maps.Map;
async function initMap(): Promise<void> {
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 50.320, lng: 28.753 },
    zoom: 13,
  });

    const marker = new google.maps.marker.AdvancedMarkerElement({
    position: { lat: 50.3205, lng: 28.7535 },
    map,
    title: "Вереси, Житомирська область",
  });
}

initMap();
export {};