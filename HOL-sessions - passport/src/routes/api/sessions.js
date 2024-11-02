import { Router } from "express";
import User from '../../models/user.js'
import { createHash, isValidpassword } from "../../../utils.js";
import passport from "passport";

const router = Router()

router.post('/register', passport.authenticate('register', { failureRedirect: '/failregister' }), async (req, res) => {
    /* const {
        first_name, 
        last_name, email, age, password} = req.body
    try {
        const newUser = {
            first_name,
            last_name,email,age,
            password:createHash(password)}
        console.log(newUser)
        await User.create(newUser)
        res.redirect('/login')
    } catch(err) {
        console.log(err)
      res.status(500).send("Error al registrar el usuario")  
    } */

    res.send({ status: "success", message: "Usuario registrado" })
})

router.get('/failregister', async (req, res) => {
    console.log("Estrategia fallida")
    res.send({ error: "Falló" })
})

router.post('/login', passport.authenticate('login', { failureRedirect: '/failllogin' }), async (req, res) => {
    /*     const {email, password} = req.body
        console.log(email,password)
        try {
            const user = await User.findOne({email})
            console.log(user)
            if(!user) return res.status(404).send('Usuario no encontrado')
                if(!isValidpassword(user, password)) return res.status(403).send({status: "error", error: "password inválido"})
                    delete user.password
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
        } */

    if (!res.user) return res.status(400).send({ status: "error", error: "Falla en las credenciales" })
    req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        age: req.user.age,
        email: req.user.email
    }

    res.send({ status: "success", payload: req.user })
})

router.get('/failllogin', (req, res) => {
    res.send({ error: "Login fallido" })
})

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).send('Error al cerrar sesión')
        res.redirect('/login')
    })
})

export default router
