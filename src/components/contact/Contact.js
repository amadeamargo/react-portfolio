import './contact.css'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';


export default function Contact() {

    return (
        <>
            <div className="form-container">
                <Box component="form">
                    <TextField margin="normal" fullWidth className="input-field" variant="outlined" label="Full Name" name="name" />
                    <TextField margin="normal" fullWidth className="input-field" variant="outlined" label="Email" name="email" />
                    <TextField margin="normal" fullWidth variant="outlined" label="Message" name="message" multiline rows={10} />
                    <Button id="send-btn" variant="contained">Send</Button>
                </Box>
            </div>
        </>
    )
}