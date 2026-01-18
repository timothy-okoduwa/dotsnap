# DotSnap

Mask your .env files securely across machines. Built for environment backups and best practices.

## Project Structure

```
dotsnap/
├── app/
│   ├── layout.tsx          # Root layout with global styles
│   ├── page.tsx            # Home page with navigation logic
│   ├── globals.css         # Global CSS and Tailwind imports
│   └── tool/
│       └── page.tsx        # Tool page with masking functionality
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # App header with navigation
│   │   └── Footer.tsx      # App footer
│   ├── home/
│   │   ├── Hero.tsx        # Hero section with CTA
│   │   ├── InstallMethods.tsx  # CLI, NPX, and Web UI options
│   │   ├── Features.tsx    # Feature grid
│   │   └── Security.tsx    # Security guarantees section
│   ├── tool/
│   │   ├── ToolHeader.tsx  # Tool page header
│   │   ├── Controls.tsx    # Masking options controls
│   │   ├── EnvInput.tsx    # Input textarea with stats
│   │   ├── EnvOutput.tsx   # Output textarea with actions
│   │   └── StatsBar.tsx    # Stats display component
│   ├── ui/
│   │   └── Toast.tsx       # Toast notification component
│   └── shared/
│       └── Button.tsx      # Reusable button component
├── lib/
│   ├── mask.ts            # Masking logic
│   ├── stats.ts           # Stats calculation
│   ├── risky.ts           # Risky key detection
│   └── share.ts           # Share link generation
└── styles/
    └── animations.css     # Animation keyframes
```

## Key Features

- **Client-Side Processing**: All masking happens locally
- **Smart Detection**: Automatically identifies risky keys
- **Format Preserving**: Maintains structure and comments
- **Share Safely**: Generate shareable links without exposing secrets
- **Multiple Options**: CLI, NPX, or Web UI

## Development

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

## Architecture Notes

### State Management

- Uses React hooks (`useState`, `useEffect`) for local state
- LocalStorage for persisting input content
- No global state management needed

### Styling

- Tailwind CSS for utility-first styling
- Custom animations in `styles/animations.css`
- Dark theme with emerald accent color
- Responsive grid layouts

### Type Safety

- Full TypeScript coverage
- Interface definitions for all props
- Strict type checking enabled

### Code Organization

- **Components**: Organized by feature (layout, home, tool)
- **Lib**: Pure functions for business logic
- **App**: Next.js App Router pages
- **Separation of Concerns**: UI components don't contain business logic

### Performance

- Client-side only (no SSR needed)
- Minimal re-renders
- Efficient string processing
- No external API calls

## License

MIT
