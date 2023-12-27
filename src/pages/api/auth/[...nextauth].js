import NextAuth from "next-auth/next";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import createMongoConnection from "@/utils/mongodb";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    adapter: MongoDBAdapter(createMongoConnection),
    secret: process.env.NEXT_AUTH_SECRET,
    callbacks: {
        // This allows id to be accessed from session state
        session: async ({ session, user }) => {
          if (session?.user) {
            session.user.id = user.id;
          }
          return session;
        },
    },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_APP_CLIENT_ID,
            clientSecret: process.env.GITHUB_APP_CLIENT_SECRET
        })
    ]
};

export default NextAuth(authOptions);