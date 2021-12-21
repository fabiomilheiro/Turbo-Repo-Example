import * as next from 'next';
import { useRouter } from "next/dist/client/router";
import Menu from "../../components/menu";

interface Props {
    post: {
        id: string;
        title: string;
        body: string;
        userId: string;
    };
    server: boolean;
}

const Page = (props) => {
    const { post, server } = props;
    const router = useRouter();
    const { id } = router.query;
    return <><Menu /><h1>Page {id}</h1>
    <p>Rendered from server = {server ? "Yes" : "No"}</p>
    <h1>{post.title}</h1>
    <p>{post.body}</p></>
};

export const getServerSideProps: next.GetServerSideProps<Props> = async (context) => {
    const post =
        await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
            .then(response => response.json());

    return {
        props: {
            server: true,
            test: "X000" + context.params.id,
            post: post
        }
    }
};

// export const getStaticPaths: next.GetStaticPaths = (context) => {
//     return {
//         paths: ['/page/1', '/page/2'],
//         fallback: false
//     };
// };

// export const getStaticProps: next.GetStaticProps = (context) => {
//     const id = context.params.id as string;

//     return {
//         props: {
//             test: 1000 + Number.parseInt(id)
//         }
//     };
// };

export default Page;