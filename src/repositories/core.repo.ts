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

const TABLE = "list-product";

class coreRepository {
async getListProduct() {
      console.log("PPor aqui")

  try {
    const cmd = new ScanCommand({
      TableName: TABLE,
    });
    const result = await doc.send(cmd);

    console.log("Core.repo result:", result);

    if (!result.Items || result.Items.length === 0) {
      console.warn("⚠️ No hay productos en DynamoDB");
      return [];
    }

    return result.Items;

  } catch (error: any) {
    console.error("❌ Error en getListProduct()", error);

    if (error.name === "ResourceNotFoundException") {
      console.error("❌ La tabla no existe o está mal nombrada:", TABLE);
    }

    return []; 
  }
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
