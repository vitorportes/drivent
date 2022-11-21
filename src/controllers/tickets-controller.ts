import { AuthenticatedRequest } from "@/middlewares";
import { createNewTicket, findTicketByUserId, findTicketTypes } from "@/services/tickets-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function findTicketsTypes(req: AuthenticatedRequest, res: Response) {
  try {
    const ticketTypes = await findTicketTypes();
    return res.status(httpStatus.OK).send(ticketTypes);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function findTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const ticket = await findTicketByUserId(userId);

    return res.status(httpStatus.OK).send(ticket);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function createTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { ticketTypeId } = req.body;

  if (!ticketTypeId) return res.sendStatus(httpStatus.BAD_REQUEST);

  try {
    const newTicket = await createNewTicket(ticketTypeId, userId);

    return res.status(httpStatus.CREATED).send(newTicket);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
