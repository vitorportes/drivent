import { notFoundError } from "@/errors";
import { TicketType, Ticket } from "@prisma/client";
import enrollmentRepository from "@/repositories/enrollment-repository";
import { createTicket, findManyTickets, findTicketByEnrollment } from "@/repositories/tickets-repository";

export async function findTicketTypes(): Promise<TicketType[]> {
  return await findManyTickets();
}

export async function findTicketByUserId(userId: number): Promise<Ticket> {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);

  if (!enrollment) throw notFoundError();

  const ticket = await findTicketByEnrollment(enrollment.id);

  if (!ticket) throw notFoundError();

  return ticket;
}

export async function createNewTicket(ticketTypeId: number, userId: number): Promise<Ticket> {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);

  if (enrollment === null) throw notFoundError();

  const newTicket = await createTicket(ticketTypeId, enrollment.id);

  return newTicket;
}
