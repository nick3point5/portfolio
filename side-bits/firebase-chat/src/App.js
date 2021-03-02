import React, { useRef, useState } from 'react';
import './App.css';
import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyAE6BIlObI47MOqJ3-uebhiVZU9uSh3oek",
  authDomain: "fir-chat-9153d.firebaseapp.com",
  projectId: "fir-chat-9153d",
  storageBucket: "fir-chat-9153d.appspot.com",
  messagingSenderId: "266718720170",
  appId: "1:266718720170:web:4f4f096a1299f3deb0e0d3",
  measurementId: "G-QBRX13M5FS"
})

const auth =firebase.auth()
const firestore =firebase.firestore()

function App() {

  const [user]=useAuthState(auth)

  return (
    <div className="App">
      {/* <header className="App-header">

      </header> */}
      <section>
        {user? <ChatRoom/>:<SignIn/>}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={()=> auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const dummy = useRef()
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)

  const [messages] = useCollectionData(query, {idField: 'id'})
  const [formValue, setFormValue] = useState('')

  const sendMessage = async(e)=>{
    e.preventDefault()
    const {uid, photoURL} = auth.currentUser

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('')

    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }

  return(
    <>
      <main>
        <SignOut/>
        {messages && messages.map(msg => {
          return <ChatMessage key={msg.is} message={msg}/>
        })}
        <div ref={dummy}></div>
      </main>
      <form action="" onSubmit={sendMessage}>
        <input type="text" value={formValue} onChange={(e)=>setFormValue(e.target.value)}/>
        <button type="submit">Send</button>
      </form>
    </>
  )
}

function ChatMessage(props){
  const {text, uid, photoURL} = props.message

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

  return (
  <div className={`message ${messageClass}`}>
    <img src={photoURL} alt="" srcset=""/>
    <p>{text}</p>
  </div>
  )
}


export default App;
