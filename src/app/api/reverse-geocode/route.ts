import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const latRaw = searchParams.get("lat");
  const lonRaw = searchParams.get("lon");

  const lat = latRaw ? Number(latRaw) : NaN;
  const lon = lonRaw ? Number(lonRaw) : NaN;

  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return NextResponse.json({ error: "Invalid lat/lon" }, { status: 400 });
  }

  const url = new URL("https://nominatim.openstreetmap.org/reverse");
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("lat", String(lat));
  url.searchParams.set("lon", String(lon));
  url.searchParams.set("zoom", "10");
  url.searchParams.set("addressdetails", "1");

  const res = await fetch(url.toString(), {
    headers: {
      "Accept": "application/json",
      "User-Agent": "BIo-links/1.0",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Reverse geocode failed" }, { status: 502 });
  }

  const data: any = await res.json();
  const address = data?.address ?? {};

  const cityLike =
    address.city ??
    address.town ??
    address.village ??
    address.hamlet ??
    address.municipality ??
    address.county ??
    address.state;

  const cc: string | undefined = address.country_code;

  const label =
    cityLike && cc
      ? `${String(cityLike)}, ${String(cc).toUpperCase()}`
      : cityLike
        ? String(cityLike)
        : address.country
          ? String(address.country)
          : null;

  return NextResponse.json({ label });
}
