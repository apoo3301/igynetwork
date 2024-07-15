export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/dashboard/:path*"], // Use ":path*" to include all sub-routes under "/dashboard"
}
