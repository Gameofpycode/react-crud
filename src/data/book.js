
import { toast } from 'react-toastify';

let books = JSON.parse(localStorage.getItem("books")) || [];
let loginUser = JSON.parse(localStorage.getItem("loginUser"));


const addBook = async (book) => {

    let extTitle = books.find((item)=> item.title === book.title)
    if(extTitle){
        toast.success(`Book title ${book.title} already exist.`)
    }else{
       if(loginUser){
           let data = {
               email:loginUser,
               ...book
           };
            books.push(data);
                save();
                toast.success("New book added succesfully");
                setInterval(()=>{
                    window.location.href = "/"
                },3000);
       }
    }
}


const readBook = ()=>{
    let filtBooks = books.filter(item => item.email === loginUser)
    if(filtBooks){
        return filtBooks;
    }else{
        return [];
    }
    

}
const readSignal = async (id) => {
    let extdata = books.find((item)=> item.id === id);
    if(!extdata){
        toast.warning(`Requested book id ${id} not matched`)
    }else{
        return extdata
    }
}

const updateBook = async (book,id) => {}

const deleteBook = async (id) => {}


const save = ()=>{
    localStorage.setItem("books",JSON.stringify(books))
}

export {addBook,readBook,readSignal,updateBook, deleteBook}

    
