# DotSnap CLI

Mask your .env files securely - from the command line.

## Installation

### Global Installation

```bash
npm install -g dotsnap
```

### NPX (No Installation)

```bash
npx dotsnap mask
```

## Usage

### Mask your .env file

```bash
dotsnap mask
```

This will:

- Read your `.env` file
- Mask all secret values
- Save to `.env.safe`

### Custom input/output

```bash
dotsnap mask -i .env.production -o .env.production.safe
```

### Fully hide values

```bash
dotsnap mask --fully-hide
```

### Open Web UI

```bash
dotsnap web
```

## Options

### `dotsnap mask`

| Option                | Description                 | Default          |
| --------------------- | --------------------------- | ---------------- |
| `-i, --input <file>`  | Input .env file             | `.env`           |
| `-o, --output <file>` | Output file                 | `.env.safe`      |
| `--fully-hide`        | Hide all values completely  | `false`          |
| `--no-first-last`     | Don't show first/last chars | Shows by default |

### `dotsnap web`

| Option              | Description    | Default |
| ------------------- | -------------- | ------- |
| `-p, --port <port>` | Port to run on | `3000`  |

## Examples

```bash
# Basic usage
dotsnap mask

# Custom files
dotsnap mask -i .env.prod -o .env.prod.safe

# Fully hide all values
dotsnap mask --fully-hide

# Open web UI
dotsnap web
```

## Security

- 100% local processing
- No network requests
- No data collection
- Open source

## License

MIT

```

# cli/.npmignore
```

node_modules/
\*.log
.DS_Store
test/
.git/
.github/
