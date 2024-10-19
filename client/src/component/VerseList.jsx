import {useState, useEffect} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

function VerseList(){
    const [posts, setPosts] = useState([]); //posts는 데이터베이스에에서 가져온 데이터들

    //server.js 페이지에서 데이터 가져오기
    useEffect(() => {
        Axios.get("http://localhost:8200/get")
            .then((response) => {
                setPosts(response.data);
        })
    },[])
  
    return(        
        <>     
            <ul className="verse-list">
                {posts.map((post, idx) => (
                    <li key={idx} > 
                        <Link to={`/detail/${post.id}`}>
                            <p><span>{idx+1}.</span> {post.verse}</p>
                        </Link>            
                    </li>
                ))} 
            </ul>
        </>
    )
}

export default VerseList;