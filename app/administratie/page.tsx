import HomeButton from "@/components/homeButton";

export default function AdministrationPage() {
  return (
    <div>
      <header className="flex items-center p-2 text-bold text-2xl border-b relative">
        <div className="flex-1 flex justify-start">
          <HomeButton />
        </div>

        <h1 className="flex-none text-center">Administratie</h1>

        <div className="flex-1 ">
          {/* Leeg, zodat 'Inkoop' in het midden blijft */}
        </div>
      </header>

      <main className="pl-8 pt-4">
        <div>
          <h2 className="text-xl">
            Feature 1: Beschrijving voor feature 1 specifiek voor inkoop.
          </h2>
          <h3>Wat?</h3>
          <p></p>
          <h3>Hoe?</h3>
          <p></p>
        </div>
        <div>
          <h2 className="text-xl">
            Feature 2: Uitleg over de tweede technologie.
          </h2>
          <h3>Wat?</h3>
          <p></p>
          <h3>Hoe?</h3>
          <p></p>
        </div>
        <div>
          <h2 className="text-xl">Feature 3: En de derde beschrijving hier.</h2>
          <h3>Wat?</h3>
          <p></p>
          <h3>Hoe?</h3>
          <p></p>
        </div>
      </main>
    </div>
  );
}
