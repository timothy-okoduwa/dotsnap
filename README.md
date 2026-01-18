# DotSnap

Mask your .env files securely across machines. Built for environment backups and best practices.

**🌐 Web UI** : [dotsnap.netlify.app](https://dotsnap.netlify.app/)

**📦 NPM Package** : [npmjs.com/package/dotsnap](https://www.npmjs.com/package/dotsnap)

**⭐ GitHub** : [github.com/timothy-okoduwa/dotsnap](https://github.com/timothy-okoduwa/dotsnap)

---

## 🚀 Quick Start

DotSnap offers three ways to mask your secrets:

### 1. **Web UI** (No Installation)

Visit [dotsnap.netlify.app/tool](https://dotsnap.netlify.app/tool) and paste your `.env` file directly in the browser.

### 2. **NPM Global Install**

```bash
npm install -g dotsnap
dotsnap mask
```

### 3. **NPX** (One-time Use)

```bash
npx dotsnap mask
```

---

## 📦 Installation

### Global Installation (Recommended for Regular Use)

```bash
npm install -g dotsnap
```

**Verify installation:**

```bash
dotsnap --version
```

### NPX (No Installation Required)

Perfect for one-off usage or CI/CD pipelines:

```bash
npx dotsnap mask
```

---

## 🎯 Usage

### Basic Masking

Mask your `.env` file with default settings:

```bash
dotsnap mask
```

**What happens:**

- ✅ Reads `.env` from current directory
- ✅ Masks all secret values (shows first 3 and last 4 characters)
- ✅ Saves output to `.env.safe`
- ✅ Highlights risky keys (API_KEY, SECRET, TOKEN, etc.)

**Example Output:**

```
✓ Found .env file
✓ Masked 8 secrets
✓ Saved to .env.safe

ℹ You can now safely share .env.safe
```

---

### Custom Input/Output Files

Specify custom input and output files:

```bash
dotsnap mask -i .env.production -o .env.production.safe
```

**Use cases:**

- Multiple environment files (`.env.dev`, `.env.staging`, `.env.prod`)
- Custom naming conventions
- Backup different configurations

---

### Fully Hide Values

Completely mask all values with `****`:

```bash
dotsnap mask --fully-hide
```

**Before:**

```env
API_KEY=sk-live-1234567890abcdef
```

**After (default):**

```env
API_KEY=sk-****890abcdef
```

**After (--fully-hide):**

```env
API_KEY=****
```

---

### Hide First/Last Characters

Don't show any partial values:

```bash
dotsnap mask --no-first-last
```

**Output:**

```env
API_KEY=********************
DB_PASSWORD=***************
```

---

### Open Web UI

Launch the web interface in your browser:

```bash
dotsnap web
```

This opens [dotsnap.netlify.app/tool](https://dotsnap.netlify.app/tool) where you can:

- Paste and mask content interactively
- Copy or download masked files
- Generate shareable links
- Adjust masking options visually

---

## 📋 Command Reference

### `dotsnap mask`

Mask secrets in your `.env` file.

**Options:**

| Option            | Alias | Description                            | Default          |
| ----------------- | ----- | -------------------------------------- | ---------------- |
| `--input <file>`  | `-i`  | Input .env file path                   | `.env`           |
| `--output <file>` | `-o`  | Output file path                       | `.env.safe`      |
| `--fully-hide`    |       | Hide all values completely with `****` | `false`          |
| `--no-first-last` |       | Don't show first/last characters       | Shows by default |

**Examples:**

```bash
# Basic usage
dotsnap mask

# Custom input file
dotsnap mask -i .env.local

# Custom output file
dotsnap mask -o .env.masked

# Both custom
dotsnap mask -i .env.production -o .env.prod.safe

# Fully hide all values
dotsnap mask --fully-hide

# Hide first/last chars
dotsnap mask --no-first-last

# Combine options
dotsnap mask -i .env.staging -o .env.staging.safe --fully-hide
```

---

### `dotsnap web`

Open the web UI in your default browser.

**Options:**

| Option          | Alias | Description           | Default |
| --------------- | ----- | --------------------- | ------- |
| `--port <port>` | `-p`  | Port (future feature) | `3000`  |

**Example:**

```bash
dotsnap web
```

---

### `dotsnap --version`

Display the current version:

```bash
dotsnap --version
# Output: 1.0.0
```

---

### `dotsnap --help`

Show help information:

```bash
dotsnap --help
```

---

## 💡 Real-World Examples

### Example 1: Mask Production Secrets

```bash
# You have .env.production
dotsnap mask -i .env.production -o .env.production.safe

# Share .env.production.safe in Slack/Docs
# Original .env.production stays private
```

---

### Example 2: CI/CD Pipeline

Add to your GitHub Actions workflow:

```yaml
- name: Mask secrets for documentation
  run: |
    npx dotsnap mask -i .env.example -o docs/.env.safe
    git add docs/.env.safe
```

---

### Example 3: Team Onboarding

```bash
# Create a safe version for new developers
dotsnap mask -i .env -o .env.template --fully-hide

# New devs see structure but not real values:
# DATABASE_URL=****
# API_KEY=****
```

---

### Example 4: Screenshot/Documentation

```bash
# Before taking a screenshot
dotsnap mask

# Share .env.safe in:
# - Wiki pages
# - README files
# - Stack Overflow questions
# - Support tickets
```

---

## 🔒 Security Features

### What's Protected

✅ **100% Local Processing** - No data leaves your machine

✅ **No Network Requests** - Works completely offline

✅ **No Backend** - No servers, no databases, no logging

✅ **Open Source** - Audit the code yourself

✅ **Smart Detection** - Automatically identifies risky keys:

- `*_KEY`
- `*_SECRET`
- `*_TOKEN`
- `*_PASSWORD`
- `*_AUTH`
- `*_PRIVATE`
- `*_CREDENTIAL`

### How Masking Works

**Default Mode** (Partial masking):

```env
# Original
DATABASE_URL=postgresql://user:myP@ssw0rd@localhost:5432/db

# Masked (shows first 3 + last 4 chars)
DATABASE_URL=pos****:/db
```

**Fully Hide Mode** :

```env
# Original
DATABASE_URL=postgresql://user:myP@ssw0rd@localhost:5432/db

# Masked
DATABASE_URL=****
```

### What's Preserved

✅ Comments remain intact

✅ Empty lines maintained

✅ File structure preserved

✅ Variable names visible

✅ Non-secret values unchanged (e.g., `NODE_ENV=production`)

---

## 🌐 Web UI Features

The web interface at [dotsnap.netlify.app/tool](https://dotsnap.netlify.app/tool) provides:

### Interactive Controls

- ☑️ Show first/last characters
- ☑️ Fully hide values
- ☑️ Highlight risky keys

### Actions

- 📋 **Copy** - Copy masked output to clipboard
- 💾 **Download** - Download as `.env.safe`
- 🔗 **Share Link** - Generate shareable URL with your content

### Real-time Preview

- See masked output instantly
- Stats: secret count, line count
- Risky key highlighting

---

## 🛠️ Development

### Web Application Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### CLI Development

```bash
# Navigate to CLI directory
cd cli

# Install CLI dependencies
npm install

# Link for local testing
npm link

# Test locally
dotsnap mask

# Unlink when done
npm unlink -g dotsnap
```

---

## 📂 What Gets Masked?

DotSnap masks environment variables based on patterns:

### Always Masked

Variables containing these keywords:

- `KEY` - API_KEY, STRIPE_KEY, etc.
- `SECRET` - JWT_SECRET, APP_SECRET, etc.
- `TOKEN` - AUTH_TOKEN, GITHUB_TOKEN, etc.
- `PASSWORD` - DB_PASSWORD, ADMIN_PASSWORD, etc.
- `PRIVATE` - PRIVATE_KEY, etc.
- `AUTH` - AUTH_HEADER, etc.
- `CREDENTIAL` - AWS_CREDENTIAL, etc.

### Example `.env` File

**Before masking:**

```env
# Application
NODE_ENV=production
APP_NAME=MyApp
APP_URL=https://myapp.com

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/db
DB_PASSWORD=superSecretPassword123

# API Keys
STRIPE_SECRET_KEY=sk_live_51ABC123xyz789
OPENAI_API_KEY=sk-proj-1234567890abcdef
JWT_SECRET=my-super-secret-jwt-token

# AWS
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLE

# Public (not masked)
NEXT_PUBLIC_APP_URL=https://myapp.com
```

**After masking (default):**

```env
# Application
NODE_ENV=production
APP_NAME=MyApp
APP_URL=https://myapp.com

# Database
DATABASE_URL=pos****5432/db
DB_PASSWORD=sup****d123

# API Keys
STRIPE_SECRET_KEY=sk_****x789
OPENAI_API_KEY=sk-****cdef
JWT_SECRET=my-****oken

# AWS
AWS_ACCESS_KEY_ID=AKI****MPLE
AWS_SECRET_ACCESS_KEY=wJa****MPLE

# Public (not masked)
NEXT_PUBLIC_APP_URL=https://myapp.com
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

MIT License - feel free to use this in your projects!

---

## 🔗 Links

- **Website** : [dotsnap.netlify.app](https://dotsnap.netlify.app/)
- **NPM** : [npmjs.com/package/dotsnap](https://www.npmjs.com/package/dotsnap)
- **GitHub** : [github.com/timothy-okoduwa/dotsnap](https://github.com/timothy-okoduwa/dotsnap)
- **Issues** : [github.com/timothy-okoduwa/dotsnap/issues](https://github.com/timothy-okoduwa/dotsnap/issues)

---

## ❓ FAQ

**Q: Is my data sent to a server?**

A: No! All masking happens 100% locally on your machine. No network requests are made.

**Q: Can I recover the original values from masked output?**

A: No, masking is one-way. Keep your original `.env` file safe and only share the `.env.safe` version.

**Q: What if I want to share the structure but hide everything?**

A: Use `dotsnap mask --fully-hide` to replace all values with `****`.

**Q: Does this work with other file formats?**

A: Currently optimized for `.env` files, but works with any `KEY=VALUE` format.

**Q: Can I use this in CI/CD?**

A: Yes! Use `npx dotsnap mask` in your pipelines. No installation required.

---

Made with ❤️ for developers who take security seriously.
