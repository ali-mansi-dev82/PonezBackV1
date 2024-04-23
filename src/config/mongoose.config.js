const { default: mongoose } = require('mongoose');

mongoose.connect(process.env.DATABASE_URI).then(()=>{
    console.log(`Mongodb Connected`);
}).catch((err)=>{
    console.log(`Mongodb Error: ${err}`);
})