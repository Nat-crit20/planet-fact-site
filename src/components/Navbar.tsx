import Link from "next/link";

export default function Navbar() {
  return (
    <div className="border-b-1 border-white-900  mb-5 p-3 relative flex h-15 items-center justify-between">
      <h1>The Planets</h1>
      <div>
        <Link className="p-3" href={`/planets/mercury`}>
          Mercury
        </Link>

        <Link className="p-3" href={`/planets/venus`}>
          Venus
        </Link>

        <Link className="p-3" href={`/planets/earth`}>
          Earth
        </Link>

        <Link className="p-1" href={`/planets/mars`}>
          Mars
        </Link>
        <Link className="p-1" href={`/planets/jupiter`}>
          Jupiter
        </Link>

        <Link className="p-1" href={`/planets/saturn`}>
          Saturn
        </Link>
        <Link className="p-1" href={`/planets/uranus`}>
          Uranus
        </Link>
        <Link className="p-1" href={`/planets/neptune`}>
          Neptune
        </Link>
      </div>
    </div>
  );
}
