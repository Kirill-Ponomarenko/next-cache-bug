import Image from "next/image";

export default function Home() {
  console.log("HOME!!!!");

  return (
    <main>
      <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />

      <Image src="/_vercel.svg" alt="Vercel Logo" width={100} height={24} />

      <Image src="/_next2.svg" alt="Next2.js Logo" width={180} height={37} />

      <Image src="/_next.svg" alt="Next.js Logo" width={180} height={37} />
      <Image src="/_next.svg" alt="Next.js Logo" width={180} height={37} />
      <Image src="/_next.svg" alt="Next.js Logo" width={180} height={37} />
      <Image src="/_next.svg" alt="Next.js Logo" width={180} height={37} />
      <Image src="/_next.svg" alt="Next.js Logo" width={180} height={37} />
    </main>
  );
}
