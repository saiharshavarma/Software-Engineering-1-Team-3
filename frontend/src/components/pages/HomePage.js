

// import React, { useState, useEffect } from 'react';
// import { Search, User, MapPin, Star, Navigation, Calendar, Users } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const HOTEL_IMAGES = [
//   'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg', // Luxury hotel exterior
//   'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',   // Modern hotel room
//   'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg', // Pool villa
//   'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg', // Beach resort
//   'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg', // Mountain lodge
//   'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg', // Seaside hotel
//   'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg', // City hotel
//   'https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg', // Boutique hotel
//   'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg', // Resort suite
//   'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg'  // Luxury bathroom
// ];

// const Header = () => {
//   const [token, setToken] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const storedToken = localStorage.getItem('authToken');
//     if (storedToken) {
//       setToken(storedToken);
//     }

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const [message, setMessage] = useState({ type: '', content: '' });

//   const handleLogout = async () => {
//     try {
//       const url = `http://10.18.191.34:8000/student/api/logout/`;
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': ' Token ' + localStorage.getItem('authToken'),
//         },
//         body: JSON.stringify(''),
//       });

//       const responseData = await response.json();

//       if (!response.ok) {
//         throw new Error(responseData.detail || JSON.stringify(responseData) || 'Logout failed');
//       }

//       setMessage({ type: 'success', content: 'Logout successful!' });
//       localStorage.removeItem('authToken');
//       setToken(null);
//     } catch (error) {
//       console.error('Logout error:', error);
//       setMessage({ type: 'error', content: error.message });
//     }
//   };

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
//       <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
//         <div className="text-2xl font-bold text-blue-600 flex items-center">
//           <Navigation className="mr-2" />
//           CampusVacay.
//         </div>
//         <nav>
//           <ul className="flex space-x-8">
//             {['Home', 'Hotels', 'Rooms', 'About', 'Contact'].map((item) => (
//               <li key={item} className="text-gray-600 hover:text-blue-600 cursor-pointer transition duration-300">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </nav>
//         {token ? (
//           <button onClick={handleLogout} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg">
//             Logout
//           </button>
//         ) : (
//           <a href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg">
//             Login
//           </a>
//         )}
//       </div>
//     </header>
//   );
// };

// const Hero = () => (
//   <section className="relative flex justify-between items-center py-24 px-8 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
//     <div className="absolute inset-0 opacity-5">
//       <div className="absolute inset-0" style={{
//         backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
//       }} />
//     </div>

//     <div className="w-1/2 pr-12 relative">
//       <div className="animate-fadeIn">
//         <h1 className="text-5xl font-bold mb-6 leading-tight text-gray-800">
//           Forget Busy Work,
//           <br />
//           <span className="text-blue-600">Start Next Vacation</span>
//         </h1>
//         <p className="text-gray-600 mb-8 text-lg">
//           Where dreams come true! Start your unforgettable journey with us. 
//           Book a vacation you'll never forget!
//         </p>
//         <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center">
//           <Navigation className="mr-2" />
//           Explore Now
//         </button>
//         <div className="flex space-x-16 mt-16">
//           {[
//             ['2500+', 'stays', '🏨'],
//             ['250', 'cities', '🌆'],
//             ['100', 'locations', '📍']
//           ].map(([number, label, emoji]) => (
//             <div key={label} className="text-center transform hover:scale-105 transition duration-300">
//               <div className="text-4xl mb-2">{emoji}</div>
//               <strong className="text-3xl block font-bold text-blue-600">{number}</strong>
//               <span className="text-gray-600 capitalize">{label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     <div className="w-1/2 relative">
//       <img 
//         src={HOTEL_IMAGES[0]}
//         alt="Luxury Room"
//         className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 object-cover"
//       />
//       <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
//         <div className="flex items-center space-x-2">
//           <div className="text-yellow-400 text-2xl flex">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} size={20} fill="currentColor" />
//             ))}
//           </div>
//           <div>
//             <p className="font-bold">4.9/5 Rating</p>
//             <p className="text-sm text-gray-600">From 2,500+ Reviews</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// const SearchBar = () => {
//   const navigate = useNavigate();

//   const [searchData, setSearchData] = useState({
//     location: '',
//     check_in: '',
//     check_out: '',
//     guests: ''
//   });

//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSearchData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setIsLoading(true);

//     const requestBody = {
//       location: searchData.location,
//       check_in: searchData.check_in,
//       check_out: searchData.check_out,
//       guests: searchData.guests
//     };

//     try {
//       const response = await fetch('http://10.18.191.34:8000/hotel/api/search/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.detail || 'Search failed');
//       }

//       navigate('/search', { state: { searchResults: data } });
//     } catch (error) {
//       setError('Failed to perform search. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto -mt-12 relative z-10 border border-gray-100 transform hover:scale-[1.02] transition duration-300">
//       <form onSubmit={handleSearch} className="flex flex-wrap gap-6">
//         <div className="flex-1 min-w-[200px] group">
//           <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition duration-300">
//             <MapPin size={20} className="text-blue-600" />
//             <input
//               type="text"
//               name="location"
//               value={searchData.location}
//               onChange={handleChange}
//               placeholder="Where are you going?"
//               className="w-full bg-transparent focus:outline-none"
//             />
//           </div>
//         </div>

//         <div className="flex-1 min-w-[200px] group">
//           <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition duration-300">
//             <Calendar size={20} className="text-blue-600" />
//             <input
//               type="date"
//               name="check_in"
//               value={searchData.check_in}
//               onChange={handleChange}
//               className="w-full bg-transparent focus:outline-none"
//               min={new Date().toISOString().split('T')[0]}
//             />
//           </div>
//         </div>

//         <div className="flex-1 min-w-[200px] group">
//           <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition duration-300">
//             <Calendar size={20} className="text-blue-600" />
//             <input
//               type="date"
//               name="check_out"
//               value={searchData.check_out}
//               onChange={handleChange}
//               className="w-full bg-transparent focus:outline-none"
//               min={searchData.check_in || new Date().toISOString().split('T')[0]}
//             />
//           </div>
//         </div>

//         <div className="flex-1 min-w-[150px] group">
//           <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition duration-300">
//             <Users size={20} className="text-blue-600" />
//             <select
//               name="guests"
//               value={searchData.guests}
//               onChange={handleChange}
//               className="w-full bg-transparent focus:outline-none appearance-none"
//             >
//               <option value="">Select Guests</option>
//               <option value="1">1 Guest</option>
//               <option value="2">2 Guests</option>
//               <option value="3">3 Guests</option>
//               <option value="4">4 Guests</option>
//               <option value="5">5+ Guests</option>
//             </select>
//           </div>
//         </div>

//         <button
//           type="submit"
//           disabled={isLoading}
//           className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition duration-300 flex-shrink-0 flex items-center space-x-2 transform hover:scale-105 shadow-lg disabled:opacity-50"
//         >
//           {isLoading ? (
//             <>
//               <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//               <span>Searching...</span>
//             </>
//           ) : (
//             <>
//               <Search size={20} />
//               <span>Search Hotels</span>
//             </>
//           )}
//         </button>
//       </form>

//       {error && (
//         <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg flex items-center">
//           <span className="mr-2">⚠️</span>
//           {error}
//         </div>
//       )}
//     </div>
//   );
// };

// const PropertyCard = ({ imageIndex, price, name, location, popular, size = "small", rating = 4.8, reviews = 128 }) => {
//   const imageSrc = HOTEL_IMAGES[imageIndex % HOTEL_IMAGES.length];

//   return (
//     <div className={`bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl transform hover:-translate-y-1 ${size === "large" ? "col-span-2 row-span-2" : ""}`}>
//       <div className="relative group">
//         <img
//           src={imageSrc}
//           alt={name}
//           className={`w-full object-cover ${size === "large" ? "h-96" : "h-48"} transition-transform duration-300 group-hover:scale-105`}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm shadow-lg">
//           ${price}/night
//         </span>
//         {popular && (
//           <span className="absolute top-4 right-4 bg-yellow-400 text-white px-4 py-2 rounded-full text-sm shadow-lg flex items-center">
//             <Star className="w-4 h-4 mr-1" fill="currentColor" /> Popular Choice
//           </span>
//         )}
//       </div>
//       <div className="p-6">
//         <h3 className="font-bold text-xl mb-2 text-gray-800">{name}</h3>
//         <div className="flex items-center text-gray-600 mb-3">
//           <MapPin size={16} className="mr-2 text-blue-600" />
//           <p>{location}</p>
//         </div>
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="flex items-center text-yellow-400 mr-2">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} size={16} className={i < Math.floor(rating) ? 'fill-current' : 'stroke-current'} />
//               ))}
//             </div>
//             <span className="text-gray-600 text-sm">
//               {rating} ({reviews} reviews)
//             </span>
//           </div>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition duration-300 transform hover:scale-105">
//             View Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const PropertyGrid = () => {
//   const featuredProperties = [
//     { imageIndex: 0, price: 299, name: "Blue Origin Farms", location: "Bali", popular: true, rating: 4.9, reviews: 256 },
//     { imageIndex: 1, price: 429, name: "Ocean View Paradise", location: "Maldives", rating: 4.8, reviews: 189 },
//     { imageIndex: 2, price: 355, name: "Alpine Retreat", location: "Switzerland", rating: 4.7, reviews: 143 },
//     { imageIndex: 3, price: 275, name: "Zen Garden Inn", location: "Japan", rating: 4.9, reviews: 167 },
//     { imageIndex: 4, price: 199, name: "Urban Oasis", location: "Thailand", rating: 4.6, reviews: 198 }
//   ];

//   const popularProperties = [
//     { imageIndex: 5, price: 330, name: "Shangri-La Suite", location: "Singapore", popular: true, rating: 4.8, reviews: 234 },
//     { imageIndex: 6, price: 285, name: "Beachfront Villa", location: "Thailand", rating: 4.7, reviews: 156 },
//     { imageIndex: 7, price: 240, name: "Green Valley Resort", location: "Indonesia", rating: 4.9, reviews: 178 },
//     { imageIndex: 8, price: 220, name: "Modern Heights", location: "South Korea", rating: 4.6, reviews: 145 }
//   ];

//   return (
//     <section className="py-16 px-8 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-800">Most Picked</h2>
//           <button className="text-blue-600 hover:text-blue-700 flex items-center transition duration-300">
//             View all properties
//             <Navigation className="ml-2 w-4 h-4" />
//           </button>
//         </div>

//         <div className="grid grid-cols-3 gap-8">
//           {featuredProperties.map((property, index) => (
//             <PropertyCard
//               key={property.name}
//               {...property}
//               size={index === 0 ? "large" : "small"}
//             />
//           ))}
//         </div>

//         <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-8">Popular Choices</h2>
//         <div className="grid grid-cols-4 gap-6">
//           {popularProperties.map((property) => (
//             <PropertyCard key={property.name} {...property} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const HomePage = () => (
//   <div className="bg-gray-50 min-h-screen relative">
//     <div className="absolute inset-0 bg-repeat opacity-5"
//       style={{
//         backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h20L0 20z'/%3E%3C/g%3E%3C/svg%3E")`
//       }}
//     />

//     <Header />
//     <Hero />
//     <SearchBar />
//     <PropertyGrid />

//     <button
//       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//       className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-110"
//     >
//       <Navigation className="w-6 h-6" />
//     </button>
//   </div>
// );

// export default HomePage;




import React, { useState, useEffect } from 'react';
import { Search, MapPin, Star, Navigation, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HOTEL_IMAGES = [
  'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
  'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
  'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg',
  'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg',
  'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
  'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
  'https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg',
  'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg',
  'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg'
];

const Header = () => {
  const [token, setToken] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      const url = `http://10.18.191.34:8000/student/api/logout/`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + localStorage.getItem('authToken'),
        },
        body: JSON.stringify(''),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.detail || JSON.stringify(responseData) || 'Logout failed');
      }

      setMessage({ type: 'success', content: 'Logout successful!' });
      localStorage.removeItem('authToken');
      setToken(null);
    } catch (error) {
      console.error('Logout error:', error);
      setMessage({ type: 'error', content: error.message });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-3xl font-bold text-blue-700 flex items-center">
          <Navigation className="mr-2" />
          CampusVacay.
        </div>
        <nav className="hidden md:flex space-x-8 text-lg">
          {['Home', 'Hotels', 'Rooms', 'About', 'Contact'].map((item) => (
            <li key={item} className="list-none text-gray-600 hover:text-blue-700 cursor-pointer transition duration-300">
              {item}
            </li>
          ))}
        </nav>
        {token ? (
          <button onClick={handleLogout} className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition duration-300">
            Logout
          </button>
        ) : (
          <a href="/login" className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition duration-300">
            Login
          </a>
        )}
      </div>
      {message.content && (
        <div className={`fixed top-16 right-8 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message.content}
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="flex justify-between items-center py-32 px-6 bg-gradient-to-br from-white to-blue-50">
    <div className="max-w-6xl mx-auto flex flex-wrap lg:flex-nowrap items-center w-full">
      <div className="lg:w-1/2 pr-8">
        <h1 className="text-6xl font-bold mb-6 text-gray-800 leading-tight">
          Forget Busy Work,
          <br />
          <span className="text-blue-700">Start Next Vacation</span>
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Where student adventures meet budget-friendly getaways.
          Book smart, travel easy, and create memories that last!
        </p>
        <button className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-800 transition duration-300">
          Show More
        </button>
        <div className="flex space-x-12 mt-10">
          {[
            ['2500', 'Users', '🏨'],
            ['200', 'Treasure', '📸'],
            ['100', 'Cities', '📍']
          ].map(([number, label, emoji]) => (
            <div key={label} className="text-center">
              <div className="text-4xl">{emoji}</div>
              <strong className="text-3xl block font-bold text-blue-700">{number}</strong>
              <span className="text-gray-600 capitalize">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2">
        <img
          src={HOTEL_IMAGES[0]}
          alt="Luxury Room"
          className="rounded-2xl shadow-lg object-cover w-full h-80"
        />
      </div>
    </div>
  </section>
);

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    location: '',
    check_in: '',
    check_out: '',
    guests: ''
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const requestBody = {
      location: searchData.location,
      check_in: searchData.check_in,
      check_out: searchData.check_out,
      guests: searchData.guests
    };

    try {
      const response = await fetch('http://10.18.191.34:8000/hotel/api/search/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Search failed');
      }

      navigate('/search', { state: { searchResults: data } });
    } catch (error) {
      setError('Failed to perform search. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-6xl mx-auto -mt-14 relative z-10 border border-gray-200">
      <form onSubmit={handleSearch} className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block mb-1 text-gray-600">Check Available</label>
          <input
            type="date"
            name="check_in"
            value={searchData.check_in}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block mb-1 text-gray-600">Check Out</label>
          <input
            type="date"
            name="check_out"
            value={searchData.check_out}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            min={searchData.check_in || new Date().toISOString().split('T')[0]}
          />
        </div>
        <div className="flex-1 min-w-[150px]">
          <label className="block mb-1 text-gray-600">Guests</label>
          <select
            name="guests"
            value={searchData.guests}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          >
            <option value="">Select Guests</option>
            {[1, 2, 3, 4, '5+'].map((num) => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block mb-1 text-gray-600">Location</label>
          <input
            type="text"
            name="location"
            value={searchData.location}
            onChange={handleChange}
            placeholder="Enter a city"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300 flex items-center"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Searching...</span>
            </>
          ) : (
            <>
              <Search className="mr-2" size={18} />
              Search
            </>
          )}
        </button>
      </form>
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
    </div>
  );
};

const PropertyCard = ({ imageIndex, price, name, location, popular }) => {
  const imageSrc = HOTEL_IMAGES[imageIndex % HOTEL_IMAGES.length];

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-60 object-cover"
        />
        {popular && (
          <div className="absolute top-4 right-4 bg-blue-700 text-white px-2 py-1 rounded-full text-xs">
            Popular Choice
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
          ${price} per night
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
    </div>
  );
};

const PropertyGrid = () => {
  const properties = [
    { imageIndex: 0, price: 50, name: "Blue Origin Farms", location: "Galle, Sri Lanka", popular: true },
    { imageIndex: 1, price: 22, name: "Ocean Land", location: "Trincomalee, Sri Lanka" },
    { imageIndex: 2, price: 62, name: "Vinna Villa", location: "Beruwala, Sri Lanka" },
    { imageIndex: 3, price: 856, name: "Stark House", location: "Dehiwala, Sri Lanka" },
    { imageIndex: 4, price: 72, name: "Bobox", location: "Kandy, Sri Lanka" },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Most Picked</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => (
  <div className="bg-gray-50 min-h-screen">
    <Header />
    <Hero />
    <SearchBar />
    <PropertyGrid />
  </div>
);

export default HomePage;
