import Link from "next/link"
import styles from "./footer.module.css"
import packageJSON from "../package.json"
import { useSession } from "next-auth/react"

export default function Footer() {
  const { data: session } = useSession()

  return session ? (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="https://next-auth.js.org">Documentation</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://www.npmjs.com/package/next-auth">NPM</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://github.com/nextauthjs/next-auth-example">GitHub</a>
        </li>
        <li className={styles.navItem}>
          <Link href="/policy">
            <a>Policy</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <em>next-auth@{packageJSON.dependencies["next-auth"]}</em>
        </li>
      </ul>
    </footer>
  ) : null
}
