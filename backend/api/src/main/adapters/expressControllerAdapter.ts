import { Controller } from "@/http/interfaces";
import { Request, Response } from "express";

export const adaptExpressRoute =
  (controller: Controller) => async (req: Request, res: Response) => {
    try {
      const result = await controller.handle({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      res.status(result.status).send(result.data);
    } catch (error) {
      // TODO better error handling...
      res.status(500).send({ message: "Internal server error" });
    }
  };
