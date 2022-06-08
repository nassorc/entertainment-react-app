import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Card, Input, Button } from '../authentication-styles'
function RegisterPage() {
    // focus on first input
    const userRef = useRef()
    // const errRef = useRef()

    const [success, setSuccess] = useState(false)

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(true)

    const [pass, setPass] = useState('')
    // const [validPass, setValidPass] = useState(false)

    const [matchPass, setMatchPass] = useState('')
    // const [validMatchPass, setValidMatchPass] = useState(false)
    

    useEffect(() => {
        if(!success) {
            userRef.current.focus()
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        // validate information in state again. return if invalid
        console.log(user, pass, matchPass)
    }

    return (
        <>
        {success ? (
            <section>
                <h1>Success!</h1>
                <p><Link to="/login">Sign In</Link></p>
            </section>
            ):
            (
            <Card>
                <h2>Register UI</h2> 
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        value={user} 
                        onChange={e => {setUser(e.target.value)}} 
                        placeholder="Username"
                        ref={userRef}
                        autoComplete= "off"
                        required
                    />
                    <Input 
                        type="password" 
                        placeholder="Password"
                        required
                        value={pass}
                        onChange={e => {setPass(e.target.value)}}
                        autoComplete="off"
                    />
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        value={matchPass}
                        onChange={e => {setMatchPass(e.target.value)}}
                        autoComplete="off"
                    />
                    <Button disabled={!validName}><Link style={{textDecoration: "none"}}to='/register'>Sign Up</Link></Button>
                </Form>
            </Card>
            )
        }   
        </>
    )
}

export default RegisterPage