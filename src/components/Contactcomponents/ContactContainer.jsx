function ContactContainer() {
    return ( 


        < div className = "card insidecontact" >


            <div className = "image" style = {{ border: "2px solid rgb(56, 55, 55)", borderBottom: "0px" }} >

            <
            img alt = "Network Issue"
            src = "https://media.istockphoto.com/vectors/web-developer-blue-rgb-color-icon-computer-software-development-pc-vector-id1251725147?k=20&m=1251725147&s=170667a&w=0&h=dP5REX1HGPDsX_YVsuvXubqJGhN-pg9_ooSkurdWPAA="
            style = {
                { width: "300px", height: "300px" }
            }/> 

            < /div >

            <div className = "content" style = { { border: "2px solid rgb(56, 55, 55)" }} >

                <br / >

                <div className = "header" style = { { fontSize: "1.3rem" }} > 

                < b >

                <i className = "user icon" > < /i> DEVELOPER 

                < /b >

                < /div > 

            < div className = "description" > 

                < br / >

                <b > Mail:

                < a href = "mailto: nikhileshbhagavan500@gmail.com" > 
                <span>&nbsp;</span>
                
                < i className = "bi bi-envelope contacticons">< /i>
                
                </a > 

                < /b >

                <br/ >
                
                < br / >

                <b > Phone: < a href = "tel:123-456-7890" >
         
                < i className = " bi bi-phone contacticons"></i>
                
                </a > 
                
                < /b > 
                
                <br/ > 
                
                < br / > 
                
            < /div > 
                
         < /div > 
                
      </div>
      
      );

    }
    export default ContactContainer;