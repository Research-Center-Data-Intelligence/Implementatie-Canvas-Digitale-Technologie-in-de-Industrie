import InteractiveImage from "@/components/interactiveImage";

export default function Home() {
  return (
    <div className="flex flex-col text-center justify-center">
      <header className="items-center p-2 text-bold text-2xl border-b ">
        Home{" "}
      </header>
      <main className="flex flex-col m-4 items-center gap-2 justify-center">
        <p>
          Welkom bij <b>Smart Bikes</b>.
        </p>
        <div className="w-2xl wrap-break-word">
          Ontdek hoe ons fictieve fietsenbedrijf AI inzet binnen de
          bedrijfsprocessen. Met concrete voorbeelden laten we zien hoe slimme
          technologie de processen efficiënter maakt en de toekomst van
          mobiliteit vormgeeft.
        </div>
        <InteractiveImage />
      </main>
    </div>
  );
}
