# Handbook repository instructions

Follow the shared project contract in [`../AGENTS.md`](../AGENTS.md).

This repository is the only documentation source for Zero Five. Put
architecture, decisions, concepts, runbooks, deployment procedures,
troubleshooting, learning notes, and security explanations under
`content/docs/`.

Before editing:

1. Inspect this repository's Git diff.
2. Read the target page and nearby navigation metadata.
3. Inspect the relevant operational source in `../zero-five-infra/`.
4. Distinguish verified current state from proposed or unverified work.

Explain why, how, and trade-offs without copying full configuration files.
Include inspection, failure modes, security implications, and rollback when
they are relevant. Never include secrets or unreviewed secret-bearing output.

After editing, run the smallest relevant checks, normally:

```bash
npm run types:check
npm run lint
git diff --check
```

## Current laptop ownership

The owner transferred the former MSI laptop addresses and active roles to Razer
on 2026-10-04. Use `razer`, `wireguard/razer.conf.example`, and
`settings/razer/identity.json` (in infra) for current references. `10.40.0.12`
belongs to Razer; `192.168.1.110` is its inherited LAN reservation, with live
activation tracked separately. Preserve MSI names only in explicitly historical
records, retained archive paths and backup identifiers. Relabeling ownership
does not prove that a historical service/model or DHCP reservation is deployed.
