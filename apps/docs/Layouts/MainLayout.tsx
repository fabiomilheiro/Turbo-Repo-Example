import * as React from "react";
import { Container, Grid, List, MenuItem, Stack } from "@mui/material";
import Link from "next/link";

interface Props {
    children: React.ReactNode;
}

export default function MainLayout({children}: Props) {
    return (<Container>
        <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={3} alignItems={"flext-start"}>
                <Stack alignItems="flex-start">
                    <List>
                        <MenuItem><Link href="/">Home</Link></MenuItem>
                        <MenuItem><Link href="/page/[id]" as="/page/1"><a>Page 1</a></Link></MenuItem>
                        <MenuItem><Link href="/page/[id]" as="/page/2"><a>Page 2</a></Link></MenuItem>
                        <MenuItem><Link href="/page/[id]" as="/page/3"><a>Page 3</a></Link></MenuItem>
                    </List>
                </Stack>
            </Grid>
            <Grid item xs={9}>{children}</Grid>
        </Grid>
    </Container>);
}