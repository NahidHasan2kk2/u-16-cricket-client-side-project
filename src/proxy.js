// import { NextResponse } from "next/server";
// import { auth } from "./lib/auth";
// import { headers } from "next/headers";



// const proxy = async (request) => {
//  const session = await auth.api.getSession({
//   headers: await headers()
//  })

//  if (session) {
//   return NextResponse.next();
//  }
//  return NextResponse.redirect(new URL('/auth/login', request.url))


// }


// export const config = {
//  matcher: ["/details/:path*"],
// }

// export default proxy;