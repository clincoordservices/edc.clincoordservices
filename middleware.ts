import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/verifyemail'|| path === '/' || path === '/verifyaccount' 
 
  const token = request.cookies.get('auth-cookie-login-user')?.value || ''

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard/user', request.nextUrl))
  }

  if ((!isPublicPath) && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
}

export const config = {
  matcher: [
    '/verifyaccount',
    '/dashboard/user',
    '/dashboard/user/users',
    '/dashboard/admin',
    '/dashboard/admin/users',
  ]
} 