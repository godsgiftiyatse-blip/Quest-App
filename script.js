/* ==========================
   GLOBAL
========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html,
body{
    width:100%;
    min-height:100vh;
    font-family:'Poppins',sans-serif;
}

body{
    overflow-x:hidden;
    background:#07141b;
}

/* ==========================
   WELCOME PAGE
========================== */

.welcome-background{
    position:fixed;
    inset:0;

    background:
    url("hero.jpg")
    center center
    / cover
    no-repeat;

    z-index:-2;
}

.welcome-overlay{
    min-height:100vh;

    display:flex;
    flex-direction:column;

    padding:20px 24px;

    background:
    linear-gradient(
        to bottom,
        rgba(0,0,0,.18),
        rgba(0,0,0,.05),
        rgba(0,0,0,.78)
    );
}

.welcome-top{
    text-align:center;
    padding-top:10px;
}

/* LOGO */

.logo-wrapper{
    width:min(260px,65vw);
    height:min(190px,26vh);

    margin:auto;

    overflow:hidden;
}

.welcome-logo{
    width:100%;

    transform:
        translateY(-65px)
        scale(1.55);

    display:block;
}

/* TITLE */

.welcome-title{
    color:white;

    font-size:clamp(3rem,9vw,5rem);

    font-weight:800;

    letter-spacing:10px;

    margin-top:-25px;
}

/* DIVIDER */

.welcome-divider{
    width:55px;
    height:4px;

    background:#66ffab;

    border-radius:999px;

    margin:18px auto;
}

/* TEXT */

.welcome-subtitle{
    color:white;

    font-size:clamp(1rem,4vw,1.5rem);

    font-weight:300;
}

.welcome-heading{
    margin-top:10px;

    color:#66ffab;

    font-size:clamp(1.5rem,5vw,2.2rem);

    font-weight:700;
}

.welcome-space{
    flex:1;
}

/* BUTTONS */

.welcome-buttons{
    width:100%;
    padding-bottom:20px;
}

.primary-btn{
    width:100%;
    min-height:68px;

    border:none;

    border-radius:22px;

    background:
    linear-gradient(
        135deg,
        #7effbc,
        #43d989
    );

    color:#04151d;

    font-size:1.1rem;
    font-weight:700;

    cursor:pointer;

    box-shadow:
    0 10px 30px rgba(126,255,188,.25);
}

.primary-btn span{
    margin-right:10px;
}

.secondary-btn{
    width:100%;
    min-height:68px;

    margin-top:15px;

    border-radius:22px;

    border:1px solid rgba(126,255,188,.4);

    background:transparent;

    color:white;

    font-size:1rem;

    cursor:pointer;
}

/* ==========================
   LOGIN / SIGNUP
========================== */

.auth-background{
    position:fixed;
    inset:0;

    background:
    linear-gradient(
        180deg,
        #07141b,
        #0b1e27,
        #061017
    );

    z-index:-2;
}

.auth-overlay{
    min-height:100vh;

    display:flex;
    justify-content:center;
    align-items:center;

    padding:25px;
}

.auth-container{
    width:100%;
    max-width:450px;

    padding:30px;

    border-radius:28px;

    background:
    rgba(255,255,255,.05);

    backdrop-filter:blur(12px);

    border:
    1px solid rgba(255,255,255,.08);
}

/* BACK BUTTON */

.back-btn{
    width:45px;
    height:45px;

    border:none;

    border-radius:50%;

    cursor:pointer;

    font-size:1.3rem;

    background:
    rgba(255,255,255,.08);

    color:white;

    margin-bottom:20px;
}

/* LOGO */

.auth-logo{
    width:120px;

    display:block;
    margin:auto;
}

/* TITLES */

.auth-title{
    color:white;

    text-align:center;

    margin-top:10px;

    font-size:2rem;
}

.auth-subtitle{
    color:#c9d5dc;

    text-align:center;

    margin-top:8px;
    margin-bottom:25px;
}

/* FORM */

.auth-form{
    display:flex;
    flex-direction:column;
    gap:18px;
}

.input-group{
    display:flex;
    flex-direction:column;
}

.input-group label{
    color:white;
    margin-bottom:8px;
    font-size:.95rem;
}

.input-group input{
    width:100%;

    height:56px;

    border:none;

    border-radius:16px;

    padding:0 16px;

    background:
    rgba(255,255,255,.08);

    color:white;

    outline:none;
}

.input-group input::placeholder{
    color:#b8c5cc;
}

/* PASSWORD */

.password-wrapper{
    position:relative;
}

.toggle-password{
    position:absolute;

    right:12px;
    top:50%;

    transform:translateY(-50%);

    border:none;

    background:none;

    color:#66ffab;

    cursor:pointer;

    font-weight:600;
}

/* AUTH BUTTON */

.auth-primary-btn{
    width:100%;

    height:60px;

    border:none;

    border-radius:18px;

    background:
    linear-gradient(
        135deg,
        #7effbc,
        #43d989
    );

    color:#04151d;

    font-size:1rem;
    font-weight:700;

    cursor:pointer;
}

/* FOOTER */

.auth-footer{
    margin-top:20px;

    text-align:center;

    color:white;
}

.auth-footer a{
    color:#66ffab;
    text-decoration:none;
    font-weight:700;
}

/* ==========================
   RESPONSIVE
========================== */

@media(max-width:480px){

    .welcome-title{
        font-size:3rem;
    }

    .welcome-heading{
        font-size:1.6rem;
    }

    .auth-container{
        padding:24px;
    }

    .auth-title{
        font-size:1.7rem;
    }
}

@media(max-height:700px){

    .logo-wrapper{
        width:200px;
        height:140px;
    }

    .welcome-logo{
        transform:
        translateY(-50px)
        scale(1.45);
    }

    .welcome-title{
        font-size:3rem;
    }

    .welcome-space{
        min-height:40px;
    }
        }
