// import Image from "next/image"

import PersonCard from "@/components/personCard"

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="flex-1 flex flex-col w-full max-w-[900px] mx-auto p-5">
        <PersonCard />
      </div>
    </main>
  )
}
