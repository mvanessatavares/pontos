import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";

export const authenticateToken = () => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const authHeaders = request.headers.authorization;

    if (!authHeaders) {
      return response.status(401).json({ error: "Token is missing" });
    }

    const [, token] = authHeaders.split(" ");

    try {
      verify(token, process.env.JWT_SECRET);

      const { sub } = decode(token);

      request.userId = sub.toString();

      return next();
    } catch (err) {
      return response.status(401).json({
        error: true,
        message: "Unauthorized",
      });
    }
  };
};
