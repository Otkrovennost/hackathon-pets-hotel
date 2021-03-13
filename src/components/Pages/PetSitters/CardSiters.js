import React, {useState, useEffect} from 'react'
import picture  from '../PetsOnHoliday/no_avatar (1).png'

export default function CardSiters({ name, raitingPos, raitingNeg, reviews, offer, adress, phone,pict }) {
    let myRef=React.createRef()

    const [count, setCount] = useState(Math.floor(Math.random() * (20 - 1)) + 1)
const [comment, setComment] = useState([])
const [comCount, setComCount] = useState(0)



// useEffect(()=>{

// const raw=localStorage.getItem('comment') || []
// setComment(JSON.parse(raw));
// const  comCountLocal=localStorage.getItem('comCount') || 0
// setComCount(JSON.parse(comCountLocal))
// },[])


// useEffect(()=>{
//     localStorage.setItem('comment', JSON.stringify(comment))
//     localStorage.setItem('comCount', JSON.stringify(comCount ))
//     },[comment])

const  addComment=()=>{

let commentValue=myRef.current.value
if(commentValue){
   setComCount(comCount+1 )
let comments = [commentValue,...comment]
setComment(comments)
myRef.current.value=''
}

}
const handler =()=>{
        console.log('1')
        let currentCount= count
        currentCount++
        setCount(currentCount)
    }
        return (
            <div className='sitters'>
             <p> <span onClick={handler}>  👍{count}</span><span> {' '}</span><span> 👎{raitingNeg} </span> <span className='commentsCount'>Comments ({comCount})</span></p>
              <div className='avatar-siters-container'>
                <img src={pict !== null ? pict : picture} alt='pict' />
                   <h2> {name} </h2>

              </div>
                <div className='sitersInfo'>


                    <p className="comment">{offer}</p>
                    <p>adress: <b>{adress}</b></p>
                    <p> mobail: <b>{phone}</b>
                    </p>
                </div>
                <input type='text' placeholder='leave a comment...' ref={myRef} /> <button onClick={addComment} >Send</button>
<div className='commentOut'>
{comment.map(item=><p className='commentOut-p'>{item} </p>)}

</div>
            </div>
        )
}
