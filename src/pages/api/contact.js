import nodemailer from "nodemailer"

export default async function handler(req, res){
    if (req.method === "POST"){
        const { fullname, email, message } = req.body

        // create a transporter using SMTP
        let transporter = nodemailer.createTransport({
            host:"smtp.mail.yahoo.com",
            port: 587,
            secure: false, 
            auth: {
                user: process.env.EMAIL_USER, // email 
                pass: process.env.EMAIL_PASS, // email or app specific password 
            },
        })

        try {
            // send mail 
            await transporter.sendMail({
                from: `Your Name <${process.env.EMAIL_USER}>`, // send address
                to: process.env.EMAIL_USER,
                subject: "New Contact Form Submission Portfolio site",
                text: `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}}`, // plain text body 
                html: `<p><strong>Name:</strong> ${fullname}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>`, 
            })

            res.status(200).json({ message: "Email sent successfully"})
        } catch (error){
            console.error(error)
            res.status(500).json({message: "failed to send email "})
        }
    } else {
        res.setHeader("Allow", ["POST"])
        res.status(405).end(`Method ${req.method} Not Allowed `)
    }
}