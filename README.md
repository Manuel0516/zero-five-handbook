# zero-five-handbook

The single documentation source for the Zero Five infrastructure and systems
engineering project.

This handbook explains architecture, decisions, protocols, services, security,
operations, troubleshooting, and the concepts learned while building the
system. Operational configuration belongs in the sibling
[`zero-five-infra`](../zero-five-infra/README.md); pages here explain it without
becoming copies of it.

Documentation should make clear:

- why a design exists;
- how the relevant subsystem works;
- important trade-offs and security boundaries;
- how to inspect and validate it;
- common failure modes and safe rollback.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Validation

```bash
npm run types:check
npm run lint
npm run build
```

Documentation lives in [`content/docs`](content/docs).
