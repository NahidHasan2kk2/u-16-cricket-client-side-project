import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db('crickets');


export const auth = betterAuth({
 emailAndPassword: {
  enabled: true,
 },
 database: mongodbAdapter(db, {
  // Optional: if you don't provide a client, database transactions won't be enabled.
  client
 }),
 socialProviders: {
  google: {
   clientId: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_CLIENT_SECRET
  },
 },

});