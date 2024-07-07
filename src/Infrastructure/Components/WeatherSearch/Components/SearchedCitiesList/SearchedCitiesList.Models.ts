export interface LocationProp {
    id?: string;
    name?: string;
    country?: string;
}
export interface SearchedCitiesListProps {
    handleOnPressLocation: (location: LocationProp) => void;
};