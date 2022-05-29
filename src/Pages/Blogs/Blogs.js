import React from 'react';

const Blogs = () => {
    return (
        <div className='flex justify-center items-center mx-auto mb-[100px]' style={{width: '80%'}}>,
        <div>

       
            <h2 className='text-4xl font-bold mt-[100px] mb-[40px]'>Blogs</h2>

            <p className='mb-[20px]'>1. How will you improve the performance of a React Application?</p>
            <p className='mb-[20px]'>Answer: 
                <ul className='disc-circle'>
                    <li> Keeping component locally if needed.</li>
                    <li>Unnecessary re-rendering need to prevent.</li>
                    <li>Split code using dynamic import</li>
                    <li>Use lazy loading images</li>
                </ul>    
                
            </p> 
            <p className='mb-[20px]'> 2. What are the different ways to manage a state in a React application?
                Answer:
                <ul className='disc-circle'>
                    <li>Local state</li>
                    <li>Global State</li>
                    <li>Server state</li>
                    <li>url state</li>
                </ul> 
            </p>
            <p className='mb-[20px]'> 3. How does prototypical inheritance work?
                Answer:Prototypal inheritance is a javascript feature for adding methods and object properties. By using this feature object can inheritate properties and objects of another object.
            </p>
            <p className='mb-[20px]'> 4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                Answer:  
            </p>
            <p className='mb-[20px]'> 5. What is a unit test? Why should write unit tests?
                Answer: Unit test is a way by which each part of a product is checked when completed. It is a very necessary testing for better development and ensure error free production. It also prevent the problems and problems can be easily solved as it is tested small part by part.
            </p>
            <p className='mb-[20px]'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                Answer: 
            </p>
        </div>
        </div>
    );
};

export default Blogs;