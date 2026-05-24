'use client';

import { TextAnimate } from '@gfazioli/mantine-text-animate';
import { Button, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title maw="90vw" mx="auto" className={classes.title} ta="center">
        Welcome to
        <TextAnimate
          animate="in"
          by="character"
          inherit
          variant="gradient"
          component="span"
          segmentDelay={0.2}
          duration={2}
          animation="scale"
          animateProps={{
            scaleAmount: 3,
          }}
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          DScroll
        </TextAnimate>
      </Title>

      <Text c="dimmed" ta="center" size="xl" maw={680} mx="auto" mt="sm">
        DScroll is an open-source software application empowering creators, communities, and DAOs to become their own name registry providers. Mint custom extensions as self-custodied NFTs and own the complete identity monopoly.
      </Text>
      <center>
        <Button
          variant="outline"
          size="lg"
          radius="xl"
          mt="xl"
          component="a"
          href="./docs"
        >
          Read the Docs
        </Button>
      </center>
    </>
  );
}
