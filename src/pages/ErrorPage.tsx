import { Link } from "react-router-dom"

/**
 * Error page.
 */
export function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full w-full">
      <h1>404 Not Found</h1>
      <h1>This page doesn't exist!</h1>
      <Link to={"/"}>
        <button className="bg-secondary-accent rounded-lg p-2">Take Me Back!</button>
      </Link>
    </div>
  )
}