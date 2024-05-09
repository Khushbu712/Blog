import {useState, useRef,useEffect} from "react"
import {db} from "./firebaseinit"
import {collection,addDoc,doc,setDoc} from "firebase/firestore";

// very useful for calculator app

export default function Blog(){
    
    const [formData, setForm] = useState({title:"",content:""})
    const [blogs,setBlogs] = useState([]);
   //const[blogs,dispatch] = useReducer(blogReducer,[])
 
    const titleRef = useRef(null);

    useEffect(()=>{
        titleRef.current.focus()
    },[])

 // setDoc useful when we want to give our own id   
        

    async function handleSubmit(e){
        e.preventDefault();
        titleRef.current.focus();

        const docRef = doc(collection(db, "blogs"))
         await setDoc(docRef, {
            title: formData.title,
            content: formData.content,
            createdOn: new Date()
          });
          //console.log("Document written with ID: ", docRef.id);
          

        setBlogs([{title: formData.title,content:formData.content},...blogs]);
        setForm({title:"",content:""});

    }

    function removeBlog(i){
        setBlogs(blogs.filter((blog,index)=> index !==i));
    }

    return(
         <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."
                                ref={titleRef}
                                value={formData.title}
                                onChange={(e)=>setForm({title:e.target.value,
                                    content:formData.content})}
                                />
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                                value={formData.content}
                                required
                                onChange={(e)=>setForm({title:formData.title,
                                    content:e.target.value,})}
                                />
                </Row >

                {/* Button to submit the blog */}            
                <button className = "btn">ADD</button>
            </form>

        </div>
     {/* Section where submitted blogs will be displayed */}
     <h2> Blogs </h2>
     {blogs.map((blog,i) =>(
      <div className="blog" key={i}>
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <div className="blog-btn">
      <button onClick={() => removeBlog(i)} className="btn remove">
      Delete
      </button>
      </div>
      </div>
))}
  
  </>
  )
}

function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}