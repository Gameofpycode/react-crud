
import { toast } from 'react-toastify';

let books = JSON.parse(localStorage.getItem("books")) || [];
let loginUser = JSON.parse(localStorage.getItem("loginUser"));


const addBook = async (book) => {

    let filteredBook = books.filter(item => item.email === loginUser)

    let extTitle = filteredBook.find((item)=> item.title === book.title)
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
const readSingle = (id) => {
    let extdata = books.find((item)=> item.id === id);
    if(!extdata){
        toast.warning(`Requested book id ${id} not matched`)
    }else if(extdata.email !== loginUser){
        toast.warning("unAuthorised acces of book")

    }
    else{
        return extdata
    }
}

const updateBook =(book) => {
    if(book.email !== loginUser){
        toast.warning("unUthorized,acces denied..")
    }else{
        let extBookIndex = books.findIndex(item => item.id === book.id);
        if(!extBookIndex){
            toast.warning("requested bood id not found");
        }else{
            books.splice(extBookIndex,1,book);
            save();
            toast.success("book detailes updated succesfully");
            setInterval(()=>{
                window.location.href="/";
            },3000);
        }
    }
}

const deleteBook = (id) => {

    let extBookIndex = books.findIndex(item => item.id === id);//index position
    let extBook = books.find(item => item.id === id)//book data


    if(extBook.email !== loginUser){
        toast.warning("un authorized acces denied");
    }else{
        if(!extBookIndex){
            toast.warning("requested bod id not found")
        }else{
            books.splice(extBookIndex,1);
            save()
            toast.success("book data sucesfully deleted");
            setInterval(()=>{
                window.location.href="/";
            },3000);

        }

    }

}


const save = ()=>{
    localStorage.setItem("books",JSON.stringify(books))
}

export {addBook,readBook,readSingle,updateBook, deleteBook}

    
