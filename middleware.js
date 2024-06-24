import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes: ['/', '/register',"/api/users"]
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};