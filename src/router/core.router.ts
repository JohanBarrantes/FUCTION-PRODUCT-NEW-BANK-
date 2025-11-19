import { APIGatewayProxyEventV2, APIGatewayProxyResult } from "aws-lambda";
import { successResponse, errorResponse } from "../utils/responses.js";
import { productController } from "../controllers/product.controller.js";
import { getProductController } from "../controllers/getProduct.controller.js";

const router = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResult> => {
  console.log("core router event:", event);

  const method = event.requestContext.http.method;
  const path = event.rawPath;
  if (method === "GET" && path === "/product") {
    try {
      const result = await productController();
      return successResponse(200, result);
    } catch (e) {
      console.error("JSON parse error:", e);
      return errorResponse(400, "Invalid JSON");
    }
  }else if(method === "POST" && path === "/createProduct"){
    if (!event.body) return errorResponse(400, "Missing body")
try {
  const body= JSON.parse(event.body)
      const result = await productController(body);
      return successResponse(200, result);
    } catch (e) {
      console.error("JSON parse error:", e);
      return errorResponse(400, "Invalid JSON");
    }
  }else if(method === "POST" && path === "/getProductbyClient"){
    if (!event.body) return errorResponse(400, "Missing body")
try {
  const body= JSON.parse(event.body)
  console.log(body)
      const result = await getProductController(body.customerId);
      return successResponse(200, result);
    } catch (e) {
      console.error("JSON parse error:", e);
      return errorResponse(400, "Invalid JSON");
    }
  }
  return errorResponse(404, "Route not found");
};

export default router;
