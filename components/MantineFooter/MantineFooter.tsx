import React from 'react';
import { Anchor, Box, Container, SimpleGrid, Stack, Text, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandGithub, IconMapPin } from '@tabler/icons-react';
import { Logo } from '../Logo/Logo';
import classes from './MantineFooter.module.css';

export const MantineFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" className={classes.footerContainer}>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={40}>
          {/* Brand/Description Column */}
          <Stack gap="xs">
            <Logo />
            <Text className={classes.brandDescription}>
              DScroll empowers creators, brands, and DAOs to issue their own white-label Top-Level Domains and permanent Web3 identities with zero annual rent.
            </Text>
            <Group gap={6} mt={8} c="dimmed">
              <IconMapPin size={16} style={{ flexShrink: 0 }} />
              <Text size="xs" fw={500}>Dubai, United Arab Emirates</Text>
            </Group>
          </Stack>

          {/* Resources Column */}
          <Stack gap="xs">
            <Text className={classes.columnTitle}>Resources</Text>
            <Anchor href="https://docs.dscroll.com/" className={classes.footerLink}>
              Documentation
            </Anchor>
            <Anchor href="/docs" className={classes.footerLink}>
              Ecosystem Overview
            </Anchor>
            <Anchor href="/about" className={classes.footerLink}>
              About Us
            </Anchor>
          </Stack>

          {/* Legal Column */}
          <Stack gap="xs">
            <Text className={classes.columnTitle}>Legal</Text>
            <Anchor href="/privacy" className={classes.footerLink}>
              Privacy Policy
            </Anchor>
            <Anchor href="/terms" className={classes.footerLink}>
              Terms & Conditions
            </Anchor>
          </Stack>

          {/* Socials & Community Column */}
          <Stack gap="xs">
            <Text className={classes.columnTitle}>Community</Text>
            <Text size="sm" c="dimmed" mb={8}>
              Join the open-source movement and follow our decentralized journey.
            </Text>
            <Group gap="md">
              <Anchor
                href="https://x.com/dscrollhq"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.socialIcon}
                aria-label="Follow us on Twitter/X"
              >
                <IconBrandTwitter size={24} stroke={1.5} />
              </Anchor>
              <Anchor
                href="https://github.com/dscroll"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.socialIcon}
                aria-label="View our GitHub"
              >
                <IconBrandGithub size={24} stroke={1.5} />
              </Anchor>
            </Group>
          </Stack>
        </SimpleGrid>

        {/* Bottom copyright & association section */}
        <Group justify="space-between" align="center" className={classes.bottomBar} wrap="wrap">
          <Text className={classes.copyrightText}>
            MIT {currentYear} © <Anchor href="https://dscroll.com" target="_blank" rel="noopener noreferrer">DScroll</Anchor>. All rights reserved.
          </Text>

          <Box className={classes.associationContainer}>
            <Text size="xs" c="dimmed" span>in association with</Text>
            <Anchor
              href="https://odude.com"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.associationText}
            >
              odude.com
            </Anchor>
          </Box>
        </Group>
      </Container>
    </Box>
  );
};
