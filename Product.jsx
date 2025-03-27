// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Slider from '.././assets/image/shop2.jpg'



function BasicExample1() {


    const  p ={
        // background :'black',
        
    }

    const p1 ={
      color:'blue',
      // background:'yellow',
      
      hover:Button
      
    
    }
    const pp ={
      
    }

  return (

  <>
  <div className='flex items-center justify-center'>
      <div className="grid lg:grid-cols-4 lg:gap-4  md:grid-cols-2 md:gap-2 sm:grid-cols-1 sm:gap-1 ">
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\1.png" style={p1} alt='Pedigree' className='m-auto w-auto h-auto' />
          <Card.Body>
                  <Card.Title>Pedigree</Card.Title>
                  <Card.Text>Pedigree for better health</Card.Text>
                  <Card.Text>$  200</Card.Text>
                  <Button  variant="primary">Buy</Button>
          </Card.Body>
        </Card> 


        <Card className='w-3xs text-center m-2' style={pp}>
          <Card.Img variant="top" src="src\assets\image\3.jpg" alt='milk' className='m-auto w-auto h-auto'/>
          <Card.Body>
                  <Card.Title>Mother Dairy Milk </Card.Title>
                  <Card.Text> Mother Dairy Milk  for better health </Card.Text>
                  <Card.Text> $ 200</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card> 

        
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\amul.jpg" alt='Amul' className='m-auto w-auto h-auto'/>
          <Card.Body>
                  <Card.Title>Amul Butter</Card.Title>
                  <Card.Text>Amul  Pasteteurist Butter for better health</Card.Text>
                  <Card.Text> $ 200</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card> 

        <Card className='w-3xs text-center m-2' >
          <Card.Img variant="top" src="src\assets\image\4.jpg" alt='Dahi' className='m-auto w-auto h-auto'/>
          <Card.Body>
                  <Card.Title>Amul Vasti Dahi</Card.Title>
                  <Card.Text>Amul Vasti Dahi for better health</Card.Text>
                  <Card.Text> $ 200</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card> 
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\6.jpg" alt='amul' className='m-auto w-auto h-auto'/>
          <Card.Body>
                  <Card.Title>Amul Gold</Card.Title>
                  <Card.Text>Amul Gold for better health</Card.Text>
                  <Card.Text> $ 200</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card> 
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\8.jpg" alt='milk' className='m-auto w-auto h-auto'/>
          <Card.Body>
                  <Card.Title>Full Cream milk</Card.Title>
                  <Card.Text>milk for better health</Card.Text>
                  <Card.Text> # 200</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card> 
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\14.jpg" alt='sop' className='m-auto w-auto h-auto'/>
          <Card.Body>
                  <Card.Title>Mozo </Card.Title>
                  <Card.Text>Mozo </Card.Text>
                  <Card.Text> $ 200</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card> 
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\9.jpg" alt='milk' className='m-auto w-auto h-auto'/>
          <Card.Body>
                  <Card.Title>foned Milk</Card.Title>
                  <Card.Text>Milk for better health</Card.Text>
                  <Card.Text>$ 200</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>

          
        </Card> 
        </div>
      </div>
      
      <p style={{color:'black',background:'lightblue', fontSize: '44px', textAlign:'center',border:'1px solid pink'}}> Dairy, Bread & Eggs</p>


{/* SEcound Component */}

      <div className='flex items-center justify-center   '>
      <div className="grid lg:grid-cols-5 lg:gap-5 m-3 md:grid-cols-2 md:gap-2 sm:grid-cols-1 sm:gap-1 ">
        <Card className='w-3xs text-center m-2  '>
          <Card.Img variant="top" src="src\assets\image\sweet&tooth.png" alt='Pedigree' className='m-auto w-auto h-auto' />
          <Card.Body>
                  {/* <Card.Title>Pedigree</Card.Title> */}
                  <Card.Text>Dairy Milk Chocolate for better health</Card.Text>
                  <Card.Text>$  200</Card.Text>
                  <Button variant="primary"> Buy</Button>
          </Card.Body>
        </Card> 
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\backery.png" alt='Pedigree' className='m-auto w-auto h-auto' />
          <Card.Body>
                  {/* <Card.Title>Pedigree</Card.Title> */}
                  <Card.Text>Battar and Buscuits for better health</Card.Text>
                  <Card.Text>$  200</Card.Text>
                  <Button variant="primary"> Buy</Button>
          </Card.Body>
        </Card> 
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\coldDrinks.png" alt='Peosi' className='m-auto w-auto h-auto' />
          <Card.Body>
                  {/* <Card.Title>Pedigree</Card.Title> */}
                  <Card.Text>Pepsi Cold Drink for better health</Card.Text>
                  <Card.Text>$  100</Card.Text>
                  <Button variant="primary"> Buy</Button>
          </Card.Body>
        </Card> 
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\breakfast.png" alt='Corn' className='m-auto w-auto h-auto' />
          <Card.Body>
                  {/* <Card.Title>Pedigree</Card.Title> */}
                  <Card.Text>Corn Flakes for better health</Card.Text>
                  <Card.Text>$  200</Card.Text>
                  <Button variant="primary"> Buy</Button>
          </Card.Body>
        </Card> 
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\39.png" alt='nute' className='m-auto w-auto h-auto' />
          <Card.Body>
                  {/* <Card.Title>Pedigree</Card.Title> */}
                  <Card.Text>Tea & Coffee  for better health</Card.Text>
                  <Card.Text>$  300</Card.Text>
                  <Button variant="primary"> Buy</Button>
          </Card.Body>
        </Card> 
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\snacks.png" alt='lays' className='m-auto w-auto h-auto' />
          <Card.Body>
                  {/* <Card.Title>Pedigree</Card.Title> */}
                  <Card.Text>Lays Snacks for better health</Card.Text>
                  <Card.Text>$  200</Card.Text>
                  <Button variant="primary"> Buy</Button>
          </Card.Body>
        </Card> 
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\tea&Coffee.png" alt='coffee' className='m-auto w-auto h-auto' />
          <Card.Body>
                  {/* <Card.Title>Pedigree</Card.Title> */}
                  <Card.Text> Tea & Coffee And Heath Drink for better health</Card.Text>
                  <Card.Text>$  200</Card.Text>
                  <Button variant="primary"> Buy</Button>
          </Card.Body>
        </Card> 
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\fruits.png" alt='Pedigree' className='m-auto w-auto h-auto' />
          <Card.Body>
                  {/* <Card.Title>Pedigree</Card.Title> */}
                  <Card.Text>Fruits & Vegetables for better health</Card.Text>
                  <Card.Text>$  200</Card.Text>
                  <Button variant="primary"> Buy</Button>
          </Card.Body>
        </Card> 
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\sweet&tooth.png" alt='Pedigree' className='m-auto w-auto h-auto' />
          <Card.Body>
                  {/* <Card.Title>Pedigree</Card.Title> */}
                  <Card.Text>Pedigree for better health</Card.Text>
                  <Card.Text>$  200</Card.Text>
                  <Button variant="primary"> Buy</Button>
          </Card.Body>
        </Card> 
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src="src\assets\image\dairy&bread.png" alt='dairy' className='m-auto w-auto h-auto' />
          <Card.Body>
                  {/* <Card.Title>Pedigree</Card.Title> */}
                  <Card.Text>Dairy and Dring milk for better health</Card.Text>
                  <Card.Text>$  200</Card.Text>
                  <Button variant="primary"> Buy</Button>
          </Card.Body>
        </Card> 
        </div>
        </div>
        
  </> 
    
  )
}

export default BasicExample1;