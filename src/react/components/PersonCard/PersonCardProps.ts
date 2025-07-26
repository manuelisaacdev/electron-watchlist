import Person from "../../interfaces/Person";

export default interface PersonCardProps {
    person: Person,
    onEdit?: (person:Person) => void,   
    onShares?: (person:Person) => void,
    handleDelete: (person:Person) => void,
}