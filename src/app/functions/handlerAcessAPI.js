'use server'

const userList = [
    {
        name:'Marcelino',
        email:'marcelino@teste.com',
        password:'1234' ,
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
    {
        name:'Caio',
        email:'caio@teste.com',
        password:'4567' ,
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
    {
        name:'teste',
        email:'teste@teste.com',
        password:'0000' ,
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    }
]

const getUserAuthenticated = (userValor) => {
    let userAuth = {}
        userList.map((user) => {
            if (user.email == userValor.email && user.password == userValor.password){
                userAuth = user
            }
           }
          )
           return userAuth
         }

const getUsers = () =>{
        return userList       
}

export { getUsers, getUserAuthenticated };


