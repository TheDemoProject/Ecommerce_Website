<template>
    <header>
        <div class="logo">E commerce</div>
        <!-- <img class="logo" src="" alt="logo"> -->
        <nav>
            <ul class="nav_link">
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
        <a class="button" href="#"><button>Detail</button></a>
    </header>
</template>

<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    li, a, button {
        font-weight: 500;
        font-size: 16px;
        color: #ffffff;
        text-decoration: none;
        margin-right: 10px;
    }
    header{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 10px 10%;
        background-color: #BB2CD9;
    }
    .logo{
        cursor: pointer;
        margin-right: auto;
    }
    .nav_link li{
        display: inline-block;
    }
    .nav_link li a{
        transition: all 0.3s ease 0s;
    }
    .nav_link li a:hover{
        color: #0088a9;
    }
    button{
        padding: 9px 25px;
        background-color: rgba(0, 136, 169, 1);
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
    }
</style>