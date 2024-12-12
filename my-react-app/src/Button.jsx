
function Button(){

    const styles = {
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
    }


    const handleClick = (e) => e.target.textContent="OUCH!";
        
    
    
    return(<button onDoubleClick={(e) => handleClick(e)} style={styles}>Click me</button>)
}
export default Button