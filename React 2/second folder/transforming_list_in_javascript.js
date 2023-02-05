const data = [
    {
        id : 1,
        title : "permission",
        description : "The best permission in time",
        Image : "./http://image.png",
        price : "$23.56",
    },
    {
        id : 2,
        title : "documentation",
        description : "The best documentation over time",
        Image : "./http://image.png",
        price : "$45.90",
    },
    {
        id : 2,
        title : "Impactation",
        description : "The best impartation in the world",
        Image : "./http://image.png",
        price : "$49.87",
    },
]

const topData = data.map(desert => {
    return (
        content :`${desert.title} - ${desert.description}`,
        price: desert.price,
    )
})

export default function App() {
    console.log(topData);
    return <h1>Examine the console output</h1>
}