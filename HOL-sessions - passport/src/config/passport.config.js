import passport from "passport";
import local from 'passport-local'
// import userService from '../models/user.js'
import { createHash, isValidpassword } from "../../utils.js";
import User from '../models/user.js'

const LocalStrategy = local.Strategy

const initializePassport = () => {


    passport.use('register', new LocalStrategy(
        { passReqToCallback: true, usernameField: "email" }, async (req, username, password, done) => {
            const { first_name, last_name, email, age } = req.body

            try {
                let user = await User.findOne({ email: username })
                if (user) {
                    console.log("usuario existente")
                    return done(null, false)
                }

                const newUser = {
                    first_name,
                    last_name,
                    email,
                    age,
                    password: createHash(password)
                }

                let result = await User.create(newUser)
                return done(null, result)
            } catch (error) {
                return done(`'Error al obtener el usuario ${error}'`)
            }
        }
    ))

    passport.use('login', new LocalStrategy({ usernameField: 'email' }, async (username, password, done) => {
        try {
            const user = await User.findOne({ email: username })
            if (!user) {
                console.log("Usuario no existe")
                return done(null, false)
            }
            if (!isValidpassword(user, password)) return done(null, false)
            return done(null, user)
        } catch (error) {
            return done(error)
        }
    }))

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        let user = await User.findById(id)
        done(null, user)
    })




}

export default initializePassport