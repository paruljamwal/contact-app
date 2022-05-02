

const initial=[
    {
        id:0,
        name:"Parul",
        number:4234523525,
        email:"parul@gmail.com"
    },
    {
        id:1,
        name:"Akshu",
        number:978957423,
        email:"akshu@gmail.com"
    }
];


 const contactReducer=(store=initial,action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            return [...store,action.payload]
        case "UPDATE_CONTACT":
           const updateState=store.map((contact)=> contact.id===action.payload.id ? action.payload : contact);
           return updateState;    
         case "DELETE_CONTACT":
             return store.filter(contact=>contact.id !==action.payload && contact)

        default:
            return store

    }
}

export default contactReducer