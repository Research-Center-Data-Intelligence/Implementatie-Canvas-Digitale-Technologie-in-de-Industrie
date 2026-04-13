import Link from "next/link";
import { Button } from "./ui/button";
import Image from "@/components/next-image";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center border-b justify-between gap-4 py-4  px-8">
      <Link href="/" className="flex flex-col">
        <Image
          src="/favicon.ico"
          alt="Interactive"
          width={716}
          height={715}
          className="w-18 h-18 contain-content rounded-lg "
        />
        <span className="text-md text-center">Home</span>
      </Link>

      <Link href="/administratie">
        <Button className="cursor-pointer bg-transparent text-black hover:text-blue-700">
          Administratie{" "}
        </Button>
      </Link>

      <Link href="/customerService">
        <Button className="cursor-pointer bg-transparent text-black hover:text-blue-700">
          Customer service
        </Button>
      </Link>

      <Link href="/hr">
        <Button className="cursor-pointer bg-transparent text-black hover:text-blue-700">
          HR
        </Button>
      </Link>

      <Link href="/inkomendeLogistiek">
        <Button className="cursor-pointer bg-transparent text-black hover:text-blue-700">
          Inkomende logistiek
        </Button>
      </Link>

      <Link href="/inkoop">
        <Button className="cursor-pointer bg-transparent text-black hover:text-blue-700">
          Inkoop
        </Button>
      </Link>

      <Link href="/it">
        <Button className="cursor-pointer bg-transparent text-black hover:text-blue-700">
          IT
        </Button>
      </Link>

      <Link href="/kwaliteit">
        <Button className="cursor-pointer bg-transparent text-black hover:text-blue-700">
          Kwaliteit
        </Button>
      </Link>

      <Link href="/planning">
        <Button className="cursor-pointer bg-transparent text-black hover:text-blue-700">
          Planning
        </Button>
      </Link>

      <Link href="/productie">
        <Button className="cursor-pointer bg-transparent text-black hover:text-blue-700 ">
          Productie
        </Button>
      </Link>

      <Link href="/r&d">
        <Button className="cursor-pointer bg-transparent text-black hover:text-blue-700">
          Research & Development
        </Button>
      </Link>

      <Link href="/sales">
        <Button className="cursor-pointer bg-transparent text-black hover:text-blue-700">
          Sales
        </Button>
      </Link>

      <Link href="/uitgaandeLogistiek">
        <Button className="cursor-pointer bg-transparent text-black hover:text-blue-700 ">
          Uitgaande logistiek
        </Button>
      </Link>
    </nav>
  );
}
