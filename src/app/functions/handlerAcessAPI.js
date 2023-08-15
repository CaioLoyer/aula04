'use server'

const users = [
    {
        name:'Marcelino',
        email:'marcelino@teste.com',
        password:'1234' ,
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    },
    {
        name:'Caio',
        email:'caio@teste.com',
        password:'4567' ,
        token:'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'
    },
    {
        name:'Judas',
        email:'judas@teste.com',
        password:'8900' ,
        token:'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    }
]

const getUserAuthenticated = (user) => {

}

const getUsers = () =>{
        
}
export { getUsers, getUserAuthenticated };


