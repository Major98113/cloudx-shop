import { injectable } from 'inversify';
import 'reflect-metadata';

import { serviceLogger as log } from '../utils/logger.helpers';

@injectable()
class AnalyticsService{
    constructor( ) {}

    @log
    public async saveForAnalytics( message: string ): Promise<void> {}

}

export { AnalyticsService };