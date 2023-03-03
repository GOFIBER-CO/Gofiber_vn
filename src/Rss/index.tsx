import fs from "fs";
import { Feed } from "feed";
import { PostApi } from "./../api/post"
const SITE_URL = "http://gofiber:3000"
const generateRssFeed = async () => {
    const posts = await PostApi.getAllPost();
    const date = new Date();
    const author = {
        name: "Gofiber",
        email: "Gofiber",
    };
    const feed = new Feed({
        title: "Gofiber",
        description: "",
        id: SITE_URL,
        link: SITE_URL,
        image: `${SITE_URL}/logo.svg`,
        favicon: `${SITE_URL}/favicon.png`,
        copyright: `All rights reserved ${new Date(date).getFullYear()}`,
        updated: date,
        generator: "Feed for Gofiber",
        feedLinks: {
            rss2: `${SITE_URL}/rss/feed.xml`,
            json: `${SITE_URL}/rss/feed.json`,
            atom: `${SITE_URL}/rss/atom.xml`,
        },
        author,
    });
    //@ts-ignore
    posts && posts.forEach((post) => {
        const url = `${SITE_URL}/${post.slug}`;
        feed.addItem({
            title: post.title,
            id: url,
            link: url,
            description: post.description,
            content: post.content,
            author: [author],
            contributor: [author],
            date: new Date(post.createdAt),
        });
    });
    fs.mkdirSync("../public/rss", { recursive: true });
    fs.writeFileSync("../public/rss/feed.xml", feed.rss2());
    fs.writeFileSync("../public/rss/atom.xml", feed.atom1());
    fs.writeFileSync("../public/rss/feed.json", feed.json1());
    return true
};
export default generateRssFeed;