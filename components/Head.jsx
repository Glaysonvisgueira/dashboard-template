import Head from "next/head";

export default function HeadTag(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charset="UTF-8" />
        <meta name="description" content={props.metaDescription} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content="Glayson Visgueira" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </div>
  );
}
