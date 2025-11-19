
import coreRepo from "../repositories/core.repo.js";
import { LoginPayload, RegisterPayload } from "../types/core.types.js";
import { signJWT } from "../utils/jwt.js";
import bcrypt from "bcryptjs";

class coreService {

  async listProduct() {
    const listProduct = await coreRepo.getListProduct();

    if (!listProduct) {
      throw { statusCode: 404, message: "User not found" };
    }

    return { data:{listProduct }};
  }
}

export default new coreService();
