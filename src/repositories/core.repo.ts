import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  QueryCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";
import crypto from "crypto";
const client = new DynamoDBClient({});
const doc = DynamoDBDocumentClient.from(client);

const TABLE = process.env.core_TABLE || "newbank-cores-dev";

class coreRepository {
async getListProduct() {
  const cmd = new ScanCommand({
    TableName: TABLE,
  });

  const result = await doc.send(cmd);
  return result.Items;

}
async create(user: { email: string; password: string }) {
  const newUser = {
    coreId: crypto.randomUUID(),   // PK REAL
    email: user.email,
    password: user.password,
    createdAt: new Date().toISOString(),
  };

  await doc.send(
    new PutCommand({
      TableName: TABLE,
      Item: newUser,
    })
  );

  return newUser;
}

}

export default new coreRepository();
