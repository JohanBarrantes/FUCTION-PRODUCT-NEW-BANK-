import coreRepo from "../repositories/core.repo.js";
import { Product } from "../types/core.types.js";


class coreService {

  async listProduct() {
    console.log("Product.controller.listProduct")
    const listProduct = await coreRepo.getListProduct();
    if (!listProduct) {
      throw { statusCode: 404, message: "list product not found" };
    }

    return { data:{listProduct }};
  }

    async createProduct(body:Product) {
    console.log("Product.controller.createProduct")
    const listProduct = await coreRepo.createProduct(body);

    return { data:{listProduct }};
  }
    async listProductsByUser(userId: string) {
    console.log("Product.controller.listProduct")
    return await coreRepo.getProductsByUser(userId);
  }
}

export default new coreService();
