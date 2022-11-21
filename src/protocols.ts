import { Payment, Ticket, TicketType } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type ViaCEPAddress = {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export type AddressEnrollment = {
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  error?: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type getTicketResult = Ticket & { TicketType: TicketType };

export type createTicketResult = Ticket & { TicketType: TicketType };

export type CardData = {
  issuer: string;
  number: number;
  name: string;
  expirationDate: Date;
  cvv: number;
};

export type CreatePayment = Omit <Payment, "id" | "createdAt" | "updatedAt">;
