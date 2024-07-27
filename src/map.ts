let map: google.maps.Map;
async function initMap(): Promise<void> {
  const { Map, Marker } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 50.320, lng: 28.753 },
    zoom: 13,
  });

              const marker = new Marker({
                position: { lat: 50.320, lng: 28.753 },
                map: map,
                title: "Маркер",
            });
}

initMap();
export {};