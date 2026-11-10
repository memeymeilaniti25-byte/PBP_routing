const express = require('express');
const app = express();

const users = [
    {id: 1, nama: 'Memey'},
    {id: 2, nama: 'Meilani'},
    {id: 3, nama: 'Cantik'}
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) =>{
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);    

    if (!user){
        res.status(404).json({message: 'Pengguna tidak di temukan'});
    }else{
        res.json(user);
    }
});

app.listen(3000, () => 
console.log('Server berjalan di http://localhost:3000'));