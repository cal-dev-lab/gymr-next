import './globals.css'

export const metadata = {
  title: 'Gymr',
  description: 'Track your workouts with Gymr.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
