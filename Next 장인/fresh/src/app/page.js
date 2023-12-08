import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  let name = 'hugo-kim';
  let link = "http://google.com"
  return (
    <div>
      <h2 style={{ color: 'green', fontSize: '30px' }} className="title">XENOSYS</h2>
      <p className="title-sub">by dev {name}</p>
      <a href={link}>구글검색</a>
    </div>
  )
}
