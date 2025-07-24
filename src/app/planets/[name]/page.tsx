import { Planet } from "./planet";

export default async function PlanetPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return (
    <div className="h-full">
      <Planet name={name} />
    </div>
  );
}
