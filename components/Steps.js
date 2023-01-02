import React, { useEffect, useState} from "react"
import Image from 'next/image'

const Steps = () => {
  const [q1, setQ1] = useState(true)
  const [q2, setQ2] = useState(false)
  const [q3, setQ3] = useState(false)
  const [q4, setQ4] = useState(false)
  const [q5, setQ5] = useState(false)


  const [question1, setQuestion1] = useState('')
  const [question2, setQuestion2] = useState('')
  const [question3, setQuestion3] = useState('')
  const [question4, setQuestion4] = useState('')

  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [Email, setEmail] = useState('')
  const [state, setstate] = useState('')
  const [phone, setphone] = useState('')
  const [website, setwebsite] = useState('')
  const [expc, setexpc] = useState('')
  const [loading, setloading] = useState('/load1.svg')
  const [theyQualify, setTheyQualify] = useState(true)
  const [end, setEnd] = useState(false)


  useEffect(() => {
    if(question1 === 'introvert' || question2 === 'introvert' || question3 === 'introvert' || question4 === 'introvert' ) {
      setTheyQualify(false)
    }

    // if (typeof window !== "undefined") {
    document.querySelectorAll('.q1 .card').forEach((button) => {
      button.addEventListener("click", () => {
        setQ1(false)
        setQ2(true)
      })
    })
    document.querySelectorAll('.q2 .card').forEach((button) => {
      button.addEventListener("click", () => {
        setQ2(false)
        setQ3(true)
      })
    })
    document.querySelectorAll('.q3 .card').forEach((button) => {
      button.addEventListener("click", () => {
        setQ3(false)
        setQ4(true)
      })
    })
    document.querySelectorAll('.q4 .card').forEach((button) => {
      button.addEventListener("click", () => {
        setQ4(false)
        setQ5(true)
      })
    })


  },[q1, q2, q3, q4, q5, theyQualify])


  return (
    <>
      <div className={`${q1 ? "q1" : 'none'}`}>
        <p className="question">You&#39;re really busy at work and a colleague is telling you their life story and personal woes. You:</p>
        <div className="cardrow">
          <div 
            className="card" 
            onClick={() => setQuestion1('introvert')}
          >
            <p>Don&#39;t interrupt</p>
          </div>
          <div 
            className="card" 
            onClick={() => setQuestion1('extrovert')}
          >
            <p>Work can wait</p>
          </div>
          <div 
            className="card" 
            onClick={() => setQuestion1('introvert')}
          >
            <p>Try to listem and work at the same time</p>
          </div>
          <div 
            className="card" 
            onClick={() => setQuestion1('extrovert')}
          >
            <p>Tell them that you are busy</p>
          </div>
        </div>
      </div>

      <div className={`${q2 ? "q2" : 'none'}`}>
        <p className="question">You&#39;ve been sitting in the doctor&#39;s waiting room for more than 25 minutes. You:</p>
        <div className="cardrow">
          <div 
            className="card" 
            onClick={() => setQuestion2('introvert')}
          >
            <p>Begrudgingly look at my watch</p>
          </div>
          <div 
            className="card" 
            onClick={() => setQuestion2('introvert')}
          >
            <p>Be angery while staying quiet</p>
          </div>
          <div 
            className="card" 
            onClick={() => setQuestion2('extrovert')}
          >
            <p>Talk about it to other annoyed people in the waiting room</p>
          </div>
          <div 
            className="card" 
            onClick={() => setQuestion2('extrovert')}
          >
            <p>Make sure everyone in the room knows how pissed you are</p>
          </div>
        </div>
      </div>

      <div className={`${q3 ? "q3" : 'none'}`}>
        <p className="question">You&#39;re having an animated discussion with a colleague regarding a project that you’re in charge of. You:</p>
        <div className="cardrow">
          <div 
            className="card" 
            onClick={() => setQuestion3('introvert')}
          >
            <p>Don&#39;t contradict them</p>
          </div>
          <div 
            className="card" 
            onClick={() => setQuestion3('introvert')}
          >
            <p>Agree with them</p>
          </div>
          <div 
            className="card" 
            onClick={() => setQuestion3('extrovert')}
          >
            <p>Defend yourself and project</p>
          </div>
          <div 
            className="card" 
            onClick={() => setQuestion3('extrovert')}
          >
            <p>Talk it out</p>
          </div>
        </div>
      </div>

      <div className={`${q4 ? "q4" : 'none'}`}>
        <p className="question">You are taking part in a guided tour of a museum. You:</p>
        <div className="cardrow">
          <div 
            className="card" 
            onClick={() => setQuestion4('introvert')}
          >
            <p>Can&#39;t hear because you&#39;re in the back</p>
          </div>
          <div 
            className="card" 
            onClick={() => setQuestion4('introvert')}
          >
            <p>Don&#39;t ask any questions</p>
          </div>
          <div 
            className="card" 
            onClick={() => setQuestion4('extrovert')}
          >
            <p>Try to help others in the group</p>
          </div>
          <div 
            className="card" 
            onClick={() => setQuestion4('extrovert')}
          >
            <p>In the front and adding comments</p>
          </div>
        </div>
      </div>

      <div className={`${q5 ? "q5" : 'none'}`}>
        <p className="question last">Congrats!!! <br/>You&#39;re an {theyQualify ? 'extrovert' : 'introvert'}</p>
        <div className="cardrow">
          <div 
              className="card" 
              onClick={() => typeof window !== "undefined" ? window.location.href = `${document.location.origin}` : null} 
            >
              <p>Start Over</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Steps

