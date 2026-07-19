import { Leaf } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 px-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <Leaf className="h-5 w-5" />
      </div>
      <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
        BioSphere AI
      </span>
    </Link>
  );
}
