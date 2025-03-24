import { useRouter } from "next/router";

export const getStaticProps = async ({ }) => {
    return {
        props: {},
    };
};

const Home = ({ }) => {
    const router = useRouter()
    return <div>Welcome
        <p onClick={() => {
            router.push('/p/1')
        }}>page 1</p>
        <p onClick={() => {
            router.push('/p/2')
        }}>page 2</p>
        <p>bottom</p>
    </div>
}

export default Home