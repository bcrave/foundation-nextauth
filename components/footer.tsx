import Link from "next/link"
import packageJSON from "../package.json"
import { useSession } from "next-auth/react"

export default function Footer() {
  const { data: session } = useSession()

  return session ? (
    <footer>
      <hr />
      <ul>
        <li>
          <a href="https://next-auth.js.org">Documentation</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/next-auth">NPM</a>
        </li>
        <li>
          <a href="https://github.com/nextauthjs/next-auth-example">GitHub</a>
        </li>
        <li>
          <Link href="/policy">
            <a>Policy</a>
          </Link>
        </li>
        <li>
          <em>next-auth@{packageJSON.dependencies["next-auth"]}</em>
        </li>
      </ul>
    </footer>
  ) : null
}
