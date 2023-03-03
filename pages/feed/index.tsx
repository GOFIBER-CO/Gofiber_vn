import generateRssFeed from "../../src/Rss/index";
import fs from "fs";
import xml2js from "xml2js"

//@ts-ignore
const Feed = ({ data }) => {
    let parser = new xml2js.Parser()
    const dataResult = parser.parseString(data, (dataResult) => dataResult)
    //@ts-ignore
    return <div>{dataResult}</div>
};
//@ts-ignore

export const getServerSideProps = async ({ res }) => {

    await generateRssFeed();
    //@ts-ignore
    const data = fs.readFileSync('../public/rss/feed.xml', 'utf8', (err, data: any) => {
        if (data)
            return data;
    })
    res.setHeader("Content-Type", "text/xml");
    res.write(data);
    res.end();
    return {
        props: { data: data || null },
    };
};

export default Feed;