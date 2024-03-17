export default function TabButton({children}) {

    function handleClick() {
        console.log("Hello World");
    }

    return <list><button onClick={handleClick}>{children}</button></list>;
}