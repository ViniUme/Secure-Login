import Head from "next/head";

type Props = {
    title: string,
    description: string,
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
};

export default function Page(props: Props){
    return(
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {props.children}
        </>
    );
}