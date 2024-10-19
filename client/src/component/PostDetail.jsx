import React, {useState,useEffect} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

function PostDetail(){
    const navigate = useNavigate();
 
    const {id} = useParams(); //params객체안에서 id속성의 value를 id변수에 할당한다
    const [posts, setPosts] = useState([]); //posts는 데이터가 들어갈 객체이며 비어있는 상태로 초기회

    useEffect(() => { //useEffect안에 API를 호출하고 id로 동적으로 주소 바뀜..id의 값이 변경 될때마다 새로운 정보를 보여주기위해 useEffect 의존성 배열에 id를 포함 시켜둔다.
        Axios.get(`http://localhost:8200/detail/${id}`)
            .then((response) => {
                setPosts(response.data); //setPosts에 데이터 담음
            })
            .catch((err) => {
                console.log(err)
            })
    },[id,posts]);

    return(
        <div className="detail-wrap">
            {posts.map((post, idx) => (
                <p key={idx} >           
                    <input type="text" value={post.verse} name="verse"  />
                    <textarea value={post.memo} name="memo" rows="15"/>
                </p>
            ))} 
            <div className="btns-wrap">
                <Link to ={`/delete/${id}`}
                    onClick={()=>{
                        Axios.delete(`http://localhost:8200/delete/${id}`)
                            .then((res) => {
                                console.log(res);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                }}><button className="delete-btn">삭제</button></Link>   

                <button className="btn-goback" onClick={() => {
                            navigate("/")
                        }}>홈</button>
                </div>
        </div>
    )
}

export default PostDetail;