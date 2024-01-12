import { TworkHistoryTemplate } from '../types';

class WorkHistoryModel implements TworkHistoryTemplate {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    duties: string[];

    constructor(title: string, company: string, location: string, startDate: string, endDate: string, duties: string[]) {
        this.title = title;
        this.company = company;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
        this.duties = duties;
    }
}

export default WorkHistoryModel;