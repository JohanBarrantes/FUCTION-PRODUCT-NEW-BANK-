import { APIGatewayProxyEventV2, APIGatewayProxyResult } from "aws-lambda";
import { successResponse, errorResponse } from "../utils/responses.js";
import { productController } from "../controllers/product.controller.js";

const router = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResult> => {
  console.log("core router event:", event);

  const method = event.requestContext.http.method;
  const path = event.rawPath;
if (!event.body) return errorResponse(400, "Missing body")
  if (method === "GET" && path === "/product") {
    
    try {
      const result =productController();
      return successResponse(200, result);
    } catch (e) {
      console.error("JSON parse error:", e);
      return errorResponse(400, "Invalid JSON");
    }
  }else if(method === "POST" && path === "/sessionUser"){
try {
    } catch (e) {
      console.error("JSON parse error:", e);
      return errorResponse(400, "Invalid JSON");
    }
  }
  return errorResponse(404, "Route not found");
};

export default router;
