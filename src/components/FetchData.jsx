import { useEffect, useState } from "react";

function FetchData(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        try{
        
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch("https://api.thecatapi.com/v1/images/search");
            const data = await response.json();
            setData(data);
            setLoading(false)
        }
        fetchData();
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [])

    if(loading){
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1>Data Fetching</h1>
            {data && <div>
                {data.map((data, index) => <DataComponent key={index} id={data.id} url={data.url} width={data.width} height={data.height}/>)}
            </div>}
        </div>
    )
}
export default FetchData;

function DataComponent ({id, url, width, height}) {
    return (<div>
        <p>id: {id}</p>
        <h1>url: {url}</h1>
        <div>
            <p>width:{width}</p>
            <p>height: {height}</p>
        </div>
    </div>)
}