import {betterAuth} from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {prisma} from "./prisma";
import { admin } from "better-auth/plugins/admin";

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true
    },
    database: prismaAdapter(prisma, {
        provider: 'sqlite'
    }),
    plugins: [
        admin()
    ]
})