import {useState, useRef,useEffect,useReducer} from "react"
import {db} from "../firebaseinit.js";
import {collection,addDoc} from "firebase/firestore";

function blogReducer(state,action){
      switch(action.type){
        case "ADD":
            return [action.blog, ...state]
        case "REMOVE":
            return state.filter((blog,index)=> index !== action.index);
        default:
            return [];      
      }
}
// very useful for calculator app

export default function Blog(){
    
    const [formData, setForm] = useState({title:"",content:""})
   // const [blogs,setBlogs] = useState([]);
   const[blogs,dispatch] = useReducer(blogReducer,[])
 
    const titleRef = useRef(null);

    useEffect(()=>{
        titleRef.current.focus();
    },[])

    useEffect(()=>{

        if(blogs.length && blogs[0].title){
            document.title = blogs[0].title;
        }
        else{
            document.title = "No Blogs";
        }

        
    },[blogs])

    function handleSubmit(e){
        e.preventDefault();
    }
}