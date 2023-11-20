import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

   const isPublicPath =
    path === '/login' ||
    path === '/verifyemail' ||
    path === '/' ||
    path === '/verifyaccount' ||
    path === '/forgetpassword';

  const tokenUser = request.cookies.get(process.env.NEXT_PUBLIC_COOKIE_USER as string)?.value || '';
  const tokenAdmin = request.cookies.get(process.env.NEXT_PUBLIC_COOKIE_ADMIN as string)?.value || '';

  if (isPublicPath && tokenUser) {
    return NextResponse.redirect(new URL('/dashboard/user', request.nextUrl));
  }
  if (isPublicPath && tokenAdmin) {
    return NextResponse.redirect(new URL('/dashboard/admin', request.nextUrl));
  }

  if (!isPublicPath && !tokenUser) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
  
  if (!isPublicPath && !tokenUser) {
    return NextResponse.redirect(new URL('/dashboard/admin/login', request.nextUrl));
  }

    const isDashboardAdminRoute = path.startsWith('/dashboard/admin');
  if (isDashboardAdminRoute && tokenUser) {
    return NextResponse.redirect(new URL('/dashboard/user', request.nextUrl));
  }
    const isDashboardUserRoute = path.startsWith('/dashboard/user');
  if (isDashboardUserRoute && tokenAdmin) {
    return NextResponse.redirect(new URL('/dashboard/admin', request.nextUrl));
  }

  // if (tokenAdmin && path.startsWith('/dashboard/admin')) {
  //   return NextResponse.next();
  // }
}

export const config = {
  matcher: [
    '/login',
    '/',
    '/verifyemail',
    '/forgetpassword',
    '/verifyaccount',
    '/dashboard/user',
    '/dashboard/user/:path*',

  ],
};

// '/dashboard/admin/((?!login).*)',
// '/dashboard/admin'