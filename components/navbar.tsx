import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center border-b justify-between gap-4 py-4 bg-accent px-8">
      <Link href="/">
        <Image
          src="/favicon.ico"
          alt="Interactive"
          width={716}
          height={715}
          className="w-20 h-20 contain-content rounded-lg "
        />
      </Link>
      <Button>
        <Link href="/it">IT</Link>
      </Button>
      <Button>
        <Link href="/inkoop">Inkoop</Link>
      </Button>
      <Button>
        <Link href="/r&d">Research & Development</Link>
      </Button>
      <Button>
        <Link href="/uitgaandeLogistiek">Uitgaande logistiek</Link>
      </Button>
      <Button>
        <Link href="/planning">Planning</Link>
      </Button>
      <Button>
        <Link href="/kwaliteit">Kwaliteit</Link>
      </Button>
      <Button>
        <Link href="/customerService">Customer service</Link>
      </Button>
      <Button>
        <Link href="/inkomendeLogistiek">Inkomende logistiek</Link>
      </Button>
      <Button>
        <Link href="/productie">Productie</Link>
      </Button>
      <Button>
        <Link href="/hr">HR</Link>
      </Button>
      <Button>
        <Link href="/administratie">Administratie</Link>
      </Button>
      <Button>
        <Link href="/sales">Verkoop logistiek</Link>
      </Button>
    </nav>
  );
}
