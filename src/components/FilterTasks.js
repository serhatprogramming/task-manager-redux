import { useDispatch } from "react-redux";
import { setFilter } from "../actions/filterActions";

const FilterTasks = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    dispatch(setFilter(selectedValue));
  };

  return (
    <div>
      <span>
        <strong>Filter Tasks </strong>
      </span>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="urgent">Urgent</option>
        <option value="non-urgent">Non-Urgent</option>
      </select>
    </div>
  );
};

export default FilterTasks;
