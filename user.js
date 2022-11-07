export const getUserList = () =>  {
  return [
        {
            id: 1,
            isPublic: true,
            name: 'Ram',
            companies: ['tech zero', 'tech byte', 'sty pesy'],
            books: [{
                name: 'hater man',
                amount: 120,
            },
            {
                name: 'down people',
                amount: 250,
             }
        ]
     }, 
    {
            id: 2,
            isPublic: true,
            name: 'Puspa',
            companies: ['cozy an', 'naayz', 'pepza'],
            books: [
                {
                    name: 'fun the home',
                    amount: 150,
                },
                {
                    name: 'go today',
                    amount: 380,
                }
           ]
      }
   ]
}


export const findUserById = (id) =>{
const users = getUserList()
   const userFound = users.filter((user) => {
        if (user.id === id) {
             return user
        }   
    });
   if(userFound.length>0){
        return userFound
    }
    return false

}