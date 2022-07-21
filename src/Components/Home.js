import React from 'react'; 
import Container from "@material-ui/core/container"; 

const Home = () => {
  return (
    <Container>
        <div>
            <h1>Welcome to the Finer Things Book Club!</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZNMDsaco0RggBsueHe2mUQ_aHbGiz-Htjw&usqp=CAU">
                </img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6E4HpTxysc_HeXBzRYTVjjWROX1aNGwTkw&usqp=CAU"></img>
            <p>Click on the Book List tab to see the books we will cover in our book club.  You can add your suggestions to the book club by clicking on the "Add Book" tab</p>
        </div>
    </Container>
  )
}

export default Home