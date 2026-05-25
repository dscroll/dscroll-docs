import React from 'react';
import { Container, Title, Text, Stack, Divider, Paper, Group, Anchor, SimpleGrid } from '@mantine/core';
import { IconBuilding, IconBrandTwitter, IconBrandGithub, IconMapPin, IconWorld } from '@tabler/icons-react';

export const metadata = {
  title: 'About Us | DScroll',
  description: 'Learn more about DScroll, a Dubai-based software company building sovereign digital identity infrastructure.',
};

export default function AboutPage() {
  return (
    <Container size="md" py={60} mih="calc(100vh - 328px)">
      <Paper p={{ base: 24, md: 40 }} radius="lg" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
        <Stack gap="xl">
          <Group gap="md">
            <IconBuilding size={40} style={{ color: '#06b6d4' }} />
            <Title order={1} style={{ background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              About Us
            </Title>
          </Group>
          <Text c="dimmed" size="sm">Empowering Web3 Sovereign Identity</Text>
          <Divider opacity={0.1} />

          <Text size="lg" lh={1.7} c="white" fw={500}>
            DScroll is an innovative software company situated in the vibrant technology and blockchain capital of <strong>Dubai, United Arab Emirates</strong>.
          </Text>

          <Text size="md" lh={1.7} c="dimmed">
            We specialize in building decentralized naming systems and digital identity infrastructure, enabling creators, brands, and DAOs to issue their own white-label Top-Level Domains (TLDs) and custom name registries without writing any custom smart contracts.
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30} my={10}>
            <Paper p="md" radius="md" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
              <Stack gap="xs">
                <Group gap={8}>
                  <IconMapPin size={20} color="#6366f1" />
                  <Text fw={700} c="white">Our Location</Text>
                </Group>
                <Text c="dimmed" size="sm">
                  Situated in Dubai, UAE—a world-class hub for cryptographic networks, digital assets, and next-generation software development.
                </Text>
              </Stack>
            </Paper>

            <Paper p="md" radius="md" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
              <Stack gap="xs">
                <Group gap={8}>
                  <IconWorld size={20} color="#06b6d4" />
                  <Text fw={700} c="white">Ecosystem Partner</Text>
                </Group>
                <Text c="dimmed" size="sm">
                  Developed in close association with <strong>ODude</strong>, the underlying protocol engine powering on-chain digital identity lookup.
                </Text>
              </Stack>
            </Paper>
          </SimpleGrid>

          <Divider opacity={0.05} />

          <Stack gap="md">
            <Title order={3} c="white">Connect With Our Team</Title>
            <Text c="dimmed" lh={1.6}>
              We are a fully open-source, community-focused ecosystem. Explore our codebases, build your own registry portals, or follow us for active feature updates:
            </Text>
            
            <Group gap="lg" mt={10}>
              <Anchor
                href="https://x.com/dscrollhq"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#06b6d4', fontWeight: 600, textDecoration: 'none' }}
              >
                <IconBrandTwitter size={20} />
                @dscrollhq
              </Anchor>

              <Anchor
                href="https://github.com/dscroll"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6366f1', fontWeight: 600, textDecoration: 'none' }}
              >
                <IconBrandGithub size={20} />
                GitHub Repositories
              </Anchor>

              <Anchor
                href="https://odude.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff', fontWeight: 600, textDecoration: 'none' }}
              >
                <IconWorld size={20} />
                odude.com
              </Anchor>
            </Group>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}
