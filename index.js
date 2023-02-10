import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/testebancodedados',
    {  useNewUrlParser: true, 
    useUnifiedTopology: true 
    }).then(() => console.log(`deu certo`))
    .catch(() => console.log(`falhou`))

//Modules