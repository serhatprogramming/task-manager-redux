const FilterTasks = ({ filterType, setFilterType }) => {
  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected Filter:", selectedValue); // Print selected value to console
    // Implement filter change logic
  };

  return (
    <div>
      <span>
        <strong>Filter Tasks </strong>
      </span>
      <select value={filterType} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="urgent">Urgent</option>
        <option value="non-urgent">Non-Urgent</option>
      </select>
    </div>
  );
};

export default FilterTasks;
