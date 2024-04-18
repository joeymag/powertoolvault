import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
  publicRoutes: ["/",  "/api/webhooks/clerk", "/signup" ],
  

  
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  
};