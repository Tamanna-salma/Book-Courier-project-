import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router";
import "leaflet/dist/leaflet.css";
import { Search } from "lucide-react";

const Coverage = () => {
  const position = [23.685, 90.3563];

  // Loader data
  const loadedData = useLoaderData();

  // Local state
  const [serviceCenter, setServiceCenter] = useState([]);

  const mapRef = useRef(null);

  // Handle loader + fallback fetch
  useEffect(() => {
    if (loadedData) {
      setServiceCenter(loadedData);
    } else {
      fetch("/service.json")
        .then((res) => res.json())
        .then((data) => setServiceCenter(data));
    }
  }, [loadedData]);

  const handleSearch = (e) => {
    e.preventDefault();

    const location = e.target.location.value;

    const district = serviceCenter.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 14);
    }
  };

  return (
    <div className="min-h-screen sticky bg-transparent transition-colors duration-300 py-10">
      <h2 className="text-center text-3xl lg:text-5xl mt-8 font-black text-gray-800 dark:text-white">
        We are available in <span className="text-cyan-600">64 Districts</span>
      </h2>

      {/* Search */}
      <div className="flex justify-center items-center mt-10 px-4">
        <form onSubmit={handleSearch} className="w-full max-w-md relative group">
          <input
            type="search"
            name="location"
            placeholder="Search your district..."
            className="w-full px-8 py-4 rounded-full bg-white dark:bg-slate-900 shadow-xl border border-gray-100 dark:border-slate-800 focus:ring-4 focus:ring-cyan-600/20 outline-none transition-all dark:text-white dark:placeholder-gray-500 font-medium pr-14"
          />
          <button type="submit" className="absolute right-2 top-2 bottom-2 bg-cyan-600 hover:bg-cyan-700 text-white px-5 rounded-full transition-colors active:scale-95 shadow-lg shadow-cyan-600/20">
            <Search className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Map */}
      <div className="h-[600px] mx-auto w-full px-3 lg:max-w-7xl mb-12 mt-10 relative">
        <div className="absolute -inset-4 bg-cyan-600/5 dark:bg-purple-600/5 rounded-[2.5rem] blur-3xl -z-10"></div>
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-800">
            <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className="h-[600px] w-full"
            ref={mapRef}
            >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {serviceCenter.map((center, index) => (
                <Marker
                key={index}
                position={[center.latitude, center.longitude]}
                >
                <Popup>
                    <div className="p-2">
                        <strong className="text-cyan-700 block text-lg mb-1">{center.district}</strong>
                        <span className="text-gray-600 font-medium">Service Area:</span>
                        <p className="text-gray-500 mt-1">{center.covered_area.join(", ")}</p>
                    </div>
                </Popup>
                </Marker>
            ))}
            </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
