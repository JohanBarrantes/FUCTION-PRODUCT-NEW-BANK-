import { errorResponse, successResponse } from "../utils/responses.js";
import coreService from "../services/core.service.js";

export const productController = async () => {
  try {
    console.log("ProductController")
    const result = await coreService.listProduct();

    return successResponse(200, result);
  } catch (error: any) {
    console.error("Login error:", error);
    return errorResponse(error.statusCode || 400, error.message || "Bad Request");
  }
};
