import Link  from "next/link";


export default function NotFound() {
    return (
        <div>
            <h1>It's Seems you have come to wrong url.</h1>
            <Link href={'/'}>Go to Home.</Link>
        </div>
    )
}