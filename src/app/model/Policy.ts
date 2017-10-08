export class HotelPolicy {
    OptionId: string;
    Currency: string;
    TotalPrice: string;
    CancellationDeadline: string;
    Policies: Array<Policy>;
    Alerts: Array<Alert>;
    Restrictions: string;
}

export class Policy {
    From: string;
    Type: string;
    Value: string;
}

export class Alert {
    Alert: string;
}
