import React, {useState} from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import './Main.css';
import tempdatas from '../datas/tempdatas';

const Main = () => {
    const [posts, setPosts] = useState(tempdatas); // posts 에 데이터 저장 
    const [limit, setlimit] = useState(10); // 5줄- setlimit을 통해 화면에 표시될 콘텐츠 수 조절 가능.
    const [page, setPage] = useState(1);
    const offset = (page -1) * limit;
    // console.log(`page ${page}`);
    // console.log(`offset ${offset}`);

    const Line = styled.div`
        width: 100%;

        >div{
            display: flex;
            /* width: 100%; */
            justify-content: space-around;
            border-bottom: 1px solid #efefef;
            padding-top: 5px;
            padding-bottom: 5px;
            
            >.min{
                width: 140px;
                padding-left: 10px;
            }
            
            >.max{
                width: 300px;
                text-align:left;
                padding-left: 50px;
            }

            &:hover{
                background:#efefef;
                cursor:pointer;
            }
        }
    `;

    return(
        <div className="main">
            <div className="main_container">
                <h1>고양이</h1>
                <div className="main_indexes">
                    <div className="index_title min">번호</div>
                    <div className="index_title max">제목</div>
                    <div className="index_title min">글쓴이</div>
                    <div className="index_title min">등록일</div>
                    <div className="index_title min">추천</div>
                </div>
                <div className="main_lists">
                    <Line>
                        {posts.slice(offset, offset + limit).map(({id, title, user, createdAt, cnt}) => (
                            <div key={id} className="lists_container">
                                <div className="min">{id}</div>
                                <div className="max"> {title}</div>
                                <div className="min"> {user}</div>
                                <div className="min"> {createdAt}</div>
                                <div className="min"> {cnt}</div>
                            </div>
                        ))}
                    </Line>
                </div>

                <Pagination
                total = {posts.length}
                limit = {limit}
                page={page}
                setPage={setPage}/>
            </div>
        </div>
    )
}

export default Main;