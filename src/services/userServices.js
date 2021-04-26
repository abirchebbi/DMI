const KEYS ={
    users:'users',
    userId:'userId'
}

export const getTypeCollection = ()=>([
    { id: '1', title: 'Doctor' },
    { id: '2', title: 'Paramedical' },
    { id: '3', title: 'Secretary' },
])

export function insertUser(data) {
    let users=getAllUsers();
    data['id'] = generateUserId()
    users.push(data)
    localStorage.setItem(KEYS.users,JSON.stringify(users))
}
export function updateUser(data) {
    let users=getAllUsers();
    let recordIndex = users.findIndex(x => x.id === data.id);
    users[recordIndex]={...data}
    localStorage.setItem(KEYS.users,JSON.stringify(users))
}

export function generateUserId() {
    if (localStorage.getItem(KEYS.userId) == null)
        localStorage.setItem(KEYS.userId, '0')
    var id = parseInt(localStorage.getItem(KEYS.userId))
    localStorage.setItem(KEYS.userId, (++id).toString())
    return id;
}

export function getAllUsers() {
    if (localStorage.getItem(KEYS.users) == null)
        localStorage.setItem(KEYS.users, JSON.stringify([]))
    return  JSON.parse(localStorage.getItem(KEYS.users));
   // let types=getTypeCollection();
   //   return users.map(x => ({
   //    ...x,
   //      type:types[x.typeId-1].title
   //  }))
}
