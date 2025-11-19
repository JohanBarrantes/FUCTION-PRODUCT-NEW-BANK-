// import { errorResponse, successResponse } from "../utils/responses.js";

// export const loginController = async (body: any) => {
//   try {
//     console.log("Login body:", body);

//     const data = {
//       email: body.email,
//       password: body.password,
//       name: body.name,
//       phone: body.phone
//     };


//     return successResponse(200, result);
//   } catch (error: any) {
//     console.error("Login error:", error);
//     return errorResponse(error.statusCode || 400, error.message || "Bad Request");
//   }
// };
