import { useDispatch } from "react-redux";

const Dropdown = ({ title, options, action }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-xs">
      <select
        onChange={(e) => dispatch(action(e.target.value))}
        defaultValue="0"
        name="format"
        id="format"
        className="
          w-full
          bg-[#2a2a2a] 
          text-white 
          px-4 py-2 
          rounded-md 
          border border-gray-600 
          focus:outline-none focus:ring-2 focus:ring-[#6556CD]
          cursor-pointer
          transition
          duration-200
        "
        aria-label={title}
      >
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
