import './card.css'
function Card(props){
    const classs='cards'+props.children;
    return(
//  <div  className='card' >
// {props.children}
// </div> 

//  also can write
<div className={classs}>
{props.children}
</div>
    )
}
export default Card;