<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/images/IMG_6567.PNG"/>

    <title>Abdelkarim CHAMLAL | PORTFOLIO</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap');

        html,body{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Space Grotesk', sans-serif;
            overflow: hidden;
            background-color: #84A4BF;
            background-image: url("/images/wallpaper.webp");

        }
        .container{            
            width: 500px;
            height: 475px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            padding: 60px;
            background: #EDE0B5;
            border-radius: 20px;
            text-align: center;
            box-shadow: -1px 1px 15px 0px rgba(132,164,191,0.86);
            -webkit-box-shadow: -1px 1px 15px 0px rgba(132,164,191,0.86);
            -moz-box-shadow: -1px 1px 15px 0px rgba(132,164,191,0.86);
        }

        @media screen and (max-width: 600px){
            .container{
                width: fit-content;
                height:fit-content;
                display: flex;
                flex-direction: column;
                justify-content:space-around;
            }

            .profile_picture img{
                width: 100px;
                height: 100px;
            }

            
        }

        .profile_picture img{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            margin: 0 auto;
            display: block;
            object-fit: cover;
            object-position: center;
        }
        .download_resume a{
            text-decoration: none;
            padding: 10px;
            width: min-content;
            min-width: 200px;
            margin: 0 auto;
            font-weight: 700;
            color: white;
            display: block;
            border: #fff4d1 solid 1px;
            background-color: #000000;
            border-radius: 10px;

        }

        .download_resume a:hover{
            background-color: #fff4d1;
            color: #000000;
        }

        .about p {
            font-weight: 300;
            margin-bottom: 10px;
            padding: 0;
        }

        .about p a{
            text-decoration: none;
        }
        .about p a:hover{
            background: #000000;
            color: #fff4d1;
            /* text-decoration: underline; */
        }

        .socials{
            display: flex;
            justify-content: space-around;
        }

        .socials a{
            text-decoration: none;
            margin-top: 10px;
        }

        .socials a img{
            width: 30px;
            height: 30px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="profile_picture">
            <img src="./images/IMG_6479 2.PNG" alt="Abdelkarim's profile picture">
        </div>
        <div class="about">
            <h1>Abdelkarim CHAMLAL</h1>
            <h2>Backend Developer</h2>
            <p>
                Enjoys coding and problem solving, aims to automate any repeated, tedious tasks.
                <br>
                <br>I started writing <a href="https://blog.abdobits.com">here</a>.
            </p>
        </div>
        <div class="download_resume">
            <a href="/resume">Download Resume</a>
        </div>
        <div class="socials">
            <a href="mailto:abdelkarim.chamlal@gmail.com"><img src="/icons/email.png"></a>
            <a href="https://github.com/AbdelkarimChamlal" target="_blank"><img src="/icons/github.png"></a>
            <a href="https://www.linkedin.com/in/abdelkarimchamlal/" target="_blank"><img src="/icons/linkedin.png"></a>
        </div>
    </div>
    <script>
        console.log("I see You are a curious person...");
    </script>
</body>
</html>