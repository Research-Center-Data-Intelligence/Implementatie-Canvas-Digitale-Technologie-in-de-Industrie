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

      <Link href="/administratie">
        <Button className="cursor-pointer">Administratie </Button>
      </Link>

      <Link href="/customerService">
        <Button className="cursor-pointer">Customer service</Button>
      </Link>

      <Link href="/hr">
        <Button className="cursor-pointer">HR</Button>
      </Link>

      <Link href="/inkomendeLogistiek">
        <Button className="cursor-pointer">Inkomende logistiek</Button>
      </Link>

      <Link href="/inkoop">
        <Button className="cursor-pointer">Inkoop</Button>
      </Link>

      <Link href="/it">
        <Button className="cursor-pointer">IT</Button>
      </Link>

      <Link href="/kwaliteit">
        <Button className="cursor-pointer">Kwaliteit</Button>
      </Link>

      <Link href="/planning">
        <Button className="cursor-pointer">Planning</Button>
      </Link>

      <Link href="/productie">
        <Button className="cursor-pointer">Productie</Button>
      </Link>

      <Link href="/r&d">
        <Button className="cursor-pointer">Research & Development</Button>
      </Link>

      <Link href="/sales">
        <Button className="cursor-pointer">Sales</Button>
      </Link>

      <Link href="/uitgaandeLogistiek">
        <Button className="cursor-pointer">Uitgaande logistiek</Button>
      </Link>
    </nav>
  );
}
