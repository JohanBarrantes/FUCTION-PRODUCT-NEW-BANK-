
import coreRepo from "../repositories/core.repo.js";

class coreService {

  async listProduct() {
    const listProduct = await coreRepo.getListProduct();

    if (!listProduct) {
      throw { statusCode: 404, message: "list product not found" };
    }

    return { data:{listProduct }};
  }
}

export default new coreService();
