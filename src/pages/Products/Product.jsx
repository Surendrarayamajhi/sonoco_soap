import React,{useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';
import product1 from '../../assets/image/products/product1.png'
import product2 from '../../assets/image/products/product2.png'
import product3 from '../../assets/image/products/product3.png'
import product4 from '../../assets/image/products/product4.png'
import product5 from '../../assets/image/products/product5.png'


const products = [
  {
    id: 1,
    name: 'Sanvi Detergent Powder',
    href: '#',
    imageSrc: product1,
    imageAlt: "Sanvi  Detergent Powder",
    description: 'Sanvi Detergent Powder with Fresh lemon scent and oxygen power available from 150g to 5kg in different prices starting from Rs 20/-. Use within 24 months for best results.',
  },
  {
    id: 1,
    name: 'Hariyo Paat Detergent Powder',
    href: '#',
    imageSrc: product2,
    imageAlt: "Hariyo Paat Detergent Powder",
    description: 'Trusted eco-friendly solution with  a slogan"Tapaiko Chahana, Hamro Bishwas" available from 150g to 5 kg with starting price Rs 20/-.Best before 24 months from the date of packaging.',
  },
  {
    id: 1,
    name: 'Ghanti Detergent Powder',
    href: '#',
    imageSrc: product5,
    imageAlt: "Ghanti Detergent Powder",
    description: 'Ghanti detergent powder now available with our commitment to make something better with a slogan "first use then believe" available from 150g to 5kg in different prices.',
  },
  {
    id: 1,
    name: 'Hariyo Paat Machine Wash',
    href: '#',
    imageSrc: product4,
    imageAlt: "Hariyo Paat Machine Wash",
    description: 'Our trusted Detergent powder for machine wash with various formulations to suit different washing machine types and water conditions is now available from 150g to 5 kg in very affordable price.',
  },
  {
    id: 1,
    name: 'Hariyo Paat Dishwasher Bar',
    href: '#',
    imageSrc: product3,
    imageAlt: "Hariyo Paat Dishwasher Bar",
    description: 'Our dishwasher bar comes with the refreshing scent of lemon and powerful cleaning agents that effortlessly tackles tough stains and grease on your dishes is now available 95g packet starting from Rs 10/-.',
  },
  // More products...
]
const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Product Lists</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">At Sonoco, we're committed to delivering high-quality cleaning solutions that prioritize your family's well-being and environmental sustainability. Our journey began in 2076-01-30 B.S, and since then, we've been dedicated to revolutionizing the way households approach cleanliness.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
           <Link to='/home'>
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            </Link>
            
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
          <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {products.map((product) => (
                    <div key={product.id} className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-fit object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-lg text-blue-950 font-semibold">
                            <a href={product.href}>
                              <span aria-hidden="true" className="absolute inset-0" />
                              {product.name}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-blue-950 text-justify">{product.description}</p>
                        </div>
                        {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    
  
  )
}

export default Product;