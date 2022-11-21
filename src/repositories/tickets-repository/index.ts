import { prisma } from "@/config";
import { TicketType, Ticket } from "@prisma/client";

async function findManyTickets(): Promise<TicketType[]> {
  return await prisma.ticketType.findMany();
}

async function findTicketByEnrollment(enrollmentId: number): Promise<Ticket> {
  return await prisma.ticket.findFirst({
    where: { enrollmentId },
    include: {
      TicketType: true,
    },
  });
}

async function createTicket(ticketTypeId: number, enrollmentId: number): Promise<Ticket> {
  return await prisma.ticket.create({
    data: {
      status: "RESERVED",
      ticketTypeId: ticketTypeId,
      enrollmentId: enrollmentId,
    },
    include: {
      TicketType: true,
    },
  });
}

export { findManyTickets, findTicketByEnrollment, createTicket };
