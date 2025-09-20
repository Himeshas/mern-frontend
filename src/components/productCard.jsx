
export default function ProductCard(props) {
  console.log(props);

  return (
    <div className="max-w-xs mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col justify-between">
        <h1 className="text-lg font-semibold text-gray-800 truncate">
          {props.name}
        </h1>
        <p className="text-gray-600 mt-2">Price: <span className="font-bold text-gray-900">Rs {props.price}</span></p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-300">
          View More
        </button>
      </div>
    </div>
  );
}
