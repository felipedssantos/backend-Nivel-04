import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMothAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.body;

    const listProviderMothAvailability = container.resolve(
      ListProviderMothAvailabilityService,
    );

    const availability = await listProviderMothAvailability.execute({
      provider_id,
      month,
      year,
    });

    return response.json(availability);
  }
}
