# library
Making a editable booklist using objects



:root{
    --main-color: rgba(144, 94, 73, 0.198);
    --main-color-hover: rgba(144, 94, 73, 0.647);
    --text-color: rgb(0, 3, 60);   
}

::selection{
    background-color: black;
    color: white;
}

body{
    background-color: var(--main-color);
    color: var(--text-color);
}

body div{
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-columns: 1fr 20%;
    grid-template-rows: 100px 1fr;
}

.header{
    background-color: white;

    grid-column: 1/3;
    grid-row: 1/2;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    -webkit-box-shadow: 4px 10px 15px -7px rgba(0,0,0,0.4);
    -moz-box-shadow: 4px 10px 15px -7px rgba(0,0,0,0.4);
    box-shadow: 4px 10px 15px -7px rgba(0,0,0,0.4);
}

.header button{
    margin-right: 200px;
    margin-left: 50px;
}

button{
    font-family: 'Anek Devanagari', sans-serif;
    font-size: 2rem;
    padding: 3px 30px 1px 30px;
    border-radius: 20px;
    border: none;
    
    color: var(--text-color);
    background-color: var(--main-color);
}

.header button:hover{
    background-color: var(--main-color-hover);
}

.header div{
    display: flex;
    align-items: center;
    margin-left: 100px;
}

h1{
    font-size: 3rem;
}

.header div h1{
    margin-top: 15px;
    margin-left: 30px;
}

.footer{
    position: fixed;
    bottom: 0;
    left: 50%;
    margin-bottom: 3px;
}

.footer a{
    color: var(--text-color);
    text-decoration: none;
}

.sidebar{
    grid-row: 2/3;
    grid-column: 2/3;
    background-color: rgb(164, 83, 83);
    color: white;
    padding: 30px;


}


.sidebar button:hover{
    background-color: green;
}

.sidebar button:active{
    background-color: rgb(0, 97, 0);
}


.sidebar button{
    color: white;
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 20px;

}


.sidebar .line{
    background-color: aliceblue;
    height: 2px;
    margin-bottom: 40px;
}

.sidebar div{
    display: flex;
    justify-content: space-between;
    width: 260px;
    margin-top: 20px;

}

.bookgrid{
    /* padding: 2m0px; */
    grid-column: 1/2;
    grid-row: 2/3;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-evenly;
}

.bookinfo{
    height: 200px;
    border-radius: 30px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    /* padding: 50px; */

}