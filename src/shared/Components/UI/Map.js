import { Map as MapContainer, Marker, ZoomControl, Overlay } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";

function Map({ center, zoom, address }) {
  
  const mapTilerProvider = maptiler("iBOSxtV9Jz5kIfxoh9H8", "streets");
  return (
    <MapContainer
      provider={mapTilerProvider}
      dprs={[1, 2]}
      defaultCenter={center}
      defaultZoom={zoom}
      height={330}
    >
      <ZoomControl />
      <Marker width={50} anchor={center} />
      <Overlay
        anchor={center}
        className="bg-white p-3 text-sm font-light color-slate-900 rounded-full capitalize"
      >
        {address.toLowerCase()}
      </Overlay>
    </MapContainer>
  );
}

export default Map;
