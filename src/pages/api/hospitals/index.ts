import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { hospitalValidationSchema } from 'validationSchema/hospitals';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getHospitals();
    case 'POST':
      return createHospital();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getHospitals() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.hospital
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'hospital'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createHospital() {
    await hospitalValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.appointment?.length > 0) {
      const create_appointment = body.appointment;
      body.appointment = {
        create: create_appointment,
      };
    } else {
      delete body.appointment;
    }
    if (body?.medicine?.length > 0) {
      const create_medicine = body.medicine;
      body.medicine = {
        create: create_medicine,
      };
    } else {
      delete body.medicine;
    }
    if (body?.patient?.length > 0) {
      const create_patient = body.patient;
      body.patient = {
        create: create_patient,
      };
    } else {
      delete body.patient;
    }
    if (body?.test_report?.length > 0) {
      const create_test_report = body.test_report;
      body.test_report = {
        create: create_test_report,
      };
    } else {
      delete body.test_report;
    }
    const data = await prisma.hospital.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
