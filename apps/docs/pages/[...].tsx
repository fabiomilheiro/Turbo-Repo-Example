import { Container } from "@mui/material";
import { useRouter, Router } from "next/router";

const Page = () => {
    const router = useRouter();
    return (
        <Container>
            <h1>Fallback page</h1>
            <p>😋</p>
        </Container>
    );
};

export default Page;