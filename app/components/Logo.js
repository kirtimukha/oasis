import Link from "next/link";

export function Logo () {
    return (
      <Link className={`flex items-center gap-4 z-10`} href={`/`} ><img src="/ground-logo.svg" alt="VFUN Logo"/></Link>
    )
}