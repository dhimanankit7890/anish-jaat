const CORRECT_PASSWORD = '7890'
const COOKIE_NAME = 'site_auth'
const COOKIE_VALUE = 'granted'

const loginPage = `<!DOCTYPE html>
<html lang="ur">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Private Site</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0f0f0f;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    }

    .card {
      background: #1a1a1a;
      border: 1px solid #2a2a2a;
      border-radius: 16px;
      padding: 48px 40px;
      width: 100%;
      max-width: 380px;
      box-shadow: 0 25px 60px rgba(0,0,0,0.5);
    }

    .lock-icon {
      width: 56px;
      height: 56px;
      margin: 0 auto 24px;
      display: block;
    }

    h1 {
      color: #ffffff;
      font-size: 22px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 8px;
      letter-spacing: -0.3px;
    }

    p {
      color: #666;
      font-size: 14px;
      text-align: center;
      margin-bottom: 32px;
    }

    label {
      display: block;
      color: #888;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-bottom: 8px;
    }

    input[type="password"] {
      width: 100%;
      padding: 13px 16px;
      background: #0f0f0f;
      border: 1px solid #333;
      border-radius: 10px;
      color: #fff;
      font-size: 16px;
      outline: none;
      transition: border-color 0.2s;
      letter-spacing: 4px;
    }

    input[type="password"]::placeholder {
      letter-spacing: 0;
      color: #444;
    }

    input[type="password"]:focus {
      border-color: #555;
    }

    button {
      width: 100%;
      padding: 13px;
      margin-top: 16px;
      background: #ffffff;
      color: #000000;
      border: none;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    button:hover { opacity: 0.88; }
    button:active { opacity: 0.75; }

    .error {
      margin-top: 14px;
      padding: 10px 14px;
      background: rgba(239,68,68,0.12);
      border: 1px solid rgba(239,68,68,0.3);
      border-radius: 8px;
      color: #f87171;
      font-size: 13px;
      text-align: center;
      display: none;
    }

    .error.visible { display: block; }
  </style>
</head>
<body>
  <div class="card">
    <svg class="lock-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="11" width="18" height="12" rx="2" fill="#333" stroke="#555" stroke-width="1.5"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#888" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="12" cy="16" r="1.5" fill="#888"/>
    </svg>

    <h1>Private Site</h1>
    <p>Yahan daakhil honay k liye password zarori hai</p>

    <form method="POST" action="/__auth">
      <label for="pw">Password</label>
      <input
        type="password"
        id="pw"
        name="password"
        placeholder="Password darj karein"
        autocomplete="current-password"
        autofocus
      />
      __ERROR__
      <button type="submit">Daakhil Hon &rarr;</button>
    </form>
  </div>
</body>
</html>`

export default async (req, context) => {
  const url = new URL(req.url)

  // Handle POST to /__auth — check submitted password
  if (req.method === 'POST' && url.pathname === '/__auth') {
    const formData = await req.formData()
    const submitted = formData.get('password') || ''

    if (submitted === CORRECT_PASSWORD) {
      const redirectTo = url.searchParams.get('next') || '/'
      return new Response(null, {
        status: 302,
        headers: {
          Location: redirectTo,
          'Set-Cookie': `${COOKIE_NAME}=${COOKIE_VALUE}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`,
        },
      })
    }

    // Wrong password — show form with error
    const page = loginPage.replace(
      '__ERROR__',
      '<div class="error visible">Galat password. Dobara koshish karein.</div>',
    )
    return new Response(page, {
      status: 401,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  }

  // Skip auth check for the auth endpoint itself
  if (url.pathname === '/__auth') {
    return
  }

  // Check if user already has the auth cookie
  const authCookie = context.cookies.get(COOKIE_NAME)
  if (authCookie === COOKIE_VALUE) {
    return // authenticated — pass through
  }

  // Not authenticated — show login page
  const page = loginPage.replace('__ERROR__', '')
  return new Response(page, {
    status: 401,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  })
}

export const config = {
  path: '/*',
}
