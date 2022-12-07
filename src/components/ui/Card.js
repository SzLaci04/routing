import classes from "./Card.module.css";
function Card(props)
{
    return(
        <div className={"card "+classes.card}>{props.children}</div>
    );
}
export default Card;