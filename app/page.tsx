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
        <div className="w-4xl wrap-break-word">
          <p>
            Hoe kunnen mkb-bedrijven digitale technologie inzetten om slimmer en
            efficiënter te werken?
          </p>
          <p>
            Op deze website ontdek je het aan de hand van een fictief
            fietsenbedrijf. We bieden een helder, oriënterend overzicht van
            digitale technologieën binnen productiebedrijven. Je ziet wat deze
            technologieën zijn, waarom ze waardevol zijn en hoe je ze kunt
            toepassen in je eigen processen.
          </p>
          <p>
            Met concrete voorbeelden krijg je inzicht in hoe je stappen zet
            richting een efficiëntere en toekomstbestendige bedrijfsvoering.
          </p>
        </div>
        <InteractiveImage />
      </main>
    </div>
  );
}
