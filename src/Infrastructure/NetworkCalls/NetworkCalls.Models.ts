import { API_METHODS } from "../Shared/Constants/index";

export interface GetLocationsProps {
    cityName?: string;
    days?: number;
}

export interface ApiCallProps {
    method?: API_METHODS,
    endpoint?: string;
}