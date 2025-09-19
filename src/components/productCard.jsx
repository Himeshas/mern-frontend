export default function ProductCard(props){

    console.log(props)

    return(
        <div>
            <h1>Hello {props.name}</h1>
            <img src={props.image}  />
            <p>Price : Rs {props.price}</p>
            <button>view more</button>
        </div>
    )

}