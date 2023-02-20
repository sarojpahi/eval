import Card from "@/Components/Card";
import { Grid, GridItem } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
interface propsType {
  users: [];
}
const People: NextPage<propsType> = (props) => {
  const { users } = props;
  console.log(users);
  return (
    <div>
      <Head>
        <title>People</title>
        <meta name="description" content="Solana Scaffold" />
      </Head>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} justifyContent="center">
        {users.map((el, i) => (
          <GridItem key={i}>
            <Card data={el} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(" https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return { props: { users } };
};

export default People;
