import { Router } from "express";
import User from '../../models/user.js'

const router = Router()

router.post('/register', async(req,res)=>{
    const {
        first_name, 
        last_name, email, age, password} = req.body
    try {
        const newUser = {
            first_name,
            last_name,email,age,password}
        console.log(newUser)
        await User.create(newUser)
        res.redirect('/login')
    } catch(err) {
        console.log(err)
      res.status(500).send("Error al registrar el usuario")  
    }
})

router.post('/login', async(req,res)=>{
    const {email, password} = req.body
    console.log(email,password)
    try {
        const user = await User.findOne({email})
        console.log(user)
        if(!user) return res.status(404).send('Usuario no encontrado')
            req.session.user={
        id: user._id,
    first_name:user.first_name,
    last_name:user.last_name,
    email:user.email,
    age: user.age
    }

    res.redirect('/profile')
    } catch (error) {
        res.status(500).send("Error al iniciar sesión")
    }
})

router.post('/logout', (req,res)=>{
    req.session.destroy((err)=>{
        if(err) return res.status(500).send('Error al cerrar sesión')
            res.redirect('/login')
    })
})

export default router
