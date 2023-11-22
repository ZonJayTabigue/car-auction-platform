import Image from 'next/image'

async function getUser() {
  const res = await fetch(`${process.env.BASE_URL}/api/test`)
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello po!</h1>
    </main>
  )
}
