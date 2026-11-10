const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Halaman Utama');
});

app.get('/about', (req, res)=>{
    res.send('Halaman Tentang Kami');
});

app.get('/contact', (req, res)=>{
    res.send('Hubungi kami di routing-app');
});

app.listen(3000, () => 
console.log('Server berjalan di http://localhost:3000'));


app.get('/produk/:kode', (req, res) => {
    res.send('Produk dengan kode: ' + req.params.kode);
});
app.post('/users', (req, res) => {
    res.send('Tambah data user baru');
});

app.put('/users/:id', (req, res) => {
    res.send('Update data user dengan ID: '+ req.params.id);
});

app.delete('/users/:id', (req, res) => {
    res.send('Hapus user dengan ID: ' + req.params.id);
});