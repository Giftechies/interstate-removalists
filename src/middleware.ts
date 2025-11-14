import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define public routes
  const publicPaths = ['/login']
  const isPublicPath = publicPaths.includes(path)

  // Extract token correctly
  const token = request.cookies.get('authToken')?.value

  // Logged-in user visiting login → redirect to home
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Non-public route without token → redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Always continue if no redirects were applied
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/login',
    '/profile/:path*',
  ],
}
