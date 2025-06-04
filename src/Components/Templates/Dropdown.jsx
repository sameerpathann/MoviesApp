import { useDispatch } from "react-redux";

const Dropdown = ({ title, options, action }) => {
  const dispatch = useDispatch();
  return (
    <div className="select">
      <select
        onChange={(e) => dispatch(action(e.target.value))}
        defaultValue="0"
        name="format"
        id="format"
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
