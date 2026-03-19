import InteractiveImage from "@/components/interactiveImage";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col justify-center items-center text-center gap-2">
        <header className="text-bold text-2xl">Home </header>
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
      </div>
    </main>
  );
}
