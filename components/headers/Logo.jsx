import Link from  "next/link"
import Image from "next/image"
const Logo = () => {
  return (
    <div className="hidden lg:flex">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Protocol"
              width={100}
              height={24}
              className="h-6 w-auto"
            />
          </Link>
        </div>
  )
}

export default Logo