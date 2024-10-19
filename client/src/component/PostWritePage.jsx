import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "../App.css";

function PostWritePage(){
   const navigate = useNavigate();

    //values는 두개의 속성(verse, memo)을 가진 객체이며 빈문자로 초기화
    const [values, setValues] = useState({
        verse:"",
        memo:""
    }); 
    
    //values 객체에서 두개 속성을 추출해서 각각 변수에 담음
    const {verse, memo} = values;

    //input에서 값을 입력할 때 state의 값을 변경해주는 함수 
    const onChange = (e) => {
        const {name, value} = e.target; //input의 이름과 값을 가져온다.
        setValues({
            ...values,
            [name]:value, 
        });
    }

    //submit 핸들 함수를 통해 api호출하여 서비스에 전달한다.
    const onWrite = (e) => {
        e.preventDefault(); //폼이 제출후에 다시 페이지가로딩되는 것 방지
        const url = "http://localhost:8200/insert";
        const data ={
            verse:verse,
            memo:memo
        }
        const config = {'Content-Type': 'application/json'};

        if(verse.length === 0){
            alert("성경구절을 입력해 주세요")
        }else if(memo.length === 0){
            alert("내용을 입력해 주세요")
        }else{
            Axios.post(url, data, config)
            .then(res => {
                navigate("/")
            }).catch(err => {
                console.log(err.response.data.message); 
            });         
        }
    }

    const onReset = () => {
        setValues({
            verse:"",
            memo:""
        })
    }

    return(
        <div className="write-wrap">
            <form>
                <input type="text" name="verse"  value={verse} onChange={onChange} placeholder="성경구절" />
                <textarea name="memo" value={memo} onChange={onChange} rows="15" placeholder="성경구절에 대한 묵상"/>
                <div className="btns-wrap">
                    <button onClick = {onWrite} className="btn-write">작성</button>
                    <button onClick = {onReset} className="btn-reset">취소</button>
                    <button className="btn-goback" onClick={() => {
                        navigate("/")
                    }}>홈</button>
                </div>
            </form>
        </div>
    )
} //end of function PostWritePage 

export default PostWritePage;