export interface IStatusChangeModel {
    statusChange: boolean;
    value: boolean;
}

export class StatusChangeModel implements IStatusChangeModel {
    statusChange = false;
    value = false;
}
