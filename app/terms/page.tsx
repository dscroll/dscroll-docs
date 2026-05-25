import React from 'react';
import { Container, Title, Text, Stack, Divider, Paper, Group } from '@mantine/core';
import { IconScale } from '@tabler/icons-react';

export const metadata = {
  title: 'Terms & Conditions | DScroll',
  description: 'Review the terms & conditions of the DScroll decentralized identity platform.',
};

export default function TermsPage() {
  return (
    <Container size="md" py={60} mih="calc(100vh - 328px)">
      <Paper p={{ base: 24, md: 40 }} radius="lg" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
        <Stack gap="xl">
          <Group gap="md">
            <IconScale size={40} style={{ color: '#6366f1' }} />
            <Title order={1} style={{ background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Terms &amp; Conditions
            </Title>
          </Group>
          <Text c="dimmed" size="sm">Last Updated: May 25, 2026</Text>
          <Divider opacity={0.1} />

          <Text size="md" lh={1.7}>
            Welcome to <strong>DScroll</strong>. By accessing or using our documentation portal, software client repositories, smart contracts, and associated interfaces (collectively, the "Services"), you agree to be bound by these Terms &amp; Conditions ("Terms"). If you do not agree, please do not use the Services.
          </Text>

          <Stack gap="md">
            <Title order={3} c="white">1. Description of Services</Title>
            <Text c="dimmed" lh={1.6}>
              DScroll is a decentralized, open-source name service protocol that allows users to register, own, and trade sovereign Top-Level Domains (TLDs) and custom name identities formatted with `@` notation (e.g., `user@brand`) on supported blockchain networks (such as Base and BNB Chain). All smart contracts are autonomous and deployed directly on-chain.
            </Text>
          </Stack>

          <Stack gap="md">
            <Title order={3} c="white">2. Wallet Responsibility</Title>
            <Text c="dimmed" lh={1.6}>
              To interact with DScroll smart contracts, you must connect a non-custodial cryptographic wallet (such as MetaMask or Coinbase Wallet). You are solely responsible for keeping your wallet private keys and passwords secure. Blockchain transactions are immediate and irreversible.
            </Text>
          </Stack>

          <Stack gap="md">
            <Title order={3} c="white">3. TLD &amp; Name Ownership</Title>
            <Text c="dimmed" lh={1.6}>
              TLDs are minted as unique, self-custodied NFTs directly on the blockchain with zero recurring annual renewal fees. TLD owners act as their own registry providers, retaining sole administrative control to configure registration fees, currencies, and custom naming rules.
            </Text>
          </Stack>

          <Stack gap="md">
            <Title order={3} c="white">4. Open-Source License</Title>
            <Text c="dimmed" lh={1.6}>
              Most DScroll code repositories, smart contracts, and templates are released under the open-source <strong>MIT License</strong>. Users are granted permission to review, modify, deploy, and redistribute the codebase for their own white-label registry providers and applications.
            </Text>
          </Stack>

          <Stack gap="md">
            <Title order={3} c="white" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              5. Disclaimer of Warranties
            </Title>
            <Text c="dimmed" lh={1.6} style={{ background: 'rgba(239, 68, 68, 0.03)', borderLeft: '4px solid #ef4444', padding: '12px 16px', borderRadius: 4 }}>
              <strong>PLEASE READ CAREFULLY:</strong> The DScroll software is provided "AS IS" and "AS AVAILABLE", without warranty of any kind, express or implied. Interacting with smart contracts and blockchain protocols carries inherent risks including exploits, congestion, and asset loss. The developers are not liable for any direct or indirect damages.
            </Text>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}
