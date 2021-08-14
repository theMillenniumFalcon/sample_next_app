import { Fragment } from "react";
import Link from 'next/link';

const NewsPage = () => {
    return <Fragment>
        <h1>The News Page</h1>
        <ul>
            <li><Link href = "/news/nextjs-is-a-great-framework">
                NextJS is a gret community.
            </Link></li>
            <li>Something Else</li>
        </ul>
    </Fragment>
}

export default NewsPage;