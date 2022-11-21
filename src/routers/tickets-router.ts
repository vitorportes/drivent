import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { findTicketsTypes, findTicket, createTicket } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter.all("/*", authenticateToken);
ticketsRouter.get("/types", findTicketsTypes);
ticketsRouter.get("/", findTicket);
ticketsRouter.post("/", createTicket);

export { ticketsRouter };
