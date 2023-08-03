import css from "./filterlist.module.css"

const FilterList = ({value, onChange}) => {
  return (
    <label className={css.form_style}>
      <h2>Find contacts by name</h2>
      <input type="text" className={css.form_input} value={value} onChange={onChange}/>
    </label>
  );
};

export default FilterList