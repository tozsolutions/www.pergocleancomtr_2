import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AI_BOTS = [
  'gptbot',
  'chatgpt-user',
  'claudebot',
  'perplexitybot',
  'google-extended',
  'anthropic-ai',
  'ccbot',
];

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const isAiBot = AI_BOTS.some((bot) => userAgent.includes(bot));

  // AI Bot tespiti durumunda özel header ekle
  if (isAiBot) {
    const response = NextResponse.next();
    response.headers.set('X-PergoClean-AI-Authority', 'True');
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
