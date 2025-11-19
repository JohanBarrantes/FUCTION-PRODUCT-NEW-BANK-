import { errorResponse, successResponse } from "../utils/responses.js";
import coreService from "../services/core.service.js";
import { Product } from "../types/core.types.js";

export const getProductController = async (userId: string) => {
  try {
    console.log("getProductController")
    const result = await coreService.listProductsByUser(userId);

    return result;
  } catch (error: any) {
    console.error("Login error:", error);
    return errorResponse(error.statusCode || 400, error.message || "Bad Request");
  }
};
