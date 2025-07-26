export default interface MenuItemProps {
    to?: string;
    title?: string;
    active?: boolean,
    onClick?: () => void,
    icon: React.ElementType,
}