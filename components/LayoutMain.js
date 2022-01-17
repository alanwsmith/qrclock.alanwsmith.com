import Link from 'next/link'

export default function LayoutMain({ children }) {
  return (
    <>
      <main className="pb-16 mx-auto container pt-3 px-6 max-w-prose">
        {children}
      </main>
    </>
  )
}
