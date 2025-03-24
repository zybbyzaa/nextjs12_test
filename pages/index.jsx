import { useRouter } from "next/router";

export const getStaticProps = async ({}) => {
  return {
    props: {},
  };
};

const Home = ({}) => {
    const router = useRouter()
    return <div onClick={() => {
        router.push('/p/1')
    }}>Welcome</div>
}

export default Home