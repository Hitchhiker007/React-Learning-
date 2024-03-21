export default function TabButton({children, onSelect}) {

    return <list><button onClick={onSelect}>{children}</button></list>;
}