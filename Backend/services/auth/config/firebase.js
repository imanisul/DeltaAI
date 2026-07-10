import  { initializeApp } from "firebase-admin";

import serviceAccount from "../serviceAccountKey.json" with {type:"json"};
import { cert } from "firebase-admin/app";

export const app = initializeApp({
  credential:cert(serviceAccount)
});
