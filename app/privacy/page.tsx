import React from 'react';
import { Container, Title, Text, Stack, Divider, Paper, Group } from '@mantine/core';
import { IconShieldCheck } from '@tabler/icons-react';

export const metadata = {
  title: 'Privacy Policy | DScroll',
  description: 'Learn how DScroll handles user privacy in a decentralized, non-custodial name service network.',
};

export default function PrivacyPage() {
  return (
    <Container size="md" py={60} mih="calc(100vh - 328px)">
      <Paper p={{ base: 24, md: 40 }} radius="lg" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
        <Stack gap="xl">
          <Group gap="md">
            <IconShieldCheck size={40} style={{ color: '#06b6d4' }} />
            <Title order={1} style={{ background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Privacy Policy
            </Title>
          </Group>
          <Text c="dimmed" size="sm">Last Updated: May 25, 2026</Text>
          <Divider opacity={0.1} />

          <Text size="md" lh={1.7}>
            Welcome to <strong>DScroll</strong>. We respect your privacy and are committed to protecting your personal data. DScroll is a decentralized, open-source software application that operates as a self-custodied identity registry protocol. This Privacy Policy describes how we handle information in connection with your use of our services.
          </Text>

          <Stack gap="md">
            <Title order={3} c="white">1. Decentralized Architecture &amp; Data Collection</Title>
            <Text c="dimmed" lh={1.6}>
              Because DScroll is built on top of public blockchain networks (such as Base and BNB Chain), we prioritize user privacy, sovereignty, and data minimization:
            </Text>
            <Text c="dimmed" lh={1.6} style={{ paddingLeft: 12, borderLeft: '2px solid #6366f1' }}>
              <strong>No Personal Data Collection:</strong> We do not collect, request, or store personal identifiers such as your legal name, physical address, email address, or phone number.
            </Text>
            <Text c="dimmed" lh={1.6} style={{ paddingLeft: 12, borderLeft: '2px solid #06b6d4' }}>
              <strong>Decentralized Interaction:</strong> When you connect your cryptographic wallet (e.g., MetaMask, WalletConnect) to issue, register, or manage name handles (`user@brand`) or Top-Level Domains (TLDs), all transactions are initiated and recorded directly on the blockchain. We do not have access to, nor do we store, your private keys, seed phrases, or wallet credentials.
            </Text>
          </Stack>

          <Stack gap="md">
            <Title order={3} c="white">2. On-Chain Information</Title>
            <Text c="dimmed" lh={1.6}>
              Public blockchain addresses, transaction hashes, token transfers, and smart contract event logs are public and immutable. By interacting with the DScroll smart contracts, you acknowledge that your transaction history is publicly accessible.
            </Text>
          </Stack>

          <Stack gap="md">
            <Title order={3} c="white">3. Local Storage</Title>
            <Text c="dimmed" lh={1.6}>
              We may use browser local storage or session storage solely to store configuration preferences, such as your selected UI theme (Dark/Light mode) or recent search history. This data remains entirely on your local machine.
            </Text>
          </Stack>

          <Stack gap="md">
            <Title order={3} c="white">4. No Sale or Marketing</Title>
            <Text c="dimmed" lh={1.6}>
              We will <strong>never</strong> sell, rent, or lease your data to third-party advertisers or data brokers.
            </Text>
          </Stack>

          <Stack gap="md">
            <Title order={3} c="white">5. Security of Your Assets</Title>
            <Text c="dimmed" lh={1.6}>
              You are entirely responsible for the security of your cryptographic wallets and private keys. We cannot recover lost credentials, restore access to assets, or reverse blockchain transactions.
            </Text>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}
